// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Hosein Javid - Mobile & Flutter Developer</title>
        <meta name="description" content="Welcome to Hosein Javid's portfolio website. Explore my projects, skills, and professional experience." />
        <meta name="keywords" content="HoseinJavid, Flutter developer, mobile developer, Dart, Flutter portfolio" />
        <meta name="author" content="Hosein Javid" />
        <meta property="og:title" content="Hosein Javid - Portfolio" />
        <meta property="og:description" content="A showcase of my projects, skills, and experience as a mobile / Flutter developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/HoseinJavid" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hosein Javid - Portfolio" />
        <meta name="twitter:description" content="Check out my Flutter & mobile development projects, skills and experience." />
        <link rel="canonical" href="https://github.com/HoseinJavid" />
        {/* Structured Data for search engines */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hosein Javid",
            "url": "https://github.com/HoseinJavid",
            "jobTitle": "Mobile & Flutter Developer",
            "description": "Portfolio website of Hosein Javid — mobile / Flutter developer showcasing projects, skills, experience.",
            "sameAs": [
              "https://github.com/HoseinJavid"
            ]
          }
        `}</script>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
