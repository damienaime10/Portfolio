import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Carrousels() {
  return (
    <div className="w-screen h-screen">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={4000} 
        transitionTime={500}
      >
        {/* Slide 1 - Présentation */}
        <div>
          <img 
            src="/assets/1.jpeg" 
            alt="Slide 1" 
            className="w-screen h-screen object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-5xl font-bold mb-4">
              Aimé Damien
            </h1>
            <p className="text-white text-3xl">
              Ingénieur en Génie Informatique & Télécommunication
            </p>
          </div>
        </div>

        {/* Slide 2 - Compétences */}
        <div>
          <img 
            src="/assets/2.jpeg" 
            alt="Slide 2" 
            className="w-screen h-screen object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-5xl font-bold mb-4">
              Développement & Innovation
            </h1>
            <p className="text-white text-3xl max-w-2xl">
              Passionné par les nouvelles technologies, je conçois des solutions
              en <span className="font-semibold">développement web, mobile et systèmes de télécommunication</span>.
            </p>
          </div>
        </div>

        {/* Slide 3 - Contact */}
        <div>
          <img 
            src="/assets/3.jpeg" 
            alt="Slide 3" 
            className="w-screen h-screen object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-5xl font-bold mb-4">
              Travaillons Ensemble
            </h1>
            <p className="text-white text-3xl max-w-2xl mb-6">
              Vous recherchez un profil polyvalent en informatique et télécommunication ?
              Je suis prêt à collaborer sur vos projets innovants.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
