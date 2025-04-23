// Mock data for the Tandem POC
// This simulates data that would normally come from a backend API

export const mockUsers = [
  {
    id: "6",
    name: "Sophia Rodriguez",
    location: {
      lat: 47.6150,
      lng: -122.3400,
      displayName: "Seattle, WA"
    },
    bio: "Yoga instructor and wellness advocate who believes in the power of mindfulness and movement. Looking to connect with others interested in holistic health.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: [
      {
        category: "Wellness",
        specific: "Yoga",
        proficiency: "expert",
        availability: "Mornings, Weekends",
        description: "Teaching yoga for 5+ years, specializing in vinyasa flow and restorative practices."
      },
      {
        category: "Wellness",
        specific: "Meditation",
        proficiency: "intermediate",
        availability: "Flexible",
        description: "Guided meditation and mindfulness practices for stress reduction."
      }
    ],
    interests: ["Fitness", "Nutrition", "Outdoor Activities", "Reading"],
    seeking: [
      {
        skill: "Cooking",
        experienceLevel: "Intermediate"
      }
    ],
    verificationStatus: "verified",
    distance: 0.8,
    matchScore: 95
  },
  {
    id: "7",
    name: "Daniel Chen",
    location: {
      lat: 47.6160,
      lng: -122.3220,
      displayName: "Seattle, WA"
    },
    bio: "UI/UX designer with a passion for creating intuitive, accessible digital experiences. Love sharing knowledge about design principles and user research.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    skills: [
      {
        category: "Tech",
        specific: "UI/UX Design",
        proficiency: "expert",
        availability: "Evenings, Weekends",
        description: "From user research to high-fidelity prototypes, I can teach all aspects of the UX process."
      }
    ],
    interests: ["Design", "Art", "Technology", "Coffee"],
    seeking: [
      {
        skill: "Web Development",
        experienceLevel: "Intermediate"
      }
    ],
    verificationStatus: "verified",
    distance: 1.1,
    matchScore: 88
  },
  {
    id: "8",
    name: "Emma Wilson",
    location: {
      lat: 47.6145,
      lng: -122.3255,
      displayName: "Seattle, WA"
    },
    bio: "Language teacher and polyglot (fluent in Spanish, French, and Japanese). Passionate about language exchange and cultural learning.",
    profilePhotoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    skills: [
      {
        category: "Languages",
        specific: "Spanish",
        proficiency: "expert",
        availability: "Weekday Evenings",
        description: "Conversational Spanish with focus on practical vocabulary and pronunciation."
      },
      {
        category: "Languages",
        specific: "French",
        proficiency: "expert",
        availability: "Weekends",
        description: "French language instruction for beginners through advanced learners."
      }
    ],
    interests: ["Travel", "Literature", "Cooking", "Film"],
    seeking: [
      {
        skill: "Photography",
        experienceLevel: "Beginner"
      }
    ],
    verificationStatus: "verified",
    distance: 1.5,
    matchScore: 65
  },
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
    matchScore: 97
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
    matchScore: 93
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
    matchScore: 90
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
  },
  {
    id: "msg4",
    conversationId: "conv1",
    senderId: "1",
    receiverId: "user123",
    content: "Just bring whatever camera you have - even a smartphone is fine for basics! And maybe a notebook to jot down some tips. Looking forward to it!",
    timestamp: "2025-04-22T10:25:00Z",
    read: false
  },
  {
    id: "msg5",
    conversationId: "conv2",
    senderId: "user123",
    receiverId: "2",
    content: "Hey Jamie! I'm new to the area and saw you're into board games. Any recommendations for someone just getting into the hobby?",
    timestamp: "2025-04-22T14:30:00Z",
    read: true
  },
  {
    id: "msg6",
    conversationId: "conv2",
    senderId: "2",
    receiverId: "user123",
    content: "Welcome to Seattle, Eli! For beginners, I'd recommend Ticket to Ride, Catan, or Pandemic. I host a game night every other Friday if you'd like to join!",
    timestamp: "2025-04-22T15:45:00Z",
    read: true
  },
  {
    id: "msg7",
    conversationId: "conv2",
    senderId: "user123",
    receiverId: "2",
    content: "That sounds great! I'd love to join the next game night. When is it?",
    timestamp: "2025-04-22T16:20:00Z",
    read: true
  },
  {
    id: "msg8",
    conversationId: "conv2",
    senderId: "2",
    receiverId: "user123",
    content: "Next one is on Friday the 26th at 7pm at Meeples Games. I'll add you to the list. It's a friendly group, don't worry about being new!",
    timestamp: "2025-04-22T17:05:00Z",
    read: false
  },
  {
    id: "msg9",
    conversationId: "conv3",
    senderId: "user123",
    receiverId: "3",
    content: "Hi Chris! I'm learning guitar and saw you're a pianist looking for jam partners. Would you be open to jamming with a beginner?",
    timestamp: "2025-04-23T09:10:00Z",
    read: true
  },
  {
    id: "msg10",
    conversationId: "conv3",
    senderId: "3",
    receiverId: "user123",
    content: "Hey Eli! Absolutely, I love playing with musicians of all levels. We could meet up at Volunteer Park sometime. What kind of music do you like?",
    timestamp: "2025-04-23T09:45:00Z",
    read: false
  }
];

