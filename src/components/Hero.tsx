import Image from 'next/image';
import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    image: {
        src: string;
        alt: string;
    };
}

export default function Hero({ title, subtitle, image }: HeroProps) {
    return (
        <div className="w-full max-w-[1000px] mx-auto mb-16 md:mb-24 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Left: Image on desktop, Top on mobile */}
                <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-square flex-shrink-0">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Text on desktop, Bottom on mobile */}
                <div className="w-full md:w-2/3 flex flex-col justify-center pt-2 md:pt-4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-neutral-500 text-sm md:text-base">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}
