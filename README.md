# ⚡ Jobscope

A modern job board web application that connects job seekers with top companies. Built with React and Vite for a fast, responsive experience.

**Live Demo:** [jobportal-two-theta.vercel.app](https://jobportal-two-theta.vercel.app)

---

## 📖 About

Jobscope helps users find their dream job without the hassle. The platform connects job seekers with top companies like Google, Airbnb, Stripe, Netflix, Meta, Spotify, and Figma. Users can search and filter thousands of listings, browse by category, and create an account to start applying.

**Tagline:** *"Find Your Dream Job Without the Hassle"*

## ✨ Features

### Landing Page
- Hero section with search bar (search by job title, company, or keyword)
- Popular search tags: React Developer, UI Designer, Data Scientist, DevOps, Marketing
- Platform stats: 8K+ Active Jobs, 500+ Companies, 50K+ Hired, 4.9★ Rating
- "Trusted by" company logos: Google, Airbnb, Stripe, Netflix, Meta, Spotify, Figma
- Browse by Category cards:
  - Engineering (3 jobs)
  - Design (3 jobs)
  - Marketing (1 job)
  - Data (1 job)

### Jobs Listing Page
- Sidebar filters:
  - **Category:** All, Engineering, Design, Marketing, Data
  - **Job Type:** All Types, Full-time, Contract, Part-time
  - **Salary Range:** adjustable slider ($50k – $250k+)
- 8 featured job listings, each displaying:
  - Company logo/initials
  - Job title and company name
  - Location (or Remote)
  - Job type tag (Full-time / Contract)
  - Salary range
  - Time posted (e.g., "2 hours ago", "1 day ago")
  - "Featured" badge for premium listings

**Sample listings included:**
| Title | Company | Location | Type | Salary |
|---|---|---|---|---|
| Senior Frontend Developer | Google | Mountain View, CA | Full-time | $150k – $200k |
| Product Designer | Airbnb | Remote | Contract | $120k – $160k |
| Marketing Manager | Slack | New York, NY | Full-time | $90k – $130k |
| Backend Engineer | Stripe | San Francisco, CA | Full-time | $170k – $220k |
| UX Researcher | Meta | Menlo Park, CA | Full-time | $130k – $170k |
| DevOps Engineer | Netflix | Los Gatos, CA | Full-time | $160k – $210k |
| Data Scientist | Spotify | Remote | Full-time | $140k – $180k |
| Brand Designer | Figma | Remote | Contract | $100k – $140k |

### Authentication
- **Sign Up:** Full Name, Email Address, Password (min. 8 characters) — "Join 10,000+ Pros" badge
- **Sign In:** Email Address, Password
- Toggle links to switch between Sign Up and Sign In forms

### Design & UX
- Purple/indigo primary color scheme with a clean, card-based UI
- Rounded corners and soft shadows throughout
- Full **dark mode** support (toggle via moon/sun icon in the navbar) — backgrounds, text, and form fields all adapt correctly
- Fully responsive layout for desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite 8 (HMR-enabled)
- **Linting:** ESLint 9, with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/akritisaha20/jobportal.git
   cd jobportal
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Wait for the terminal to show:
   ```
   VITE ready in 300ms
   ➜  Local:   http://localhost:5173/
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server with hot reload |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run lint` | Runs ESLint across the project |
| `npm run preview` | Previews the production build locally |

## 📁 Project Structure

```
jobportal/
├── public/            # Static assets
├── src/               # Application source code
│   └── main.jsx        # App entry point
├── dist/              # Production build output (generated)
├── node_modules/      # Installed dependencies (generated)
├── index.html         # HTML entry point
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies & scripts
├── package-lock.json   # Locked dependency versions
├── .gitignore          # Files/folders excluded from Git
└── how to open.png     # Local setup screenshot guide
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). Any push to the `main` branch triggers an automatic deployment.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source. Add your preferred license here (e.g., MIT).

## 👤 Author

**Akriti Saha**
GitHub: [@akritisaha20](https://github.com/akritisaha20)