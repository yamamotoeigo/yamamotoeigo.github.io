'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // スムーズスクロール用の関数
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      closeMenu() // モバイルメニューを閉じる
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-600">
          Yamamoto's Portfolio
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav
          className={`fixed top-0 right-0 h-full z-50 bg-white md:bg-transparent md:static md:flex md:space-x-4 p-4 md:p-0 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {['Home', 'Profile', 'Skills', 'Works', 'Blogs', 'Background'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors block cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </header>
  )
}
