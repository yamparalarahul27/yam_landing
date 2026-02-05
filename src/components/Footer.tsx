import React from 'react';

export default function Footer({ text }: { text: string }) {
    return (
        <footer className="w-full py-12 mt-16 md:mt-24 border-t border-neutral-100">
            <div className="max-w-[1000px] mx-auto px-4 text-center">
                <p className="text-xs text-neutral-400 font-light">
                    {text}
                </p>
            </div>
        </footer>
    );
}
