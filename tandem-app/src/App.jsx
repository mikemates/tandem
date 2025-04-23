import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import tandemLogo from './assets/tandemlogo.svg'

// Page components
import MatchingPage from './pages/matching/MatchingPage'
import MessagingPage from './pages/messaging/MessagingPage'
import ProfilePage from './pages/profile/ProfilePage'
import CommunityPage from './pages/community/CommunityPage'
import DashboardPage from './pages/dashboard/DashboardPage'

function App() {
  // This will be replaced with proper auth context later
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [window.location.pathname])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/dashboard">
                    <img src={tandemLogo} alt="Tandem" className="h-6" />
                  </Link>
                </div>
                
                {/* Desktop Navigation */}
                {isLoggedIn && (
                  <nav className="hidden md:ml-6 md:flex md:space-x-8">
                    <Link to="/profile" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                      Profile
                    </Link>
                    <Link to="/matches" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                      Matches
                    </Link>
                    <Link to="/messages" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                      Messages
                    </Link>
                    <Link to="/community" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                      Community
                    </Link>
                  </nav>
                )}
                
                {/* Mobile menu button */}
                <div className="flex items-center md:hidden">
                  {isLoggedIn && (
                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      {/* Hamburger icon */}
                      {!isMobileMenuOpen ? (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      ) : (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
                
                {/* Desktop sign in/out button */}
                <div className="hidden md:flex md:items-center">
                  {isLoggedIn ? (
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="ml-4 btn btn-secondary"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <button 
                      onClick={() => setIsLoggedIn(true)}
                      className="ml-4 btn btn-primary"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Mobile menu, show/hide based on state */}
            {isMobileMenuOpen && isLoggedIn && (
              <div className="md:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  <Link 
                    to="/dashboard"
                    className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-primary-700 border-primary-500 bg-primary-50 focus:outline-none"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/matches"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Matches
                  </Link>
                  <Link 
                    to="/messages"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Messages
                  </Link>
                  <Link 
                    to="/community"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Community
                  </Link>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <Routes>
            <Route path="/" element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <div className="text-center px-4 py-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Find your people. Build your place.
                  </h2>
                  <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                    Connect with people based on complementary skills, shared interests, and proximity.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-0">
                    <Link to="/matches" className="btn btn-primary sm:mr-4 px-6 py-3 text-base">
                      Find Matches
                    </Link>
                    <Link to="/community" className="btn btn-secondary px-6 py-3 text-base">
                      Discover Community
                    </Link>
                  </div>
                </div>
              )
            } />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfilePage mode="edit" />} />
            <Route path="/profile/skills" element={<ProfilePage mode="skills" />} />
            <Route path="/profile/interests" element={<ProfilePage mode="interests" />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/matches" element={<MatchingPage />} />
            <Route path="/matches/:matchId" element={<MatchingPage />} />
            <Route path="/messages" element={<MessagingPage />} />
            <Route path="/messages/:conversationId" element={<MessagingPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/create" element={<CommunityPage mode="create" />} />
            <Route path="/community/:activityId" element={<CommunityPage />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; 2025 Tandem. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
