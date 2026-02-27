# 🐾 PAWDOPT — Online Pet Adoption Platform

> **Helping more paws find loving homes across India.**

PAWDOPT is a modern, responsive web application that connects animal shelters and NGOs with potential pet adopters. Built to streamline the adoption process and increase visibility for shelter animals.

🔗 **Live Demo:** [pawdopt.vercel.app](https://pawdopt.vercel.app)  
📦 **Repository:** [github.com/shaikhakramshakil/PAWDOPT](https://github.com/shaikhakramshakil/PAWDOPT)

---

## 📌 Problem Statement

NGOs and animal shelters struggle to find suitable adopters for rescued pets. Traditional methods of pet adoption are inefficient, lack digital reach, and often result in pets staying in shelters for extended periods.

## 💡 Solution

A user-friendly online platform that enables shelters to list pets and adopters to discover, filter, and apply for adoption — all in one place.

---

## 🎯 Core Requirements

| # | Feature | Route | Description |
|---|---------|-------|-------------|
| 1 | **Pet Listing with Filters** | `/pets` | Browse all available pets with filters for type (Dogs, Cats, Birds, etc.), age, size, gender. Supports grid and list view with search. |
| 2 | **Adoption Request Form** | `/adopt/[id]` | Multi-step application form covering personal info, living situation, pet care plan, and agreements with progress tracking. |
| 3 | **Pet Details Page** | `/pets/[id]` | Detailed pet profile with photo gallery, health info, compatibility chart, traits, adoption fee (₹), and shelter contact. |
| 4 | **Adoption Guidelines** | `/how-it-works` | Complete guide covering how adoption works (6 steps), eligibility requirements, fee structure, home preparation checklist, and FAQs. |
| 5 | **Contact Shelter** | `/contact` | Contact form with partner shelter listings (Mumbai, Delhi, Bengaluru), addresses, phone numbers, emails, hours, and 24/7 emergency helpline. |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router & Turbopack |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling with custom theme |
| **Lucide React** | Icon library |
| **Vercel** | Deployment & hosting |

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Dashboard with core feature highlights
│   │   ├── layout.tsx            # Root layout (Navbar + Sidebar + Content)
│   │   ├── globals.css           # Theme, components, utilities
│   │   ├── pets/
│   │   │   ├── page.tsx          # 🎯 Pet Listing with Filters
│   │   │   └── [id]/page.tsx     # 🎯 Pet Details Page
│   │   ├── adopt/
│   │   │   └── [id]/page.tsx     # 🎯 Adoption Request Form
│   │   ├── how-it-works/
│   │   │   └── page.tsx          # 🎯 Adoption Guidelines
│   │   ├── contact/
│   │   │   └── page.tsx          # 🎯 Contact Shelter
│   │   ├── stories/page.tsx      # Success Stories
│   │   ├── events/page.tsx       # Adoption Events
│   │   ├── foster/page.tsx       # Foster Program
│   │   ├── donate/page.tsx       # Donations
│   │   ├── applications/page.tsx # My Applications
│   │   ├── messages/page.tsx     # Messages
│   │   └── settings/page.tsx     # Settings
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx        # Top navigation with core feature links
│       │   └── Sidebar.tsx       # Sidebar with Core Features & More sections
│       └── dashboard/
│           ├── WelcomeCard.tsx
│           ├── AdoptionStats.tsx
│           ├── ApplicationProgress.tsx
│           ├── FeaturedPets.tsx
│           ├── SupportCard.tsx
│           └── SuccessStories.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── vercel.json
└── PRD.md                        # Full Product Requirements Document
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shaikhakramshakil/PAWDOPT.git
cd PAWDOPT

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Key Pages Overview

### Dashboard (`/`)
- Welcome banner with platform stats (1,248 pets, 50+ shelters, 892 adopted)
- **"What You Can Do on Pawdopt"** — visual grid highlighting all 5 core features
- Featured pets, adoption stats, application progress tracker
- Quick links bar for instant access to core features

### Pet Listing (`/pets`)
- Filter by: **Type** (Dogs, Cats, Birds, Rabbits), **Age**, **Size**, **Gender**
- Search by name or breed
- Toggle between **Grid** and **List** views
- Pet cards with status badges (Available / Pending)

### Adoption Request Form (`/adopt/[id]`)
- 4-step form with visual progress indicator:
  1. **Personal Info** — name, email, phone, address, ID proof
  2. **Living Situation** — housing type, yard, household members, current pets
  3. **Pet Care Plan** — work schedule, experience, emergency plan
  4. **Agreements** — home visit consent, terms, return policy

### Pet Details (`/pets/[id]`)
- Photo gallery with multiple images
- Health info (vaccinated, spayed/neutered, microchipped)
- Compatibility chart (kids, dogs, cats, apartment)
- Adoption fee in ₹ (Indian Rupees)
- Shelter info with contact details

### Adoption Guidelines (`/how-it-works`)
- 6-step adoption process walkthrough
- Eligibility requirements checklist
- Fee table (₹500 – ₹10,000 by pet type)
- Home preparation checklist (9 items)
- 6 frequently asked questions

### Contact Shelter (`/contact`)
- Contact form with shelter selector
- 3 partner shelters: Mumbai, New Delhi, Bengaluru
- Address, phone, email, working hours for each
- 24/7 animal emergency helpline: **1800-111-565**

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#FFFDF5` | Page background |
| `--color-coral` | `#FF9AA2` | Primary accent, buttons, links |
| `--color-mint` | `#B5EAD7` | Success states, health badges |
| `--color-lavender` | `#C7CEEA` | Secondary accent, tags |
| `--color-softYellow` | `#FFF5BA` | Highlights, alerts |
| `--color-warning` | `#FFD6A5` | Warning states, peach cards |
| Font | Nunito | Friendly, rounded typeface |

---

## 🇮🇳 India-Specific Data

All mock data is localized for India:
- **Shelter locations:** Mumbai (MH), New Delhi (DL), Bengaluru (KA)
- **Pet locations:** Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai
- **Currency:** Indian Rupees (₹)
- **Phone numbers:** +91 format
- **Emergency helpline:** 1800-111-565 (Animal Helpline India)
- **Weight units:** Kilograms (kg)
- **Adopter names:** Indian names (Sharma, Patel, Priya, Rahul, etc.)

---

## 📄 License

This project is for educational purposes.

---

## 👤 Author

**Shaikh Akram Shakil**  
GitHub: [@shaikhakramshakil](https://github.com/shaikhakramshakil)
