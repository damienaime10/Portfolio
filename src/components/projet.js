import React from "react";
import { Card } from "flowbite-react";

export default function Projects() {
  const projects = [
    {
      title: "Plateforme de Gestion Académique",
      description: "Application web pour gérer les inscriptions et parcours des étudiants dans les universités du Bénin.",
      image: "/assets/projet1.jpeg",
      link: "#"
    },
    {
      title: "Application de Banking SMS",
      description: "Solution de notification bancaire par SMS pour améliorer la communication client.",
      image: "/assets/projet2.jpeg",
      link: "#"
    },
    {
      title: "Portfolio Personnel",
      description: "Site moderne et responsive pour présenter mes compétences et projets.",
      image: "/assets/projet3.jpeg",
      link: "#"
    },
   
  ];

  return (
    <section id="projects" className="py-16 bg-gray-600">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">Mes Projets</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index}
              
              className="duration-300 bg-gray-700 text-whitetransition-transform hover:scale-125"
              renderImage={() => (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-56"
                />
              )}
            >
              <h5 className="text-4xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
              <p className="mb-4 font-normal text-white">
                {project.description}
              </p>
              <a 
                href={project.link} 
                className="inline-block px-2 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Voir le projet
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
