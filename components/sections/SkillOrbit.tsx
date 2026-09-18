'use client';

import Image from 'next/image';

const skillIcons = [
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'Figma', src: '/images/figma.png' },
  { name: 'WordPress', src: '/images/nextjs.png' }, // or WP/Next logo
  { name: 'TypeScript', src: '/images/typescriptIcon.png' },
  { name: 'Docker', src: '/images/docker.png' },
  { name: 'Tailwind CSS', src: '/images/tailwindIcon.png' },
  { name: 'Angular', src: '/images/angular.png' },
  { name: 'Node.js', src: '/images/node.png' },
  { name: 'PostgreSQL', src: '/images/postgresql.webp' },
  { name: 'React', src: '/images/react.png' },
];

export default function SkillOrbit() {
  const total = skillIcons.length;

  return (
    <div className="relative w-full max-w-105 sm:max-w-125 md:max-w-137.5 aspect-square flex items-center justify-center mx-auto my-4 md:my-0">
      {/* Outer Glow Ring */}
      <div className="absolute inset-4 rounded-full border border-[#00FFFF]/20 shadow-[0_0_50px_rgba(0,255,255,0.15)] pointer-events-none" />
      <div className="absolute inset-12 rounded-full border border-dashed border-[#00FFFF]/30 pointer-events-none" />

      {/* Central Profile Photo */}
      <div className="relative z-10 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1 bg-linear-to-tr from-[#00FFFF]/80 via-white/20 to-[#00FFFF]/40 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
        <div className="w-full h-full rounded-full overflow-hidden relative bg-[#1a1a1a]">
          <Image
            src="/images/jv-photo.jpg"
            alt="João Victor"
            fill
            sizes="(max-width: 768px) 192px, 224px"
            className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* Orbit Container */}
      <div className="absolute inset-0 w-full h-full animate-spin-orbit pointer-events-none">
        {skillIcons.map((skill, index) => {
          const angle = (index / total) * 360;

          return (
            <div
              key={skill.name}
              className="absolute left-1/2 top-1/2 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7 md:-ml-8 md:-mt-8 pointer-events-auto group"
              style={{
                transform: `rotate(${angle}deg) translate(var(--orbit-radius, 140px)) rotate(-${angle}deg)`,
              }}
            >
              {/* CSS Responsive radius trick */}
              <style jsx>{`
                div {
                  --orbit-radius: 140px;
                }
                @media (min-width: 640px) {
                  div {
                    --orbit-radius: 190px;
                  }
                }
                @media (min-width: 768px) {
                  div {
                    --orbit-radius: 220px;
                  }
                }
              `}</style>

              <div className="animate-spin-counter-orbit">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#1e1e1e]/90 border border-white/10 hover:border-[#00FFFF] shadow-lg flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_#00FFFF] glass-card">
                  <div className="relative w-full h-full">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-[#00FFFF] text-xs font-semibold px-2 py-0.5 rounded border border-[#00FFFF]/40 whitespace-nowrap pointer-events-none z-20">
                  {skill.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
