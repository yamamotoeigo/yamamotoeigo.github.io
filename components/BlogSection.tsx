'use client';

import { useEffect, useState } from 'react';

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // 自身の API ルート（CORS 対策済み）からデータを取得
    fetch('/api/zenn')
      .then((response) => response.json())
      .then((data) => {
        // API レスポンスは { articles: [...] } の形式
        setBlogPosts(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <section id="blogs" className="py-20 bg-white-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* サムネイルとして emoji を表示 */}
              <div className="flex items-center justify-center w-full h-48 bg-[#CFE4FE]">
                <span className="text-6xl">{post.emoji}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {new Date(post.published_at).toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-4">
                  {post.body_letters_count} 文字
                </p>
                {/* 外部リンク: "Read More" をクリックすると Zenn の記事ページに新しいタブで遷移 */}
                <a
                  href={`https://zenn.dev${post.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Read More <span className="text-xs">(外部サイトに遷移します)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
