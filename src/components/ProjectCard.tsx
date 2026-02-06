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
        <Link href={href} className="group block focus:outline-none rounded-lg">
            <article className="h-full border border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-sm transition-all duration-300 bg-white flex flex-col">
                {/* Image */}
                <div className="relative w-full h-[200px] rounded-t-md overflow-hidden bg-neutral-50 mb-4">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow" style={{ paddingLeft: '24px', paddingRight: '24px', paddingBottom: '24px' }}>
                    <h3 className="text-lg font-medium mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-6 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </article>
        </Link>
    );
}
