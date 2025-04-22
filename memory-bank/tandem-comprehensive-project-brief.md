# Tandem - Comprehensive Project Brief and Technical Plan

## 1. Project Overview

Tandem is a local-first platform focused on authentic community building through skills exchange and interest matching. The platform enables users to connect based on complementary needs, abilities, and passions within a local community context.

### Brand Promise
"Find your people. Build your place."

### Core Differentiators
- **Local-first vs. global-first approach**: Prioritizing proximity for real-world connections
- **Community-building vs. transactional exchanges**: Value exchange over monetary transactions
- **Authentic connections vs. algorithmic feeds**: Meaningful matches over endless scrolling
- **Skill and interest matching vs. service marketplace**: Learning and sharing rather than buying and selling
- **Serendipitous discovery vs. utilitarian search**: Encouraging unexpected connections

## 2. Target Users

### Primary Personas

#### Talia, The Skill Sharer
- Multi-talented creative who wants to share her skills (DJing, coding)
- Seeking connection and collaboration in her community
- Values giving back and meaningful interactions
- Interested in both sharing knowledge and developing new skills

#### Eli, The Seeker
- Recently relocated and feeling disconnected
- Looking for specific skills (guitar lessons) and interest groups (D&D)
- Values authentic connections and community belonging
- Wants trusted recommendations for local engagement

#### Sophie, The Community Moderator
- Long-time local resident passionate about community building
- Values inclusivity, safety, and community health
- Interested in facilitating connections between others
- Wants tools to nurture positive community growth

## 3. Core User Journey

