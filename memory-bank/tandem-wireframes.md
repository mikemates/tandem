# NEWCO - Community Platform Wireframes

## Project Overview

NEWCO is a local-first platform focused on authentic community building through skills exchange and interest matching. The platform enables users to connect based on complementary needs, abilities, and passions within a local community context.

### Brand Promise
Find your people. Build your place.

### Core Differentiators
- Local-first vs. global-first approach
- Community-building vs. transactional exchanges
- Authentic connections vs. algorithmic feeds
- Skill and interest matching vs. service marketplace
- Serendipitous discovery vs. utilitarian search

## User Journey Wireframes

These wireframes illustrate the primary user flows within the NEWCO platform, focusing on the core user journey from sign-up through community engagement.

### Basic Wireframes - Standard User Journey

#### Step 1: Discovery & Registration

```
┌─────────────────────────────────────┐
│               NEWCO                 │
│                                     │
│               [logo]                │
│                                     │
│        Find your people.            │
│        Build your place.            │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Email                         │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Password                      │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │           Log In              │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │           Sign Up             │  │
│  └───────────────────────────────┘  │
│                                     │
│           Or continue with          │
│     ┌─────┐    ┌─────┐   ┌─────┐   │
│     │  G  │    │  F  │   │  A  │   │
│     └─────┘    └─────┘   └─────┘   │
│                                     │
└─────────────────────────────────────┘
```

#### Step 2A: Onboarding - Basic Profile

```
┌─────────────────────────────────────┐
│         Basic Profile               │
│                                     │
│  [===>                         ]    │
│  Step 1 of 4                        │
│                                     │
│      Tell us about yourself         │
│                                     │
│  Full Name                          │
│  ┌───────────────────────────────┐  │
│  │ Eli Parker                    │  │
│  └───────────────────────────────┘  │
│                                     │
│  Location                           │
│  ┌───────────────────────────────┐  │
│  │ Seattle, WA                   │  │
│  └───────────────────────────────┘  │
│                                     │
│  About Me                           │
│  ┌───────────────────────────────┐  │
│  │ Recently moved to Seattle,    │  │
│  │ interested in music and       │  │
│  │ photography. Looking to meet  │  │
│  │ creative people in my area!   │  │
│  └───────────────────────────────┘  │
│                                     │
│  Profile Photo                      │
│    ┌──────┐                         │
│    │  +   │         ┌──────────┐   │
│    └──────┘         │   Next   │   │
│                     └──────────┘   │
└─────────────────────────────────────┘
```

#### Step 2B: Onboarding - Skills Selection

```
┌─────────────────────────────────────┐
│      Skills Selection               │
│                                     │
│  [==========>                  ]    │
│  Step 2 of 4                        │
│                                     │
│        What can you share?          │
│   Select skills you can offer others│
│                                     │
│   ┌─────────────┐  ┌─────────────┐  │
│   │             │  │             │  │
│   │    Music    │  │   Cooking   │  │
│   │             │  │             │  │
│   └─────────────┘  └─────────────┘  │
│                                     │
│   ┌─────────────┐  ┌─────────────┐  │
│   │             │  │             │  │
│   │     Tech    │  │    Arts     │  │
│   │             │  │             │  │
│   └─────────────┘  └─────────────┘  │
│                                     │
│   ┌─────────────┐  ┌─────────────┐  │
│   │             │  │             │  │
│   │    Sports   │  │    Other    │  │
│   │             │  │             │  │
│   └─────────────┘  └─────────────┘  │
│                                     │
│   ┌─────────────┐  ┌─────────────┐  │
│   │    Back     │  │    Next     │  │
│   └─────────────┘  └─────────────┘  │
└─────────────────────────────────────┘
```

#### Step 2C: Onboarding - Skill Details

```
┌─────────────────────────────────────┐
│          Skill Details              │
│                                     │
│  [================>             ]   │
│  Step 3 of 4                        │
│                                     │
│   Tell us about your music skills   │
│                                     │
│  Specific Skill                     │
│  ┌───────────────────────────────┐  │
│  │ Guitar                        │  │
│  └───────────────────────────────┘  │
│                                     │
│  Proficiency Level                  │
│  ┌────────┐ ┌────────┐ ┌────────┐   │
│  │Beginner│ │Intermed│ │Expert  │   │
│  └────────┘ └────────┘ └────────┘   │
│                                     │
│  Availability                       │
│  ┌───────────────────────────────┐  │
│  │ Weekends                      │  │
│  └───────────────────────────────┘  │
│                                     │
│  Brief Description                  │
│  ┌───────────────────────────────┐  │
│  │ I can play basic chords and   │  │
│  │ simple songs. Happy to jam    │  │
│  │ with other beginners!         │  │
│  └───────────────────────────────┘  │
│                                     │
│   ┌─────────┐      ┌─────────┐      │
│   │  Back   │      │   Next  │      │
│   └─────────┘      └─────────┘      │
└─────────────────────────────────────┘
```

