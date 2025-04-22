// Mock data for the Tandem POC
// This simulates data that would normally come from a backend API

export const mockUsers = [
  {
    id: "1",
    name: "Alex Rivera",
    location: {
      lat: 47.6062,
      lng: -122.3321,
      displayName: "Seattle, WA"
    },
    bio: "Professional photographer who loves teaching beginners. Have been taking photos for over 8 years.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: [
      {
        category: "Arts",
        specific: "Photography",
        proficiency: "expert",
        availability: "Weekday Evenings",
        description: "I teach photography basics including composition, lighting, and basic camera settings."
      }
    ],
    interests: ["Hiking", "Travel", "Art"],
    seeking: [],
    verificationStatus: "verified",
    distance: 1.2,
    matchScore: 92
  },
  {
    id: "2",
    name: "Jamie Kim",
    location: {
      lat: 47.6092,
      lng: -122.3360,
      displayName: "Seattle, WA"
    },
    bio: "Board game enthusiast with a collection of over 50 games. Always looking for new players!",
    profilePhotoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: [
      {
        category: "Games",
        specific: "Board Games",
        proficiency: "expert",
        availability: "Weekends",
        description: "I can teach everything from gateway games to complex strategy games."
      }
    ],
    interests: ["Board Games", "Strategy Games", "Card Games"],
    seeking: [],
    verificationStatus: "verified",
    distance: 0.5,
    matchScore: 84
  },
  {
    id: "3",
    name: "Chris Morgan",
    location: {
      lat: 47.6742,
      lng: -122.3865,
      displayName: "Seattle, WA"
    },
    bio: "Professional musician looking for jam partners and people to collaborate with.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    skills: [
      {
        category: "Music",
        specific: "Piano",
        proficiency: "expert",
        availability: "Flexible",
        description: "Classically trained pianist with teaching experience."
      }
    ],
    interests: ["Jazz", "Classical Music", "Collaboration"],
    seeking: [
      {
        skill: "Guitar",
        experienceLevel: "Any"
      }
    ],
    verificationStatus: "verified",
    distance: 2.3,
    matchScore: 76
  },
  {
    id: "4",
    name: "Maya Patel",
    location: {
      lat: 47.6142,
      lng: -122.3241,
      displayName: "Seattle, WA"
    },
    bio: "Software developer by day, textile artist by night. Passionate about teaching coding to beginners.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    skills: [
      {
        category: "Tech",
        specific: "Web Development",
        proficiency: "expert",
        availability: "Weekends",
        description: "Front-end focused web development with React and modern JavaScript."
      },
      {
        category: "Crafts",
        specific: "Textile Arts",
        proficiency: "intermediate",
        availability: "Evenings",
        description: "Embroidery, knitting, and fabric crafts."
      }
    ],
    interests: ["Coding", "Arts & Crafts", "Teaching"],
    seeking: [
      {
        skill: "Photography",
        experienceLevel: "Beginner"
      }
    ],
    verificationStatus: "verified",
    distance: 1.8,
    matchScore: 88
  },
  {
    id: "5",
    name: "Jordan Taylor",
    location: {
      lat: 47.5912,
      lng: -122.3300,
      displayName: "Seattle, WA"
    },
    bio: "Urban gardener with expertise in small-space vegetable growing. Looking to share knowledge and maybe some fresh produce!",
    profilePhotoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: [
      {
        category: "Outdoors",
        specific: "Urban Gardening",
        proficiency: "expert",
        availability: "Weekends, Evenings",
        description: "Sustainable urban gardening practices for growing food in limited space."
      }
    ],
    interests: ["Gardening", "Sustainability", "Cooking"],
    seeking: [
      {
        skill: "Cooking",
        experienceLevel: "Any"
      }
    ],
    verificationStatus: "verified",
    distance: 0.7,
    matchScore: 68
  }
];

export const currentUser = {
  id: "user123",
  name: "Eli Parker",
  location: {
    lat: 47.6080,
    lng: -122.3360,
    displayName: "Seattle, WA"
  },
  bio: "Recently moved to Seattle, interested in music and photography. Looking to meet creative people in my area!",
  profilePhotoUrl: "https://randomuser.me/api/portraits/men/42.jpg",
  skills: [
    {
      category: "Music",
      specific: "Guitar",
      proficiency: "beginner",
      availability: "Weekends",
      description: "I can play basic chords and simple songs. Happy to jam with other beginners!"
    }
  ],
  interests: ["Board Games", "Hiking", "Photography"],
  seeking: [
    {
      skill: "Photography",
      experienceLevel: "Complete Beginner"
    }
  ],
  verificationStatus: "unverified"
};

export const mockMessages = [
  {
    id: "msg1",
    conversationId: "conv1",
    senderId: "user123",
    receiverId: "1",
    content: "I'm interested in learning photography from you. I'm a complete beginner but eager to learn!",
    timestamp: "2025-04-22T10:15:00Z",
    read: true
  },
  {
    id: "msg2",
    conversationId: "conv1",
    senderId: "1",
    receiverId: "user123",
    content: "Hi Eli! I'd be happy to teach you photography basics. I usually do lessons at Woodland Park on weekends. Does that work for you?",
    timestamp: "2025-04-22T10:18:00Z",
    read: true
  },
  {
    id: "msg3",
    conversationId: "conv1",
    senderId: "user123",
    receiverId: "1",
    content: "That sounds perfect! This Saturday afternoon works for me. What should I bring?",
    timestamp: "2025-04-22T10:20:00Z",
    read: true
  }
];