export const mockConversations = [
  {
    id: "conv1",
    participants: ["user123", "1"],
    lastMessage: "Just bring whatever camera you have - even a smartphone is fine for basics! And maybe a notebook to jot down some tips. Looking forward to it!",
    lastMessageTimestamp: "2025-04-22T10:25:00Z",
    unreadCount: 1
  },
  {
    id: "conv2",
    participants: ["user123", "2"],
    lastMessage: "Next one is on Friday the 26th at 7pm at Meeples Games. I'll add you to the list. It's a friendly group, don't worry about being new!",
    lastMessageTimestamp: "2025-04-22T17:05:00Z",
    unreadCount: 1
  },
  {
    id: "conv3",
    participants: ["user123", "3"],
    lastMessage: "Hey Eli! Absolutely, I love playing with musicians of all levels. We could meet up at Volunteer Park sometime. What kind of music do you like?",
    lastMessageTimestamp: "2025-04-23T09:45:00Z",
    unreadCount: 1
  }
];

export const mockActivities = [
  {
    id: "act6",
    title: "Language Exchange Meetup",
    description: "Practice conversational Spanish and French in a casual setting. All levels welcome! We'll split into small groups based on proficiency levels.",
    date: "2025-04-30T18:30:00Z",
    endDate: "2025-04-30T20:30:00Z",
    category: "Languages",
    location: {
      lat: 47.6145,
      lng: -122.3255,
      displayName: "Café Allegro"
    },
    hostId: "8",
    hostName: "Emma Wilson",
    hostPhotoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    createdAt: "2025-04-22T16:45:00Z",
    maxParticipants: 20,
    skillsInvolved: ["Spanish", "French"],
    participants: [
      {
        userId: "8",
        name: "Emma Wilson",
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
        joinedDate: "2025-04-22T16:45:00Z"
      },
      {
        userId: "7",
        name: "Daniel Chen",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
        joinedDate: "2025-04-22T18:15:00Z"
      }
    ]
  },
  {
    id: "act7",
    title: "Morning Yoga in the Park",
    description: "Start your day with an energizing yoga session suitable for all levels. We'll focus on gentle flows and mindful movement. Bring your own mat!",
    date: "2025-05-01T08:00:00Z",
    endDate: "2025-05-01T09:00:00Z",
    category: "Wellness",
    location: {
      lat: 47.6156,
      lng: -122.3301,
      displayName: "Cal Anderson Park"
    },
    hostId: "6",
    hostName: "Sophia Rodriguez",
    hostPhotoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    createdAt: "2025-04-23T07:30:00Z",
    maxParticipants: 15,
    skillsInvolved: ["Yoga", "Meditation"],
    participants: [
      {
        userId: "6",
        name: "Sophia Rodriguez",
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
        joinedDate: "2025-04-23T07:30:00Z"
      }
    ]
  },
  {
    id: "act8",
    title: "UI/UX Design Workshop: Mobile Interfaces",
    description: "Hands-on workshop exploring best practices for designing intuitive mobile interfaces. We'll work through real-world examples and critique sessions.",
    date: "2025-05-02T17:00:00Z",
    endDate: "2025-05-02T19:30:00Z",
    category: "Tech",
    location: {
      lat: 47.6080,
      lng: -122.3351,
      displayName: "Seattle Central Library, Meeting Room 3"
    },
    hostId: "7",
    hostName: "Daniel Chen",
    hostPhotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    createdAt: "2025-04-21T14:00:00Z",
    maxParticipants: 12,
    skillsInvolved: ["UI/UX Design", "Mobile Apps"],
    participants: [
      {
        userId: "7",
        name: "Daniel Chen",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
        joinedDate: "2025-04-21T14:00:00Z"
      },
      {
        userId: "4",
        name: "Maya Patel",
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
        joinedDate: "2025-04-22T09:15:00Z"
      },
      {
        userId: "user123",
        name: "Eli Parker",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/42.jpg",
        joinedDate: "2025-04-23T08:30:00Z"
      }
    ]
  },
  {
    id: "act1",
    title: "Neighborhood Photography Walk",
    description: "Join fellow photography enthusiasts for a casual walk around Green Lake. All skill levels welcome! Bring your camera or smartphone.",
    date: "2025-04-27T14:00:00Z",
    endDate: "2025-04-27T16:00:00Z",
    category: "Photography",
    location: {
      lat: 47.6806,
      lng: -122.3353,
      displayName: "Green Lake Park, North Entrance"
    },
    hostId: "1",
    hostName: "Alex Rivera",
    hostPhotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    createdAt: "2025-04-20T10:30:00Z",
    maxParticipants: 15,
    skillsInvolved: ["Photography"],
    participants: [
      {
        userId: "1",
        name: "Alex Rivera",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        joinedDate: "2025-04-20T10:30:00Z"
      },
      {
        userId: "user123",
        name: "Eli Parker",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/42.jpg",
        joinedDate: "2025-04-21T15:45:00Z"
      }
    ]
  },
  {
    id: "act2",
    title: "Board Game Café Meetup",
    description: "Join us at Meeples Games for an evening of board games. Beginners welcome!",
    date: "2025-04-25T18:00:00Z",
    endDate: "2025-04-25T21:00:00Z",
    category: "Games",
    location: {
      lat: 47.5869,
      lng: -122.3363,
      displayName: "Meeples Games"
    },
    hostId: "2",
    hostName: "Jamie Kim",
    hostPhotoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    createdAt: "2025-04-18T12:15:00Z",
    maxParticipants: 8,
    skillsInvolved: ["Board Games"],
    participants: [
      {
        userId: "2",
        name: "Jamie Kim",
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        joinedDate: "2025-04-18T12:15:00Z"
      }
    ]
  },
  {
    id: "act3",
    title: "Guitar Jam Session",
    description: "Casual jam session for guitar players of all skill levels. Bring your own instrument!",
    date: "2025-04-28T15:00:00Z",
    endDate: "2025-04-28T17:00:00Z",
    category: "Music",
    location: {
      lat: 47.6239,
      lng: -122.3553,
      displayName: "Volunteer Park"
    },
    hostId: "3",
    hostName: "Chris Morgan",
    hostPhotoUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    createdAt: "2025-04-19T09:20:00Z",
    maxParticipants: 10,
    skillsInvolved: ["Guitar", "Music"],
    participants: [
      {
        userId: "3",
        name: "Chris Morgan",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/67.jpg",
        joinedDate: "2025-04-19T09:20:00Z"
      }
    ]
  },
  {
    id: "act4",
    title: "Urban Gardening Workshop",
    description: "Learn how to grow vegetables in small urban spaces. Seeds and starter plants provided!",
    date: "2025-04-29T10:00:00Z",
    endDate: "2025-04-29T12:00:00Z",
    category: "Outdoors",
    location: {
      lat: 47.5912,
      lng: -122.3320,
      displayName: "Community Garden Center"
    },
    hostId: "5",
    hostName: "Jordan Taylor",
    hostPhotoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    createdAt: "2025-04-22T08:45:00Z",
    maxParticipants: 12,
    skillsInvolved: ["Urban Gardening"],
    participants: [
      {
        userId: "5",
        name: "Jordan Taylor",
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
        joinedDate: "2025-04-22T08:45:00Z"
      }
    ]
  },
  {
    id: "act5",
    title: "Web Development Study Group",
    description: "Weekly study group for web development. This week's topic: React Hooks and Context API.",
    date: "2025-04-24T18:00:00Z",
    endDate: "2025-04-24T20:00:00Z",
    category: "Tech",
    location: {
      lat: 47.6142,
      lng: -122.3241,
      displayName: "Seattle Public Library, Central Branch"
    },
    hostId: "4",
    hostName: "Maya Patel",
    hostPhotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    createdAt: "2025-04-17T14:30:00Z",
    maxParticipants: 15,
    skillsInvolved: ["Web Development", "React"],
    participants: [
      {
        userId: "4",
        name: "Maya Patel",
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
        joinedDate: "2025-04-17T14:30:00Z"
      }
    ]
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
