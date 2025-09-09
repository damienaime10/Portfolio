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
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">Mes Projets</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              
              className="hover:scale-105 transition-transform duration-300"
              renderImage={() => (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
              )}
            >
              <h5 className="text-4xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
              <p className="font-normal  text-white mb-4">
                {project.description}
              </p>
              <a 
                href={project.link} 
                className="inline-block bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition"
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
