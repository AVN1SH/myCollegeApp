## Project Structure

### Directory Layout

The My College project follows a structured directory layout:
```bash
myCollege/
├── public/                     # Public assets and static files
│   ├── images/                 # Images used in the project
│   ├── about.json              # JSON data files
│   ├── courses.json
│   ├── faculties.json
│   └── ...                     # lot more...
├── src/                        # Source code directory
│   ├── components/             # React components
│   │   ├── accordion/
│   │   ├── animation/          # Animations components
│   │   ├── auth/               # Authentication for url protection
│   │   ├── banner/             # banners
│   │   ├── dashboard/          # Components used for Dashboard page
│   │   ├── developer/          # Developer page components
│   │   ├── footer/             # footer file
│   │   ├── home/               # Home components file
│   │   ├── navbar/             # navbar
│   │   ├── result/             # result files
│   │   ├── ui/                 # ui components files
│   │   └── TimeLine.tsx 
│   ├── conf/                   # Configuration files
│   ├── Django/                 # Django integration files
│   ├── features/               # Redux slices (authSlice, stdSlice)
│   ├── lib/                    # Utility functions (utils.ts)
│   ├── pages/                  # React pages or views
│   ├── schema/                 # Zod schemas (zod.ts)
│   ├── store/                  # Redux store configuration
│   ├── utils/                  # Various utility files
│   ├── App.css                 # Global styles
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Index styles
│   ├── main.tsx                # Entry point for the application
│   └── vite-env.d.ts           # TypeScript declarations for Vite
├── .env                        # Environment variables
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore file
├── components.json             # Component metadata
├── index.html                  # HTML entry point
├── package-lock.json           # Package lock file
├── package.json                # Node.js package file
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project documentation
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node.js
├── vercel.json                 # Vercel deployment configuration
└── yarn.lock                   # Yarn lock file
```



### Component Hierarchy

The My College project organizes components into various directories based on their functionality. Here's a general overview of major components:

- **Dashboard Components**
  - LeftNavBar.tsx
  - SubNavBar.tsx
  - TimeLine.tsx
  - Progress components (Attendance.tsx, Overall.tsx, Behavior.tsx, Course.tsx)
- **UI Components**
  - Various UI components such as Button.tsx, Input.tsx, Form.tsx, etc.
- **Authentication Components**
  - FacultyProtectedRoute.tsx
  - ProtectedRoute.tsx
  - StudentProtectedRoute.tsx
- **Pages**
  - Home.tsx
  - AboutUs.tsx
  - FacultyLogin.tsx
  - Login.tsx
  - Registration.tsx
  - Developer.tsx
  - StudentDashboard components (MyClasses.tsx, Overview.tsx, Payment.tsx, Progress.tsx, etc.)
  - FacultyDashboard components (Classes.tsx, Overview.tsx, etc.)
  - ...etc
- **Development Components**
  - DeveloperGraph.tsx
  - Profile.tsx
- **Footer and Banner Components**
  - Footer.tsx
  - Banner components (Banner.tsx, Banner2.tsx, Banner3.tsx)

This hierarchy helps in understanding how different components are structured and their relationships within the application.