#### Step 2D: Onboarding - Interests & Seeking

```
┌─────────────────────────────────────┐
│      Interests & Seeking            │
│                                     │
│  [=============================]    │
│  Step 4 of 4                        │
│                                     │
│      What are you looking for?      │
│                                     │
│  Interests (For Community)          │
│  ┌────────────┐  ┌────────────┐     │
│  │Board Games │  │   Hiking   │     │
│  └────────────┘  └────────────┘     │
│                                     │
│  ┌────────────┐  ┌────────────┐     │
│  │    Film    │  │    Books   │     │
│  └────────────┘  └────────────┘     │
│                                     │
│  ┌────────────┐                     │
│  │  + Add more│                     │
│  └────────────┘                     │
│                                     │
│  Skills I'm Seeking                 │
│  What would you like to learn?      │
│  ┌───────────────────────────────┐  │
│  │ Photography                   │  │
│  └───────────────────────────────┘  │
│                                     │
│  Experience Level                   │
│  ┌───────────────────────────────┐  │
│  │ Complete Beginner             │  │
│  └───────────────────────────────┘  │
│                                     │
│   ┌─────────┐      ┌─────────┐      │
│   │  Back   │      │  Finish │      │
│   └─────────┘      └─────────┘      │
└─────────────────────────────────────┘
```

#### Step 3: Match Dashboard

```
┌─────────────────────────────────────┐
│ NEWCO                          [E] │
├─────────────────────────────────────┤
│                                     │
│  Your Matches                       │
│  People who might interest you      │
│                                     │
│  ┌─────┐  ┌─────────┐  ┌─────────┐  │
│  │ All │  │ Skills  │  │Interests│  │
│  └─────┘  └─────────┘  └─────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ [O]  Alex Rivera              │  │
│  │      Photography Teacher      │  │
│  │      1.2 miles away           │  │
│  │                         [92%] │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ [O]  Jamie Kim                │  │
│  │      Board Game Enthusiast    │  │
│  │      0.5 miles away           │  │
│  │                         [84%] │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ [O]  Chris Morgan             │  │
│  │      Seeking Guitar Player    │  │
│  │      2.3 miles away           │  │
│  │                         [76%] │  │
│  └───────────────────────────────┘  │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

#### Step 4: Match Profile Detail

```
┌─────────────────────────────────────┐
│ ←  Match Details                    │
├─────────────────────────────────────┤
│                                     │
│             [Photo]                 │
│                                     │
│          Alex Rivera                │
│     Seattle, WA • 1.2 miles away    │
│                                     │
│          ┌──────────────┐           │
│          │   Connect    │           │
│          └──────────────┘           │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Match Quality              92%│  │
│  │ Exactly what you're seeking!  │  │
│  └───────────────────────────────┘  │
│                                     │
│  Offers                             │
│  ┌───────────────────────────────┐  │
│  │ Photography Lessons           │  │
│  │ Expert • Weekday Evenings     │  │
│  └───────────────────────────────┘  │
│                                     │
│  Interests                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ Hiking  │ │ Travel  │ │  Art    ││
│  └─────────┘ └─────────┘ └─────────┘│
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ✓ Verified Member             │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Step 5: Messaging Interface

