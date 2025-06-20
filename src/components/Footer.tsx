import React from 'react'
import { Gamepad2, Twitter, Discord, Youtube, Twitch } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-gaming-500 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">UEC</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ultimate Esports Community - Where gamers compete, connect, and conquer. 
              Join the revolution and take your gaming to the next level.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-400 transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teams</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chat</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 UEC - Ultimate Esports Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer