import React from 'react'
import Info from './Info'

export default function About() {
  return (
    <>
    <div className="py-16 bg-slate-300">
      {/* Conteneur centré */}
      <div className="container flex flex-col items-center max-w-5xl gap-10 px-6 mx-auto md:flex-row">
        
        {/* Image de profil */}
        <div>
          <img 
            src="/assets/12.jpeg" 
            alt="Photo de profil de Amandete Aimé Damien" 
            className="object-cover border-4 border-white rounded-full shadow-lg h-60 w-60"
          />
        </div>

        {/* Texte de présentation */}
        <div className="flex flex-col max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            AMANDETE AIMÉ DAMIEN
          </h1>
          
          <h3 className="mt-4 text-2xl font-semibold text-blue-700">
            À propos de moi
          </h3>
          
          <p className="mt-4 leading-relaxed text-gray-700 ">
            Je suis passionné par le développement web et la création 
            d’applications modernes. Mon objectif est de transformer des idées 
            en solutions numériques efficaces et intuitives. 
            Ce portfolio est une vitrine de mes projets et de mes compétences.
          </p>
        </div>
      </div>
    </div>

    <div>
      <Info/>
    </div>
    </>
    
  )
}
