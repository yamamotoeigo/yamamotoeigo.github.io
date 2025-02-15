'use client';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

