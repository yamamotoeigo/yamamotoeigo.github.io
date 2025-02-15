'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { client } from '@/libs/client'; // microCMS用のクライアントインスタンス

// プロジェクトの型定義（必要に応じてフィールドを拡張してください）
interface Project {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  abstract: string;
  stacks: string;
  link?: string;
  content: string;
  date: string;
}

// ProjectModal の props 型
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// HTML文字列からすべての画像URLを抽出するヘルパー関数
function extractImageUrls(content: string): string[] {
  const regex = /<img\s+[^>]*src="([^"]+)"[^>]*>/gi;
  const urls: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const imageUrls = extractImageUrls(project.content);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // 本文から画像タグを除去し、リンクに target, rel, クラスを追加
  const processedContent = project.content
    .replace(/<img[^>]*>/g, '')
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" class="text-blue-600 underline" ');

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  // 簡易フォーカストラップ
  useEffect(() => {
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement | null;
      firstElement?.focus();
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* クローズボタン */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ヘッダー */}
        <div className="p-6 border-b border-gray-200">
          <h2 id="modal-title" className="text-2xl font-bold mb-2">{project.title}</h2>
          <div className="text-gray-500 text-sm mb-1">
            更新日: {new Date(project.date).toLocaleDateString()}
          </div>
          <div className="text-gray-500 text-sm">
            使用技術など: {project.stacks}
          </div>
          {project.link && (
            <div className="text-gray-500 text-sm mt-1">
              <span>Link: </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {project.link}
              </a>
            </div>
          )}
        </div>

        {/* コンテンツ部：レスポンシブな２カラムレイアウト */}
        <div className="p-6 md:grid md:grid-cols-2 md:gap-6">
          {/* 左側：画像スライダーとサムネイル */}
          <div className="mb-6 md:mb-0">
            {imageUrls.length > 0 && (
              <div>
                {/* サムネイル行 */}
                <div className="flex space-x-2 overflow-x-auto py-2 mb-2">
                  {imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 rounded-md border ${index === currentIndex ? 'border-blue-600' : 'border-gray-300'
                        } cursor-pointer flex-shrink-0 transform hover:scale-105 transition-transform`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <Image
                        src={url}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
                {/* メイン画像スライダー */}
                <div className="relative h-80">
                  <Image
                    src={imageUrls[currentIndex]}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="rounded-md object-contain"
                  />
                  {imageUrls.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* 右側：詳細テキスト */}
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: processedContent }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    client
      .get({
        endpoint: 'projects',
      })
      .then((res) => {
        setProjects(res.contents);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const imageUrls = extractImageUrls(project.content);
            const firstImageUrl = imageUrls.length > 0 ? imageUrls[0] : null;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {firstImageUrl && (
                  <Image
                    src={firstImageUrl}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.abstract}</p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
