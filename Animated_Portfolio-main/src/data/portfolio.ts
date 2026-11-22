/**
 * @module portfolio-data
 * @author  Darshan Badiger — https://github.com/DarshanBadiger18
 * @license Attribution required — see LICENSE in project root
 *
 * Personal portfolio data for Darshan Badiger.
 * This file contains personal content specific to Darshan Badiger.
 * Use of this file's structure is permitted for learning;
 * redistribution with original content is not permitted.
 */

import type { Education, Certifications } from './types';

export const portfolioData = {
  personal: {
    name: 'DARSHAN BADIGER',
    title: 'Full Stack Developer\nAI & Data Science Enthusiast',
    email: 'darshanbadiger872@gmail.com',
    phone: '+91 8867851893',
    github: 'https://github.com/DarshanBadiger18',
    linkedin: 'https://linkedin.com/in/darshanbadiger18',
    hackerrank: 'https://www.hackerrank.com/profile/darshanbadiger81',
    instagram: 'https://www.instagram.com/in/darshhh._.18',
    location: 'Bengaluru, Karnataka',
    bio: 'Turning Ideas Into Intelligent Digital Solutions.',
    heroDescription:
      'I develop modern web applications and AI-powered solutions by combining software engineering, intelligent technologies, and creative problem-solving.',
  },

  skills: [
    {
      category: 'Frontend',
      items: [
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          color: '#E34F26',
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          color: '#1572B6',
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          color: '#F7DF1E',
        },
        {
          name: 'TypeScript',
          logo: '/logos/typescript-original.svg',
          link: 'https://www.typescriptlang.org/',
          color: '#3178C6',
        },
        {
          name: 'React',
          logo: '/logos/react-original.svg',
          link: 'https://react.dev/',
          color: '#61DAFB',
        },
        {
          name: 'Tailwind CSS',
          logo: '/logos/tailwindcss-original.svg',
          link: 'https://tailwindcss.com/',
          color: '#38BDF8',
        },
        {
          name: 'Framer Motion',
          logo: 'https://cdn.simpleicons.org/framer',
          link: 'https://www.framer.com/motion/',
          color: '#FF008C',
        },
      ],
    },
    {
      category: 'Backend',
      items: [
        {
          name: 'Node.js',
          logo: '/logos/nodejs-original.svg',
          link: 'https://nodejs.org/',
          color: '#5FA04E',
        },
        {
          name: 'Express.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          link: 'https://expressjs.com/',
          color: '#FFFFFF',
        },
        {
          name: 'Python',
          logo: '/logos/python-original.svg',
          link: 'https://www.python.org/',
          color: '#3776AB',
        },
        {
          name: 'FastAPI',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          link: 'https://fastapi.tiangolo.com/',
          color: '#009688',
        },
        {
          name: 'PostgreSQL',
          logo: '/logos/postgresql-original.svg',
          link: 'https://www.postgresql.org/',
          color: '#336791',
        },
        {
          name: 'MongoDB',
          logo: '/logos/mongodb-original.svg',
          link: 'https://www.mongodb.com/',
          color: '#47A248',
        },
        {
          name: 'Firebase',
          logo: '/logos/firebase-original.svg',
          link: 'https://firebase.google.com/',
          color: '#FFCA28',
        },
      ],
    },
    {
      category: 'DevOps',
      items: [
        {
          name: 'Docker',
          logo: '/logos/docker-original.svg',
          link: 'https://www.docker.com/',
          color: '#2496ED',
        },
        {
          name: 'AWS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          link: 'https://aws.amazon.com/',
          color: '#FF9900',
        },
        {
          name: 'Vercel',
          logo: '/logos/vercel-original.svg',
          link: 'https://vercel.com/',
          color: '#FFFFFF',
        },
        {
          name: 'GitHub Actions',
          logo: '/logos/githubactions-original.svg',
          link: 'https://github.com/features/actions',
          color: '#2088FF',
        },
      ],
    },
    {
      category: 'Tools',
      items: [
        {
          name: 'Git',
          logo: '/logos/git-original.svg',
          link: 'https://git-scm.com/',
          color: '#F05032',
        },
        {
          name: 'GitHub',
          logo: '/logos/github-original.svg',
          link: 'https://github.com/',
          color: '#FFFFFF',
        },
        {
          name: 'VSCode',
          logo: '/logos/vscode-original.svg',
          link: 'https://code.visualstudio.com/',
          color: '#007ACC',
        },
        {
          name: 'Figma',
          logo: '/logos/figma-original.svg',
          link: 'https://figma.com/',
          color: '#F24E1E',
        },
        {
          name: 'Postman',
          logo: '/logos/postman.svg',
          link: 'https://www.postman.com/',
          color: '#FF6C37',
        },
      ],
    },
    {
      category: 'Security',
      items: [
        {
          name: 'Kali Linux',
          logo: 'https://cdn.simpleicons.org/kalilinux',
          link: 'https://www.kali.org/',
          color: '#557C94',
        },
        {
          name: 'TryHackMe',
          logo: 'https://cdn.simpleicons.org/tryhackme',
          link: 'https://tryhackme.com/',
          color: '#212C42',
        },
        {
          name: 'Wireshark',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg',
          link: 'https://www.wireshark.org/',
          color: '#1679A7',
        },
      ],
    },
  ] as Skill[],

  projects: [
    {
      id: 'darshan18-portfolio',
      title: 'Darshan18 Portfolio',
      description:
        'A modern animated portfolio featuring a Three.js visual experience, orbital hero icons, a VS Code-style project explorer, a bento-style About section, and polished motion effects.',
      details: `## Overview
Darshan18 Portfolio is a personal portfolio website designed to showcase projects and professional information through an animated, interactive interface.

## Key Features
- Three.js-powered visual elements and an interactive hero section
- Orbital technology icons linked to featured projects
- VS Code-inspired project explorer modal
- Bento-style About section
- Framer Motion and Anime.js animations throughout the experience

## Technical Stack
- React
- Three.js
- Framer Motion
- Anime.js`,
      technologies: ['React', 'Three.js', 'Framer Motion', 'Anime.js'],
      githubUrl: 'https://github.com/DarshanBadiger18/Darshan18-Portfolio',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/darshan18-portfolio.svg',
      screenshots: ['/projects/covers/darshan18-portfolio.svg'],
    },
    {
      id: 'agroshree-ai',
      title: 'AgroShree AI - Digital Agriculture Ecosystem',
      description:
        'An integrated agriculture platform concept connecting farmers and agri-business services, with AI-assisted crop health and recommendations, digital farm records, a produce marketplace, equipment services, and multilingual support.',
      details: `## Overview
AgroShree AI presents a unified digital ecosystem for agricultural workflows, connecting farmers with crop insights, marketplace services, and agri-business tools.

## Key Features
- Farmer portal concepts for farm boundaries, soil health records, crop stages, and farm diaries
- AI leaf-disease scanning with confidence scores and suggested treatments
- Crop recommendations based on soil nutrients and weather
- Produce marketplace with auctions and market-price information
- Equipment and drone rental, agri-input storefronts, and logistics services
- Administrative dashboards and multilingual voice-assistant support

## Technical Stack
- React 19 and Vite frontend
- Java 21 and Spring Boot backend
- PostgreSQL with PostGIS spatial data support
- Lucide React icons and custom CSS design tokens`,
      technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'AI/ML'],
      githubUrl: 'https://github.com/DarshanBadiger18/AgroShree-AI',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/agroshree-ai.svg',
      screenshots: ['/projects/covers/agroshree-ai.svg'],
    },
    {
      id: 'spectra-showroom',
      title: 'SPEACTRA 3D Showroom',
      description:
        'An immersive 3D motorcycle showroom where visitors switch between three bike models and explore cinematic product views through scroll-driven camera movement.',
      details: `## Overview
SPEACTRA is a 3D product showcase that keeps the motorcycle model in a persistent WebGL scene while the page scrolls through product-focused sections.

## Key Features
- Switch between three motorcycle variants using an animated carousel
- Explore cinematic camera angles controlled by page scrolling
- Normalize and center loaded 3D models for consistent presentation
- Smooth section reveals, loading progress, and interactive navigation

## Technical Stack
- React 19 with Vite
- Three.js with React Three Fiber and Drei
- GSAP and ScrollTrigger for scroll-driven camera and transitions
- Tailwind CSS`,
      technologies: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'Tailwind CSS'],
      githubUrl: 'https://github.com/DarshanBadiger18/SPEACTRA.-Showroom',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/spectra-showroom.svg',
      screenshots: ['/projects/covers/spectra-showroom.svg'],
    },
    {
      id: 'resume-analyzer',
      title: 'Resume Analyzer & Job Match Platform',
      description:
        'A full-stack recruitment application that scores resumes against job requirements, explains matched and missing skills, compares one resume across multiple roles, and supports recruiter shortlisting.',
      details: `## Overview
Resume Analyzer helps candidates evaluate how well their resumes fit sample job postings and gives recruiters tools to review and shortlist applications.

## Key Features
- Browse jobs, create an account, and submit applications with a resume upload
- Score applications against skills, education, experience, and job requirements
- Show match scores, matched and missing skills, and improvement suggestions
- Compare one resume against multiple jobs and rank the results
- Provide recruiter metrics and admin tools for reviewing, shortlisting, and downloading applications

## Technical Stack
- Java 17+ and Spring Boot
- Spring Web REST APIs, Spring Data JPA, and Hibernate
- HTML, CSS, and JavaScript frontend
- MySQL or local H2 database, with Maven build tooling`,
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HTML', 'JavaScript'],
      githubUrl: 'https://github.com/DarshanBadiger18/Resume-Analyzer---Project',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/resume-analyzer.svg',
      screenshots: ['/projects/covers/resume-analyzer.svg'],
    },
    {
      id: 'ayucare',
      title: 'AYUCARE - Ayurvedic Healthcare Platform',
      description:
        'A healthcare platform combining Ayurvedic guidance with machine-learning features for symptom-based disease prediction, medicine recommendations, wellness tips, and nearby treatment-center discovery.',
      details: `## Overview
AYUCARE provides a responsive healthcare experience that brings together Ayurvedic wellness information and machine-learning-based support tools.

## Key Features
- Predict possible conditions from user-reported symptoms
- Recommend Ayurvedic medicines based on health information
- Locate Ayurvedic hospitals and clinics using an interactive map
- Offer health tips, FAQs, and a contact form
- Support registration, login, and personalized user experiences

## Technical Stack
- Python and Flask
- SQLite with SQLAlchemy
- Flask-Login, Flask-Bcrypt, and Flask-WTF
- Scikit-learn, NumPy, and Pandas for machine-learning workflows
- Leaflet.js for maps`,
      technologies: ['Python', 'Flask', 'Scikit-learn', 'SQLite', 'SQLAlchemy', 'Leaflet.js'],
      githubUrl: 'https://github.com/DarshanBadiger18/AYUCARE',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/ayucare.svg',
      screenshots: ['/projects/covers/ayucare.svg'],
    },
    {
      id: 'snpsu-trainer-feedback',
      title: 'SNPSU MCA Trainer Feedback Portal',
      description:
        'A web portal for submitting and reviewing MCA trainer feedback, with ratings from 1 to 5 for topics, concepts, interaction, and delivery, plus overall ratings and Excel export of feedback records.',
      details: `## Overview
The SNPSU MCA Trainer Feedback Portal collects structured feedback about trainer sessions and provides a view of submitted records.

## Key Features
- Submit trainer and respondent details through a feedback form
- Rate topics covered, concept clarity, interaction, and delivery on a scale from 1 to 5
- Review submitted feedback and its calculated overall rating
- View feedback records in a table and download them as an Excel workbook

## Technical Stack
- Java 17 and Spring Boot
- Spring MVC, JDBC, and Thymeleaf
- MySQL for persistence
- Apache POI for Excel export`,
      technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'JDBC', 'MySQL', 'Apache POI'],
      githubUrl: 'https://github.com/DarshanBadiger18/SNPSU-MCA-Trainer-feedback-Portal',
      status: 'completed',
      priority: 'high',
      thumbnail: '/projects/covers/snpsu-trainer-feedback.svg',
      screenshots: ['/projects/covers/snpsu-trainer-feedback.svg'],
    },
  ] as Project[],

  education: [
    {
      institution: 'Sapthagiri NPS University',
      degree: 'Master of Computer Applications',
      period: '2025 – 2027',
      description: 'Specialization: Artificial Intelligence & Data Science · Bengaluru, Karnataka',
      image: '/images/sapthagiri_nps_university.webp.jpeg',
    },
    {
      institution: 'Chetana BCA and BBA College',
      degree: 'Bachelor of Computer Applications',
      period: '2022 – 2025',
      description: 'Vijayapura, Karnataka',
      image: '/images/chetana_bca_bba_college.webp.jpeg',
    },
  ] as Education[],

  experience: [
    {
      company: 'Innovatum Engineering & Technology LLP',
      position: 'Python Full Stack Development Intern',
      period: '2025',
      location: 'Vijayapura',
      description: [
        'Completed a full-stack development internship focused on building web applications with Python and Django.',
        'Worked with Python, Django, HTML, Java, and web technologies to develop application features.',
      ],
      technologies: ['Python', 'Django', 'HTML', 'Java', 'Web Technologies'],
    },
  ] as Experience[],

  certifications: [
    {
      title: 'AI Security with Microsoft Cloud (Azure & M365)',
      issuer: 'Infosys Springboard',
      date: 'Aug 4, 2026',
      image: '/certificate/infosys_ai_security.webp.jpeg',
      category: 'other',
      description: ['Completed the AI Security with Microsoft Cloud course, covering security concepts across Microsoft Azure and Microsoft 365.'],
      skills: ['AI Security', 'Microsoft Azure', 'Microsoft 365'],
    },
    {
      title: 'Data Visualization with Tableau',
      issuer: 'Infosys Springboard',
      date: 'Aug 1, 2026',
      image: '/certificate/infosys_tableau_D12.webp',
      category: 'other',
      description: ['Completed the course in data visualization with Tableau, building skills in presenting and interpreting data visually.'],
      skills: ['Tableau', 'Data Visualization'],
    },
    {
      title: 'DECODE SIH 2026',
      issuer: 'OSCode',
      date: '2026',
      image: '/certificate/decode_sih_2026.webp.jpeg',
      category: 'competition',
      description: ['Participated in DECODE SIH 2026, organized by OSCode, and contributed innovation and effort toward building a smarter tomorrow.'],
      skills: ['Innovation', 'Problem Solving', 'Teamwork'],
    },
    {
      title: '2026 i12 HR Drive Hackathon',
      issuer: 'Callus',
      date: 'Sep 8, 2026',
      image: '/certificate/callus_i12_hr_drive_hackathon_D11.webp',
      location: 'Sapthagiri NPS University',
      category: 'competition',
      description: ['Participated in the 2026 i12 HR Drive Hackathon, held from August 1 to August 15, 2026.'],
      skills: ['Hackathon', 'Teamwork'],
    },
    {
      title: 'Regalia 2026 Hackathon',
      issuer: 'Acharya Bangalore B-School',
      date: 'Feb 27, 2026',
      image: '/certificate/regalia_2026.webp.jpeg',
      location: 'Bengaluru, Karnataka',
      category: 'competition',
      description: ['Recognized for actively participating in the hackathon at Regalia 2026, the national-level inter-collegiate fest held on February 27–28, 2026.'],
      skills: ['Hackathon', 'Teamwork', 'Problem Solving'],
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'Apr 1, 2026',
      image: '/certificate/infosys_cybersecurity.webp.jpeg',
      category: 'other',
      description: ['Completed the Cybersecurity Fundamentals course, strengthening foundational knowledge of cybersecurity concepts.'],
      skills: ['Cybersecurity', 'Security Fundamentals'],
    },
    {
      title: 'One-Day Intensive UX/UI Design Workshop',
      issuer: 'Innoovatum',
      date: 'Jul 2024',
      image: '/certificate/D6.webp.jpeg',
      location: 'Chetana BCA & BBA College, Vijayapura',
      category: 'other',
      description: ['Completed an intensive UX/UI design workshop covering user research, wireframing, prototyping, and visual design using Figma.'],
      skills: ['UX/UI Design', 'User Research', 'Wireframing', 'Prototyping', 'Figma'],
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco Networking Academy · Sapthagiri College of Engineering',
      date: 'Dec 19, 2025',
      image: '/certificate/cyberops_associate.webp',
      category: 'other',
      description: ['Successfully completed the CyberOps Associate course offered by Sapthagiri College of Engineering through the Cisco Networking Academy program.'],
      skills: ['CyberOps', 'Cisco Networking Academy'],
    },
  ] as Certifications[],
};