```
┌─────────────────────────────────────┐
│ ←  Alex Rivera                      │
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   I'm interested in learning  │  │
│  │   photography from you. I'm a │  │
│  │   complete beginner but eager │  │
│  │   to learn!                   │  │
│  │                         10:15 │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Hi Eli! I'd be happy to teach │  │
│  │ you photography basics. I     │  │
│  │ usually do lessons at Woodland│  │
│  │ Park on weekends. Does that   │  │
│  │ work for you?                 │  │
│  │                               │  │
│  │ 10:18                         │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  That sounds perfect! This    │  │
│  │  Saturday afternoon works     │  │
│  │  for me. What should I bring? │  │
│  │                               │  │
│  │                         10:20 │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Message...                    │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### Basic Wireframes - Community Discovery Features

#### Community Discover Feed

```
┌─────────────────────────────────────┐
│ NEWCO                          [E] │
├─────────────────────────────────────┤
│                                     │
│  Discover Community                 │
│  What's happening around you        │
│                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ Nearby  │ │Featured │ │For You  ││
│  └─────────┘ └─────────┘ └─────────┘│
│                                     │
│  ┌───────────────────────────────┐  │
│  │ This Weekend                  │  │
│  │                               │  │
│  │ Neighborhood Photography Walk │  │
│  │ Sat, 2:00PM • 0.7 miles away  │  │
│  │ 4 people with your interests  │  │
│  │ [Photo preview]               │  │
│  │                               │  │
│  │ 🔍 Matches your Photography   │  │
│  │    interest                   │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Active Now                    │  │
│  │                               │  │
│  │ Board Game Café Meetup        │  │
│  │ Today, 6:00PM • 1.2 miles away│  │
│  │ 3 matches from your network   │  │
│  │ [Activity image]              │  │
│  │                               │  │
│  │ 🎲 Matches your Board Games   │  │
│  │    interest                   │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ New in Your Area              │  │
│  │                               │  │
│  │ Guitar Jam Session            │  │
│  │ Open to all skill levels      │  │
│  │ Sunday, 3:00PM • 1.5 miles    │  │
│  │ [Image]                       │  │
│  │                               │  │
│  │ 🎸 Matches your Music skill   │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Real-Time Community Activity

```
┌─────────────────────────────────────┐
│ NEWCO                          [E] │
├─────────────────────────────────────┤
│                                     │
│  Live in Your Community             │
│  Real-time activities & needs       │
│                                     │
│  Just now • 0.3 miles away          │
│  ┌───────────────────────────────┐  │
│  │ [O] Sophie H.                 │  │
│  │     is looking for someone to │  │
│  │     jam with this afternoon   │  │
│  │                               │  │
│  │ 🎸 Matches: Guitar (Your Skill)  │
│  │     [Respond] [Share]         │  │
│  └───────────────────────────────┘  │
│                                     │
│  10 minutes ago • 0.8 miles away    │
│  ┌───────────────────────────────┐  │
│  │ [O] Park Slope Photo Club     │  │
│  │     just added a beginners    │  │
│  │     night this Thursday       │  │
│  │                               │  │
│  │ 📷 Matches: Photography       │  │
│  │    (Your Interest)            │  │
│  │     [Learn More] [Save]       │  │
│  └───────────────────────────────┘  │
│                                     │
│  30 minutes ago • 1.1 miles away    │
│  ┌───────────────────────────────┐  │
│  │ [O] Marcus T.                 │  │
│  │     just offered to teach     │  │
│  │     basic photography         │  │
│  │                               │  │
│  │ 💯 93% Match with your profile│  │
│  │     [View Profile] [Connect]  │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │    What are you up to today?  │  │
│  │    [Share with community]     │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Community Map View

```
┌─────────────────────────────────────┐
│ NEWCO                          [E] │
├─────────────────────────────────────┤
│                                     │
│  Community Around You               │
│  Your area right now                │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │     [Map View]                │  │
│  │                               │  │
│  │    🎸       📷                │  │
│  │                 🎲            │  │
│  │          You                  │  │
│  │        🏃‍♂️    🎨             │  │
│  │                               │  │
│  │  📚                 🎵        │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Happening Now                      │
│  ┌───────────────────────────────┐  │
│  │ 📷 Photography Workshop       │  │
│  │   0.4 miles • 3 attendees     │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 🎲 Board Game Night           │  │
│  │   1.1 miles • 8 attendees     │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 🎵 Music Sharing Session      │  │
│  │   1.3 miles • 4 attendees     │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ [List View] [Map View] [Filter] │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Community Activity Detail

```
┌─────────────────────────────────────┐
│ ←  Event Details                    │
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │        [Event Image]          │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Neighborhood Photography Walk      │
│  Saturday at 2:00 PM                │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Green Lake Park, North Entrance  │
│  │ 0.7 miles from you             │  │
│  │ [View Map]                     │  │
│  └───────────────────────────────┘  │
│                                     │
│  About                              │
│  Join fellow photography enthusiasts│
│  for a casual walk around Green     │
│  Lake. All skill levels welcome!    │
│  Bring your camera or smartphone.   │
│                                     │
│  Organized by                       │
│  ┌───────────────────────────────┐  │
│  │ [O] Alex R.                   │  │
│  │     Photography Teacher        │  │
│  │     92% match with your profile│  │
│  └───────────────────────────────┘  │
│                                     │
│  Attendees (7)                      │
│  [O][O][O][O] +3 more              │
│                                     │
│  ┌───────────────────────────────┐  │
│  │        I'll Be There!         │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Serendipitous Discovery

```
┌─────────────────────────────────────┐
│ NEWCO                          [E] │
├─────────────────────────────────────┤
│                                     │
│  Serendipity                        │
│  Unexpected connections nearby      │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  Did you know?                │  │
│  │                               │  │
│  │  There are 5 guitar players   │  │
│  │  within a half mile of you    │  │
│  │  right now!                   │  │
│  │                               │  │
│  │  [Explore Connections]        │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  Someone nearby is looking    │  │
│  │  for a photography mentor     │  │
│  │  today                        │  │
│  │                               │  │
│  │  [Learn More]                 │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │  Local coffee shop hosting    │  │
│  │  board game night tonight     │  │
│  │  (3 of your connections       │  │
│  │   are going)                  │  │
│  │                               │  │
│  │  [View Details]               │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Share Your Activity