export const mockConversations = [
  {
    id: "conv1",
    participants: ["user123", "1"],
    lastMessage: "That sounds perfect! This Saturday afternoon works for me. What should I bring?",
    lastMessageTimestamp: "2025-04-22T10:20:00Z",
    unreadCount: 0
  }
];

export const mockActivities = [
  {
    id: "act1",
    type: "event",
    title: "Neighborhood Photography Walk",
    description: "Join fellow photography enthusiasts for a casual walk around Green Lake. All skill levels welcome! Bring your camera or smartphone.",
    creatorId: "1",
    location: {
      lat: 47.6806,
      lng: -122.3353,
      displayName: "Green Lake Park, North Entrance"
    },
    time: {
      start: "2025-04-27T14:00:00Z",
      end: "2025-04-27T16:00:00Z"
    },
    relatedSkills: ["Photography"],
    relatedInterests: ["Hiking", "Photography"],
    attendees: ["1", "user123"],
    distance: 0.7
  },
  {
    id: "act2",
    type: "event",
    title: "Board Game Café Meetup",
    description: "Join us at Meeples Games for an evening of board games. Beginners welcome!",
    creatorId: "2",
    location: {
      lat: 47.5869,
      lng: -122.3363,
      displayName: "Meeples Games"
    },
    time: {
      start: "2025-04-22T18:00:00Z",
      end: "2025-04-22T21:00:00Z"
    },
    relatedSkills: [],
    relatedInterests: ["Board Games"],
    attendees: ["2"],
    distance: 1.2
  },
  {
    id: "act3",
    type: "event",
    title: "Guitar Jam Session",
    description: "Casual jam session for guitar players of all skill levels. Bring your own instrument!",
    creatorId: "3",
    location: {
      lat: 47.6239,
      lng: -122.3553,
      displayName: "Volunteer Park"
    },
    time: {
      start: "2025-04-28T15:00:00Z",
      end: "2025-04-28T17:00:00Z"
    },
    relatedSkills: ["Guitar", "Music"],
    relatedInterests: ["Music"],
    attendees: ["3"],
    distance: 1.5
  },
  {
    id: "act4",
    type: "event",
    title: "Urban Gardening Workshop",
    description: "Learn how to grow vegetables in small urban spaces. Seeds and starter plants provided!",
    creatorId: "5",
    location: {
      lat: 47.5912,
      lng: -122.3320,
      displayName: "Community Garden Center"
    },
    time: {
      start: "2025-04-29T10:00:00Z",
      end: "2025-04-29T12:00:00Z"
    },
    relatedSkills: ["Urban Gardening"],
    relatedInterests: ["Gardening", "Sustainability"],
    attendees: ["5"],
    distance: 0.8
  },
  {
    id: "act5",
    type: "event",
    title: "Web Development Study Group",
    description: "Weekly study group for web development. This week's topic: React Hooks and Context API.",
    creatorId: "4",
    location: {
      lat: 47.6142,
      lng: -122.3241,
      displayName: "Seattle Public Library, Central Branch"
    },
    time: {
      start: "2025-04-24T18:00:00Z",
      end: "2025-04-24T20:00:00Z"
    },
    relatedSkills: ["Web Development"],
    relatedInterests: ["Coding"],
    attendees: ["4"],
    distance: 1.8
  }
];

// Skill categories for selection
export const skillCategories = [
  {
    id: "music",
    name: "Music",
    skills: ["Guitar", "Piano", "Violin", "Singing", "Drums", "Music Production", "DJ"]
  },
  {
    id: "tech",
    name: "Technology",
    skills: ["Web Development", "Mobile Apps", "Data Science", "Cybersecurity", "UI/UX Design"]
  },
  {
    id: "arts",
    name: "Arts",
    skills: ["Photography", "Painting", "Drawing", "Sculpture", "Digital Art", "Film Making"]
  },
  {
    id: "crafts",
    name: "Crafts",
    skills: ["Knitting", "Sewing", "Woodworking", "Pottery", "Textile Arts"]
  },
  {
    id: "cooking",
    name: "Cooking",
    skills: ["Baking", "Meal Prep", "International Cuisine", "Pastry", "Fermentation"]
  },
  {
    id: "outdoors",
    name: "Outdoors",
    skills: ["Hiking", "Rock Climbing", "Camping", "Urban Gardening", "Biking"]
  },
  {
    id: "games",
    name: "Games",
    skills: ["Board Games", "Card Games", "Chess", "Role-Playing Games", "Strategy Games"]
  },
  {
    id: "wellness",
    name: "Wellness",
    skills: ["Yoga", "Meditation", "Fitness", "Nutrition", "Mental Health"]
  }
];

// Interest tags
export const interestTags = [
  "Art", "Music", "Technology", "Photography", "Hiking", "Travel", 
  "Books", "Film", "Board Games", "Cooking", "Gardening", "Crafts",
  "Fitness", "Languages", "Science", "History", "Writing", "Dance",
  "Sustainability", "Fashion", "Podcasts", "Coffee", "Wine", "Theater",
  "Cycling", "Running", "Yoga", "Meditation", "Volunteering", "Politics",
  "Education", "Entrepreneurship", "DIY", "Coding", "Design", "Architecture"
];
