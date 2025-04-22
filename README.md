# Tandem - Virtual Community Web Application

Tandem is a community platform that connects people based on complementary skills, shared interests, and proximity. It enables authentic community building through skill sharing and mutual learning.

## Project Overview

Tandem is designed as a local-first platform focused on creating meaningful connections between people who can learn from each other. The core concept is to match individuals where one person has skills that the other wants to learn, and vice versa, while also taking shared interests and proximity into account.

## Features Implemented

### Matching System
- Algorithm that considers complementary skills, shared interests, and proximity
- Match quality indicators showing percentage-based match scores
- Detailed match profiles highlighting why users match
- Filtering capabilities by skills, interests, and distance

### Messaging System
- Conversation list showing all active conversations
- Real-time message thread with sent/received visualization
- Message composition with instant UI updates
- Conversation history management

### Navigation & UI
- Responsive layout working on both mobile and desktop
- Clean, modern design with Tailwind CSS
- Intuitive navigation between features

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React hooks
- **Data Storage**: Mock data (localStorage)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/mikemates/tandem.git
   ```

2. Install dependencies:
   ```
   cd tandem-app
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

## Project Structure

```
tandem-app/
├── public/             # Static assets
├── src/
│   ├── assets/         # Application assets
│   ├── components/     # UI components
│   │   ├── matching/   # Matching components
│   │   ├── messaging/  # Messaging components
│   │   └── ...
│   ├── pages/          # Page components
│   ├── services/       # Service modules
│   └── utils/          # Utility functions
└── memory-bank/        # Project documentation
```

## Memory Bank

The project includes a comprehensive Memory Bank with detailed documentation:

- **Project Brief**: Core requirements and goals
- **Product Context**: Why this project exists and problems it solves
- **System Patterns**: Architecture and design patterns
- **Tech Context**: Technologies and constraints
- **Active Context**: Current work focus and priorities
- **Progress**: Implementation status and roadmap

## Next Steps

- Profile page implementation
- Community discovery features
- Enhanced UI with animations
- Comprehensive testing

## License

This project is proprietary and created for demonstration purposes.

© 2025 Tandem. All rights reserved.