```
┌─────────────────────────────────────┐
│ ←  Share with Community             │
├─────────────────────────────────────┤
│                                     │
│  What are you up to?                │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │ I'm practicing guitar at      │  │
│  │ Volunteer Park today and      │  │
│  │ would love to jam with other  │  │
│  │ beginners!                    │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Add Details                        │
│                                     │
│  Location                           │
│  ┌───────────────────────────────┐  │
│  │ Volunteer Park, near museum   │  │
│  └───────────────────────────────┘  │
│                                     │
│  When                               │
│  ┌───────────────────────────────┐  │
│  │ Today, 2:00PM - 4:00PM        │  │
│  └───────────────────────────────┘  │
│                                     │
│  Related to                         │
│  ┌────────────┐  ┌────────────┐     │
│  │Music [✓]   │  │Guitar [✓]  │     │
│  └────────────┘  └────────────┘     │
│                                     │
│  Who can see this?                  │
│  ⚪ Everyone nearby                 │
│  ⚫ Only people with matching       │
│      interests/skills              │
│  ⚪ My connections only             │
│                                     │
│  ┌───────────────────────────────┐  │
│  │          Share Now            │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### Higher Fidelity Wireframes - Community Discovery Features

#### Community Discover Feed (Higher Fidelity)

```
╔═════════════════════════════════════╗
║ ╭─────╮  NEWCO              👤 ▾   ║
╟─────────────────────────────────────╢
║                                     ║
║  ╭─────────────────────────────╮    ║
║  │ 📍 Seattle, WA              │    ║
║  ╰─────────────────────────────╯    ║
║                                     ║
║  Discover Community                 ║
║  What's happening around you        ║
║                                     ║
║  ╭─────────╮╭─────────╮╭─────────╮  ║
║  │ Nearby  ││Featured ││For You  │  ║
║  │   ▼     ││         ││         │  ║
║  ╰─────────╯╰─────────╯╰─────────╯  ║
║                                     ║
║  ╭─────────────────────────────╮    ║
║  │ ╭───────────────────────╮   │    ║
║  │ │    📸                 │   │    ║
║  │ │                       │   │    ║
║  │ ╰───────────────────────╯   │    ║
║  │                             │    ║
║  │ This Weekend                │    ║
║  │                             │    ║
║  │ Neighborhood Photo Walk     │    ║
║  │ Sat, 2:00PM • 0.7 miles away│    ║
║  │ 4 people with your interests│    ║
║  │                             │    ║
║  │ 🔍 Matches your Photography │    ║
║  │    interest                 │    ║
║  │                             │    ║
║  │ ╭───────────╮╭───────────╮  │    ║
║  │ │ View      ││  I'm In!  │  │    ║
║  │ ╰───────────╯╰───────────╯  │    ║
║  ╰─────────────────────────────╯    ║
║                                     ║
║  ╭─────────────────────────────╮    ║
║  │ ╭───────────────────────╮   │    ║
║  │ │    🎲                 │   │    ║
║  │ │                       │   │    ║
║  │ ╰───────────────────────╯   │    ║
║  │                             │    ║
║  │ Active Now                  │    ║
║  │                             │    ║
║  │ Board Game Café Meetup      │    ║
║  │ Today, 6:00PM • 1.2 miles   │    ║
║  │ 3 matches from your network │    ║
║  │                             │    ║
║  │ 🎲 Matches your Board Games │    ║
║  │    interest                 │    ║
║  │                             │    ║
║  │ ╭───────────╮╭───────────╮  │    ║
║  │ │ View      ││  I'm In!  │  │    ║
║  │ ╰───────────╯╰───────────╯  │    ║
║