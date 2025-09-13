'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Main Hello World Message */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light">
            Welcome to your Next.js application
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="space-y-8 mt-12">
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Info Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎉 Your App is Ready!
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This is a simple Hello World page built with Next.js, React, and Tailwind CSS. 
              The page features modern styling, responsive design, and smooth animations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js 15</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">React 19</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">TypeScript</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-gray-500 text-sm mt-8">
            Built with ❤️ using modern web technologies
          </div>
        </div>
      </div>
    </main>
  )
}