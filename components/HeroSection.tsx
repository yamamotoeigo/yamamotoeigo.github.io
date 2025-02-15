'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    // キーワードリストをセット
    setKeywords([
      'Go', 'Python', 'Java', 'Compute Vision', 'Development',
      'Infrastructure', 'AI', 'Machine Learning', 'Cloud', 'WebApp',
      'React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS',
      'Frontend', 'Backend', 'Fullstack',
      'Docker', 'Networking', 'Server', 'Database',
      'Go', 'Python', 'Java', 'Compute Vision', 'Development',
      'Infrastructure', 'AI', 'Machine Learning', 'Cloud', 'WebApp',
      'React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS',
      'Frontend', 'Backend', 'Fullstack',
      'Docker', 'Networking', 'Server', 'Database'
    ]);
  }, []);

  const getRandomPosition = () => `${Math.random() * 100}vw`;
  const getRandomHeight = () => `${-40 + Math.random() * 80}vh`;
  const getRandomDelay = () => Math.random() * 5;
  const getRandomDuration = () => 5 + Math.random() * 10;

  const handleScrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-[#1a1a1a]">
      {/* ネオンキーワードのアニメーション */}
      {keywords.map((word, index) => (
        <motion.div
          key={index}
          className="absolute text-[#cf39fd] text-lg font-bold whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,110,199,0.8)]"
          initial={{ x: '100vw', y: getRandomHeight(), opacity: 0.8 }}
          animate={{ x: '-100vw' }}
          transition={{
            duration: getRandomDuration(),
            delay: getRandomDelay(),
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ left: getRandomPosition() }}
        >
          {word}
        </motion.div>
      ))}

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-lg bg-black bg-opacity-70 shadow-xl ring-2 ring-[#00FFFF] ring-offset-2 ring-offset-black"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            I&apos;m a baby engineer, still learning the ropes!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00FFFF] text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#3c4eef] transition-colors"
            onClick={handleScrollToWorks} // 追加
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
