import React from 'react';

const InfiniteLogoSlider = () => {
  // Tableau de logos (remplacez par vos propres images)
  const logos = [
    { id: 1, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { id: 3, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { id: 4, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
    { id: 5, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { id: 6, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { id: 7, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
    { id: 8, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code' },
  ];

  // Dupliquer les logos pour créer l'effet infini fluide
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-blue-50 to-indigo-50 ">
      <div className="flex w-max animate-infinite-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="mx-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-16 object-contain opacity-80 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;