1. **Discovery & Registration**: User discovers Tandem and creates an account
2. **Profile Creation**:
   - Basic personal information
   - Skills inventory (what they can offer)
   - Interest inventory (what they're passionate about)
   - Seeking inventory (what they're looking for)
3. **Matching**: User receives matches based on complementary needs/skills and shared interests
4. **Connection**: User initiates contact with matches and begins conversations
5. **Meeting**: Users coordinate in-person or virtual meetings to share skills or enjoy shared interests
6. **Community Engagement**: Users discover and participate in community activities
7. **Growth**: Users expand their network and develop new skills

## 4. Core Features for POC (24-Hour Implementation)

### 1. User Profiles & Authentication

**Functionality:**
- Email/password registration with social authentication options (Google, Facebook, Apple)
- Four-step progressive profile creation:
  - Step 1: Basic profile (name, location, bio, photo)
  - Step 2: Skills selection (category selection)
  - Step 3: Skill details (specific skills, proficiency, availability)
  - Step 4: Interests and seeking (what you enjoy, what you want to learn)
- Location-based context with privacy controls
- Verification indicators for trust-building

**Technical Implementation:**
- Simulated authentication using localStorage
- Progressive form-based onboarding flow
- Mock location data using fixed coordinates for POC

### 2. Matching System

**Functionality:**
- Display potential matches with quality indicators (percentage score)
- Match filtering by skills vs. interests
- Match details view showing compatibility factors
- Distance indication in miles
- One-click connection initiation

**Technical Implementation:**
- Simple matching algorithm based on:
  - Skill complementarity (your skills match their seeking)
  - Interest overlap (shared interests)
  - Geographic proximity (simulated for POC)
- Percentage-based match scores (76% - 95%)
- Static distance calculations for POC

### 3. Messaging System

**Functionality:**
- Direct messaging between matched users
- Conversation threading and history
- Message timestamps
- Unread message indicators
- Simplified message composer

**Technical Implementation:**
- Local storage-based conversation persistence
- React components for conversation list and message thread
- Simulated real-time updates

### 4. Community Discovery

**Functionality:**
- Activity feed showing nearby events and gatherings
- Filtering options (Nearby, Featured, For You)
- Event details with location, time, and participant information
- "I'm In!" RSVP functionality
- Simple activity creation form

**Technical Implementation:**
- Mock data for community activities
- Filter-based display controls
- Detail views for individual activities
- Form-based activity creation with local storage persistence

## 5. Technical Architecture

### Frontend

**Technology Stack:**
- **Framework**: React + Vite (for rapid development)
- **Styling**: Tailwind CSS (for quick styling based on wireframes)
- **State Management**: React Context API + Hooks
- **Routing**: React Router v6
- **Mock API**: JSON Server or localStorage-based data persistence
- **Map Integration**: Simplified map visualization using Leaflet.js

**Key Components:**
- `AuthProvider`: Context for authentication state and functions
- `MainLayout`: Core layout with navigation
- `OnboardingFlow`: Multi-step form with state persistence
- `MatchesDashboard`: Match display and filtering
- `MessagingInterface`: Conversation management
- `CommunityDiscovery`: Activity discovery and participation

### Data Models

```javascript
// User Profile
{
  id: "string",
  name: "string",
  location: {
    lat: number,
    lng: number,
    displayName: "string"
  },
  bio: "string",
  profilePhotoUrl: "string",
  skills: [
    {
      category: "string", // e.g., "Music"
      specific: "string", // e.g., "Guitar"
      proficiency: "beginner" | "intermediate" | "expert",
      availability: "string", // e.g., "Weekends"
      description: "string"
    }
  ],
  interests: ["string"], // e.g., ["Board Games", "Hiking"]
  seeking: [
    {
      skill: "string", // e.g., "Photography"
      experienceLevel: "string" // e.g., "Complete Beginner"
    }
  ],
  verificationStatus: "string",
  joinedDate: "date"
}

// Message
{
  id: "string",
  conversationId: "string",
  senderId: "string",
  receiverId: "string",
  content: "string",
  timestamp: "date",
  read: boolean
}

// Conversation
{
  id: "string",
  participants: ["userId"],
  lastMessage: "string",
  lastMessageTimestamp: "date",
  unreadCount: number
}

// Community Activity
{
  id: "string",
  type: "event" | "activity" | "need",
  title: "string",
  description: "string",
  creatorId: "string",
  location: {
    lat: number,
    lng: number,
    displayName: "string"
  },
  time: {
    start: "date",
    end: "date"
  },
  relatedSkills: ["string"],
  relatedInterests: ["string"],
  attendees: ["userId"],
  distance: number
}
```

## 6. Implementation Plan for 24-Hour POC

### Phase 1: Project Setup and Core Components (Hours 1-6)
1. Initialize React + Vite project with Tailwind CSS
2. Set up project structure and routing
3. Create authentication context and mock services
4. Implement basic layout components
5. Create mock data structure

### Phase 2: Onboarding Flow (Hours 7-12)
1. Build registration and login forms
2. Implement the four-step onboarding flow:
   - Basic profile form
   - Skills selection grid
   - Skill details form
   - Interests and seeking form
3. Create localStorage persistence for profile data
4. Implement validation and progress tracking

### Phase 3: Matching and Messaging (Hours 13-18)
1. Build matches dashboard with filter controls
2. Implement match card components with score indicators
3. Create match detail view with compatibility information
4. Develop simple conversation list and message thread components
5. Implement basic message composer

### Phase 4: Community and Polish (Hours 19-24)
1. Build community activity feed
2. Implement activity detail view
3. Create simplified activity creation form
4. Add final UI polish and responsive design fixes
5. Implement final testing and bug fixes

## 7. Component Structure

```
src/
├── App.jsx                   # Main application component
├── main.jsx                  # Entry point
├── index.css                 # Global styles
├── assets/                   # Static assets
├── components/               # Reusable components
│   ├── common/               # Shared UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── ...
│   ├── layout/               # Layout components
│   │   ├── MainLayout.jsx    # Main app layout with navigation
│   │   └── ...
│   ├── onboarding/           # Onboarding components
│   │   ├── StepProgress.jsx
│   │   └── ...
│   ├── matches/              # Matching components
│   │   ├── MatchCard.jsx
│   │   ├── MatchFilter.jsx
│   │   └── ...
│   ├── messaging/            # Messaging components
│   │   ├── ConversationList.jsx
│   │   ├── MessageThread.jsx
│   │   └── ...
│   └── community/            # Community components
│       ├── ActivityCard.jsx
│       ├── MapView.jsx
│       └── ...
├── context/                  # React contexts
│   ├── AuthContext.jsx       # Authentication context
│   └── ...
├── hooks/                    # Custom hooks
│   ├── useLocalStorage.jsx
│   └── ...
├── pages/                    # Page components
│   ├── onboarding/           # Onboarding pages
│   │   ├── OnboardingFlow.jsx
│   │   ├── BasicProfile.jsx
│   │   └── ...
│   ├── matches/              # Match pages
│   │   ├── MatchesDashboard.jsx
│   │   ├── MatchDetail.jsx
│   │   └── ...
│   ├── messaging/            # Messaging pages
│   │   ├── MessagingPage.jsx
│   │   └── ...
│   └── community/            # Community pages
│       ├── CommunityPage.jsx
│       ├── ActivityDetail.jsx
│       └── ...
├── services/                 # Service modules
│   ├── api.js                # API service
│   ├── auth.js               # Authentication service
│   ├── matching.js           # Matching algorithm
│   └── ...
└── utils/                    # Utility functions
    ├── formatters.js
    ├── validators.js
    └── ...
```

## 8. Matching Algorithm (POC Version)

```javascript
function calculateMatchScore(userProfile, otherProfile) {
  let score = 0;
  const MAX_SCORE = 100;
  
  // Check if skills match what the other is seeking
  userProfile.skills.forEach(skill => {
    otherProfile.seeking.forEach(seekingItem => {
      if (skill.specific.toLowerCase() === seekingItem.skill.toLowerCase()) {
        score += 20; // Major score boost for direct skill match
      }
    });
  });
  
  // Check if seeking matches what the other offers
  userProfile.seeking.forEach(seekingItem => {
    otherProfile.skills.forEach(skill => {
      if (seekingItem.skill.toLowerCase() === skill.specific.toLowerCase()) {
        score += 20; // Major score boost for direct skill match
      }
    });
  });
  
  // Check for shared interests
  const userInterests = new Set(userProfile.interests.map(i => i.toLowerCase()));
  otherProfile.interests.forEach(interest => {
    if (userInterests.has(interest.toLowerCase())) {
      score += 5; // Minor boost per shared interest
    }
  });
  
  // Proximity bonus (closer = better)
  const distance = calculateDistance(
    userProfile.location.lat, 
    userProfile.location.lng,
    otherProfile.location.lat,
    otherProfile.location.lng
  );
  
  // Within 1 mile = full points, decreasing after that
  const proximityScore = Math.max(0, 15 - (distance - 1) * 3);
  score += proximityScore;
  
  // Cap at MAX_SCORE
  return Math.min(Math.round(score), MAX_SCORE);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Simple distance calculation for POC
  // In a real app, use Haversine formula or Google Maps API
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  return distance * 0.621371; // Convert to miles
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}
```

## 9. Mock Data Structure

```javascript
// Sample data for POC development
const mockData = {
  "users": [
    {
      "id": "1",
      "name": "Alex Rivera",
      "location": {
        "lat": 47.6062,
        "lng": -122.3321,
        "displayName": "Seattle, WA"
      },
      "bio": "Professional photographer who loves teaching beginners. Have been taking photos for over 8 years.",
      "profilePhotoUrl": "/mock-data/profile1.jpg",
      "skills": [
        {
          "category": "Arts",
          "specific": "Photography",
          "proficiency": "expert",
          "availability": "Weekday Evenings",
          "description": "I teach photography basics including composition, lighting, and basic camera settings."
        }
      ],
      "interests": ["Hiking", "Travel", "Art"],
      "seeking": [],
      "verificationStatus": "verified",
      "distance": 1.2,
      "matchScore": 92
    },
    {
      "id": "2",
      "name": "Jamie Kim",
      "location": {
        "lat": 47.6092,
        "lng": -122.3360,
        "displayName": "Seattle, WA"
      },
      "bio": "Board game enthusiast with a collection of over 50 games. Always looking for new players!",
      "profilePhotoUrl": "/mock-data/profile2.jpg",
      "skills": [
        {
          "category": "Games",
          "specific": "Board Games",
          "proficiency": "expert",
          "availability": "Weekends",
          "description": "I can teach everything from gateway games to complex strategy games."
        }
      ],
      "interests": ["Board Games", "Strategy Games", "Card Games"],
      "seeking": [],
      "verificationStatus": "verified",
      "distance": 0.5,
      "matchScore": 84
    },
    {
      "id": "3",
      "name": "Chris Morgan",
      "location": {
        "lat": 47.6742,
        "lng": -122.3865,
        "displayName": "Seattle, WA"
      },
      "bio": "Professional musician looking for jam partners and people to collaborate with.",
      "profilePhotoUrl": "/mock-data/profile3.jpg",
      "skills": [
        {
          "category": "Music",
          "specific": "Piano",
          "proficiency": "expert",
          "availability": "Flexible",
          "description": "Classically trained pianist with teaching experience."
        }
      ],
      "interests": ["Jazz", "Classical Music", "Collaboration"],
      "seeking": [
        {
          "skill": "Guitar",
          "experienceLevel": "Any"
        }
      ],
      "verificationStatus": "verified",
      "distance": 2.3,
      "matchScore": 76
    }
  ],
  "currentUser": {
    "id": "user123",
    "name": "Eli Parker",
    "location": {
      "lat": 47.6080,
      "lng": -122.3360,
      "displayName": "Seattle, WA"
    },
    "bio": "Recently moved to Seattle, interested in music and photography. Looking to meet creative people in my area!",
    "profilePhotoUrl": "/mock-data/profile-user.jpg",
    "skills": [
      {
        "category": "Music",
        "specific": "Guitar",
        "proficiency": "beginner",
        "availability": "Weekends",
        "description": "I can play basic chords and simple songs. Happy to jam with other beginners!"
      }
    ],
    "interests": ["Board Games", "Hiking", "Photography"],
    "seeking": [
      {
        "skill": "Photography",
        "experienceLevel": "Complete Beginner"
      }
    ],
    "verificationStatus": "unverified"
  },
  "messages": [
    {
      "id": "msg1",
      "conversationId": "conv1",
      "senderId": "user123",
      "receiverId": "1",
      "content": "I'm interested in learning photography from you. I'm a complete beginner but eager to learn!",
      "timestamp": "2025-04-22T10:15:00Z",
      "read": true
    },
    {
      "id": "msg2",
      "conversationId": "conv1",
      "senderId": "1",
      "receiverId": "user123",
      "content": "Hi Eli! I'd be happy to teach you photography basics. I usually do lessons at Woodland Park on weekends. Does that work for you?",
      "timestamp": "2025-04-22T10:18:00Z",
      "read": true
    },
    {
      "id": "msg3",
      "conversationId": "conv1",
      "senderId": "user123",
      "receiverId": "1",
      "content": "That sounds perfect! This Saturday afternoon works for me. What should I bring?",
      "timestamp": "2025-04-22T10:20:00Z",
      "read": true
    }
  ],
  "conversations": [
    {
      "id": "conv1",
      "participants": ["user123", "1"],
      "lastMessage": "That sounds perfect! This Saturday afternoon works for me. What should I bring?",
      "lastMessageTimestamp": "2025-04-22T10:20:00Z",
      "unreadCount": 0
    }
  ],
  "activities": [
    {
      "id": "act1",
      "type": "event",
      "title": "Neighborhood Photography Walk",
      "description": "Join fellow photography enthusiasts for a casual walk around Green Lake. All skill levels welcome! Bring your camera or smartphone.",
      "creatorId": "1",
      "location": {
        "lat": 47.6806,
        "lng": -122.3353,
        "displayName": "Green Lake Park, North Entrance"
      },
      "time": {
        "start": "2025-04-27T14:00:00Z",
        "end": "2025-04-27T16:00:00Z"
      },
      "relatedSkills": ["Photography"],
      "relatedInterests": ["Hiking", "Photography"],
      "attendees": ["1", "user123"],
      "distance": 0.7
    },
    {
      "id": "act2",
      "type": "event",
      "title": "Board Game Café Meetup",
      "description": "Join us at Meeples Games for an evening of board games. Beginners welcome!",
      "creatorId": "2",
      "location": {
        "lat": 47.5869,
        "lng": -122.3363,
        "displayName": "Meeples Games"
      },
      "time": {
        "start": "2025-04-22T18:00:00Z",
        "end": "2025-04-22T21:00:00Z"
      },
      "relatedSkills": [],
      "relatedInterests": ["Board Games"],
      "attendees": ["2"],
      "distance": 1.2
    },
    {
      "id": "act3",
      "type": "event",
      "title": "Guitar Jam Session",
      "description": "Casual jam session for guitar players of all skill levels. Bring your own instrument!",
      "creatorId": "3",
      "location": {
        "lat": 47.6239,
        "lng": -122.3553,
        "displayName": "Volunteer Park"
      },
      "time": {
        "start": "2025-04-28T15:00:00Z",
        "end": "2025-04-28T17:00:00Z"
      },
      "relatedSkills": ["Guitar", "Music"],
      "relatedInterests": ["Music"],
      "attendees": ["3"],
      "distance": 1.5
    }
  ]
};
```

## 10. Future Roadmap (Post-POC)

### Phase 1: Core Functionality Enhancements
1. Real backend implementation with proper database
2. Authentication with JWT and secure user management
3. Proper geolocation services with privacy controls
4. Enhanced matching algorithm with machine learning components
5. Real-time messaging with notifications

### Phase 2: Community Features
1. Group formation and management
2. Event creation and RSVPs
3. Community content sharing
4. Location-based discovery improvements
5. Activity recommendations

### Phase 3: Trust & Safety
1. User verification system
2. Review and reputation system
3. Content moderation tools
4. Community guidelines enforcement
5. Safety features for in-person meetings

### Phase 4: Growth & Sustainability
1. Community analytics dashboard
2. Growth metrics and KPIs
3. Optional premium features
4. Community leadership program
5. Integration with local businesses and organizations

## 11. Conclusion

Tandem represents a shift away from transactional marketplaces and algorithmic social networks toward meaningful, skills-based community building. The 24-hour POC will demonstrate the core user journey from onboarding through community engagement, with a focus on the matching and connection aspects that make Tandem unique.

By prioritizing local connections, authentic interactions, and skill sharing, Tandem aims to create a platform that strengthens communities and helps individuals find their people and build their place.
