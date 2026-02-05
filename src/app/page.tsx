import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import data from '../data/portfolio.json';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow w-full">
      <Header />

      <div className="flex-grow w-full max-w-[1000px] mx-auto px-4 sm:px-6">
        <Hero
          title={data.heroTitle}
          subtitle={data.heroSubtitle}
          image={data.heroImage}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.cards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              ctaLabel={card.ctaLabel}
              href={card.href}
            />
          ))}
        </div>
      </div>

      <Footer text={data.footer} />
    </main>
  );
}
