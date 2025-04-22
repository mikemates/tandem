import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import tandemLogo from './assets/tandemlogo.svg'

// Page components
import MatchingPage from './pages/matching/MatchingPage'
import MessagingPage from './pages/messaging/MessagingPage'
import ProfilePage from './pages/profile/ProfilePage'
import CommunityPage from './pages/community/CommunityPage'

function App() {
  // This will be replaced with proper auth context later
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img src={tandemLogo} alt="Tandem" className="h-6" />
                </div>
                {isLoggedIn && (
                  <nav className="ml-6 flex space-x-8">
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
              </div>
              <div className="flex items-center">
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
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Find your people. Build your place.
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with people based on complementary skills, shared interests, and proximity.
                </p>
                <div className="flex justify-center">
                  <Link to="/matches" className="btn btn-primary mr-4">
                    Find Matches
                  </Link>
                  <Link to="/community" className="btn btn-secondary">
                    Discover Community
                  </Link>
                </div>
              </div>
            } />
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
