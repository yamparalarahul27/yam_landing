import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    ctaLabel: string;
    href: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    ctaLabel,
    href,
}: ProjectCardProps) {
    return (
        <Link href={href} className="group block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-lg">
            <article className="h-full border border-neutral-200 rounded-lg p-3 md:p-4 hover:border-neutral-300 hover:shadow-sm transition-all duration-300 bg-white flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-neutral-50 mb-4">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium mb-2 group-hover:underline decoration-1 underline-offset-4">
                        {title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-6 line-clamp-2 leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-auto flex justify-end">
                        <span className="text-xs font-medium border border-neutral-200 px-3 py-1.5 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                            {ctaLabel}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
