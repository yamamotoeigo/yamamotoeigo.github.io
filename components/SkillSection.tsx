'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/libs/client'; // microCMS用のクライアントインスタンスをインポート

export default function SkillSection() {
  const [skills, setSkills] = useState([]);

  const levelGuide = [
    {
      level: 'Beginner',
      color: 'bg-gray-100 text-gray-700',
      icon: '🐣',
      description: '基本的なタスクを遂行できる。指示が必要。',
      example: '簡単な機能追加、バグ修正'
    },
    {
      level: 'Intermediate',
      color: 'bg-yellow-100 text-yellow-700',
      icon: '🚀',
      description: '独立してタスクを遂行可能。設計支援が必要。',
      example: '小規模な機能開発、API統合'
    },
    {
      level: 'Advanced',
      color: 'bg-blue-100 text-blue-700',
      icon: '💼',
      description: '複雑なタスクをリードし、チームをサポート。',
      example: '大規模アプリ設計・開発、コードレビュー'
    },
    {
      level: 'Expert',
      color: 'bg-green-100 text-green-700',
      icon: '🧠',
      description: '技術的意思決定が可能。全体設計をリード。',
      example: '技術選定、アーキテクチャ設計'
    }
  ];

  const levelStyles = {
    Beginner: 'bg-gray-100 text-gray-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-blue-100 text-blue-700',
    Expert: 'bg-green-100 text-green-700'
  };

  useEffect(() => {
    client
      .get({
        endpoint: 'skills',
      })
      .then((res) => {
        // microCMSのレスポンス形式 { contents: [...] } を想定
        setSkills(res.contents);
      })
      .catch((error) => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  return (
    <section id="skills" className="py-20 bg-white-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skill Level Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {levelGuide.map((level) => (
            <div
              key={level.level}
              className={`p-4 rounded-lg shadow-md ${level.color}`}
            >
              <h4 className="font-bold text-lg mb-2 flex items-center">
                <span className="mr-2 text-2xl">{level.icon}</span>
                {level.level}
              </h4>
              <p className="text-sm mb-2">{level.description}</p>
              <p className="text-xs italic">例: {level.example}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
              {/* APIの level は配列なので最初の要素を利用 */}
              <span
                className={`inline-block px-3 py-1 mb-2 rounded-full text-sm font-medium ${
                  levelStyles[skill.level[0]] || 'bg-gray-200 text-gray-700'
                }`}
              >
                {skill.level[0]}
              </span>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
