// src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({});

  const handleFlip = (index) => {
    setIsFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getIcon = (icon) => {
    switch (icon) {
      case 'aws':
        return <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" />;
      case 'github':
        return <FaGithub size={40} className="mx-auto mb-3 text-foreground" />;
      case 'flutter':
        return <img src="/flutter-icon.png" alt="Flutter" className="mx-auto mb-3 w-10" />;
      default:
        return null;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements and ongoing learning.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <ReactCardFlip key={index} isFlipped={isFlipped[index]} flipDirection="horizontal">
              {/* Front Side */}
              <div
                className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                {getIcon(cert.icon)}
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">Issued By: {cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.period}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary font-medium"
                  >
                    View Certificate
                  </a>
                )}
                {cert.note && <p className="text-sm text-muted-foreground mt-2">{cert.note}</p>}
              </div>

              {/* Back Side */}
              <div
                className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-auto rounded-md"
                    loading="lazy"
                  />
                ) : (
                  <p className="text-white">Certificate image not available</p>
                )}
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
