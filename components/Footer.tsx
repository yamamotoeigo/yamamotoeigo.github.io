'use client';
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaSpeakerDeck } from "react-icons/fa6"
import { SiZenn } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Yamamoto&apos;s Portfolio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/yamamotoeigo" className="hover:text-blue-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://x.com/YamamotoD3v" className="hover:text-blue-400 transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="https://zenn.dev/yama_moto" className="hover:text-blue-400 transition-colors">
              <SiZenn size={20} />
            </a>
            <a href="https://speakerdeck.com/yamamotoeigo" className="hover:text-blue-400 transition-colors">
              <FaSpeakerDeck size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

