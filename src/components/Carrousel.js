import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Carrousels() {
  return (
    <div className="w-screen h-[80vh]">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={4000} 
        transitionTime={500}
      >
        {/* Slide 1 - Présentation */}
        <div className="relative h-[80vh]">
          <img 
            src="/assets/1.jpeg" 
            alt="Slide 1" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Aimé Damien
            </h1>
            <p className="text-3xl text-white">
              Ingénieur en Génie Informatique & Télécommunication
            </p>
          </div>
        </div>

        {/* Slide 2 - Compétences */}
        <div className="relative h-[80vh]">
          <img 
            src="/assets/2.jpeg" 
            alt="Slide 2" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Développement & Innovation
            </h1>
            <p className="max-w-2xl text-3xl text-white">
              Passionné par les nouvelles technologies, je conçois des solutions
              en <span className="font-semibold">développement web, mobile et systèmes de télécommunication</span>.
            </p>
          </div>
        </div>

        {/* Slide 3 - Contact */}
        <div className="relative h-[80vh]">
          <img 
            src="/assets/3.jpeg" 
            alt="Slide 3" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Travaillons Ensemble
            </h1>
            <p className="max-w-2xl mb-6 text-3xl text-white">
              Vous recherchez un profil polyvalent en informatique et télécommunication ?
              Je suis prêt à collaborer sur vos projets innovants.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-3 text-lg font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
