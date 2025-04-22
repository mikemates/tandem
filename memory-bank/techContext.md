# Tandem - Technical Context

This document outlines the technical stack, tools, constraints, and implementation details for the Tandem virtual community platform.

## Technology Stack

### Frontend
- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3.3.5
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Build Tools**: Vite, PostCSS

### Development Environment
- **Version Control**: Git with GitHub
- **Code Editor**: VS Code
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier

### Storage (POC)
- **Data Persistence**: localStorage
- **Mock Services**: JavaScript modules simulating API calls

### Planned Backend (Post-POC)
- **API**: REST or GraphQL
- **Database**: MongoDB or PostgreSQL
- **Authentication**: JWT or OAuth
- **Real-time**: WebSockets

## Implementation Details

### Component Architecture

The application follows a structured component hierarchy:

```
src/
├── assets/         # Static assets
├── components/     # Reusable UI components
│   ├── common/     # Shared components
│   ├── profile/    # Profile components
│   ├── matching/   # Matching components
│   ├── messaging/  # Messaging components
│   └── community/  # Community components
├── pages/          # Page components that use smaller components
├── services/       # Data services and API abstraction
├── utils/          # Utility functions
├── context/        # React context providers
└── hooks/          # Custom React hooks
```

### Responsive Design Strategy

The application is built with a mobile-first approach using Tailwind CSS's responsive utilities:

- Base styles target mobile devices
- Media queries expand layouts for larger screens
- Conditional rendering for different screen sizes
- Flexible grids and layouts

### Data Flow Pattern

1. **Service Layer**:
   - ProfileService: Manages user profile data
   - MatchingService: Handles match algorithms and data
   - MessagingService: Manages conversations and messages
   - CommunityService: Handles activities, filtering, and participation

2. **Component Data Flow**:
   ```
   Services <--> Page Components <--> UI Components
   ```

3. **State Management**:
   - Component-level state for UI interactions
   - Service layer for data operations
   - No global state management library (Redux, etc.) needed for POC

## Technical Decisions

### Technology Choices

| Technology | Justification | Alternatives Considered |
|------------|--------------|-------------------------|
| React + Vite | Fast development experience, HMR, modern features | Next.js, Create React App |
| Tailwind CSS | Rapid styling with utility classes, minimal CSS | Styled Components, CSS Modules |
| React Router | Industry standard, declarative routing | Custom routing, Reach Router |
| localStorage | Simple client-side storage without backend | IndexedDB, sessionStorage |
| React Hooks | Clean component code, built-in to React | Class components, Redux |

### Technical Trade-offs

1. **Tailwind CSS v3.3.5 vs. v4**
   - Chose v3.3.5 for stability
   - v4 had compatibility issues with current setup
   - Trade-off: Missed newer features but gained reliability

2. **Mock Services vs. Backend**
   - Implemented mock services using JavaScript modules
   - Trade-off: Faster development but less realistic data interactions

3. **Component State vs. Global State**
   - Used component-level state with prop passing
   - Trade-off: Simpler setup but potentially more prop drilling

4. **Service Pattern vs. Context API**
   - Implemented service modules instead of React Context for data
   - Trade-off: Better separation of concerns but slightly more verbose imports

## Implementation Progress

### Complete Features
- Profile system (service, view, edit components, skills and interests management)
- Matching system (algorithm, cards, filtering)
- Messaging system (conversations, threads, composition)
- Community discovery system (activities, filtering, participation, creation)
- Responsive UI components (layouts, navigation, forms)

### In Progress
- UI polish and animation enhancements

### Technical Debt

1. **Styling Consistency**
   - Some inconsistent styling patterns
   - Need to extract common styles to shared classes

2. **Form Validation**
   - Basic validation implemented
   - Need more comprehensive validation and feedback

3. **Error Handling**
   - Simple error states implemented
   - Need more robust error boundaries and user feedback

4. **Testing**
   - Limited manual testing
   - No automated tests yet

## Browser & Device Support

### Target Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Target Devices
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Performance Considerations

1. **Rendering Optimization**
   - Minimized unnecessary re-renders
   - Used React.memo for pure components
   - Keys for efficient list rendering

2. **Asset Optimization**
   - SVG for icons where possible
   - Optimized image loading

3. **Code Splitting Opportunities**
   - Route-based code splitting potential
   - Dynamic imports for large components

## Security Considerations (for future implementation)

1. **Data Security**
   - Currently using client-side storage
   - Plan for proper authentication and authorization
   - Data validation both client and server side

2. **Input Validation**
   - Basic form validation implemented
   - Need server-side validation when API is added

3. **Authentication**
   - Simulated auth state for POC
   - Plan for proper JWT or OAuth implementation

## External Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.x | Core UI library |
| react-dom | 18.x | DOM rendering |
| react-router-dom | 6.x | Routing |
| tailwindcss | 3.3.5 | Styling |
| postcss | 8.x | CSS processing |
| vite | 6.x | Build tool |

## Deployment Strategy (Post-POC)

1. **Build Process**
   - npm run build
   - Output to dist/ directory
   - Static file hosting

2. **Environments**
   - Development
   - Staging
   - Production

3. **Hosting Options**
   - Netlify
   - Vercel
   - AWS S3 + CloudFront

## Developer Experience

1. **Local Development**
   - npm run dev for local server with HMR
   - Consistent code formatting with editor config
   - Git workflow with feature branches

2. **Documentation**
   - Component props documented in JSDoc
   - Service functions documented with parameters
   - Memory Bank for high-level documentation

3. **Tooling**
   - ESLint for code quality
   - Prettier for formatting
   - Git hooks for pre-commit checks (recommended)
