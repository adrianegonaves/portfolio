/** Ilustração decorativa da secção contacto — line-art com cores do tema */
export default function ContactIllustration() {
  const ink = "currentColor";
  const sw = 2.25;

  return (
    <div className="flex items-center justify-start" aria-hidden>
      <svg
        viewBox="0 0 800 500"
        className="h-auto w-full max-w-[280px] text-foreground sm:max-w-sm md:max-w-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="400" cy="455" rx="320" ry="28" fill="var(--primary)" opacity="0.1" />

        <path
          d="M95 420 L95 340 Q95 300 120 280 Q145 260 130 230 Q115 200 95 210"
          stroke={ink}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <path
          d="M95 340 Q70 320 55 290 M95 360 Q120 330 140 310 M95 390 Q65 380 50 360"
          stroke={ink}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <rect x="82" y="418" width="26" height="32" rx="4" fill="var(--card)" stroke={ink} strokeWidth={sw} />

        <path
          d="M180 420 L620 420 L640 440 L160 440 Z"
          fill="var(--card)"
          stroke={ink}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path d="M200 440 L200 470 M600 440 L600 470" stroke={ink} strokeWidth={sw} strokeLinecap="round" />

        <rect x="320" y="260" width="200" height="130" rx="10" fill="var(--background)" stroke={ink} strokeWidth={sw} />
        <path d="M420 390 L420 410 M380 410 L460 410" stroke={ink} strokeWidth={sw} strokeLinecap="round" />
  
        <path
          d="M350 360 H490 M350 378 H430"
          stroke="var(--muted-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        <circle cx="250" cy="218" r="36" fill="#f5d0b5" stroke={ink} strokeWidth={sw} />
        <path
          d="M230 200 Q250 175 275 198 Q268 188 250 192 Q232 188 230 200"
          fill={ink}
          opacity="0.85"
        />
        <path
          d="M214 320 Q250 290 286 320 L270 420 L230 420 Z"
          fill="var(--primary)"
          fillOpacity="0.35"
          stroke={ink}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path
          d="M214 320 Q190 340 185 380 M286 320 Q310 340 315 375"
          stroke={ink}
          strokeWidth={sw}
          strokeLinecap="round"
        />

        <g transform="translate(640 200)">
          <path
            d="M40 0 C58 0 72 16 72 36 C72 58 40 95 40 95 C40 95 8 58 8 36 C8 16 22 0 40 0 Z"
            fill="var(--primary)"
            fillOpacity="0.2"
            stroke="var(--primary)"
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <circle cx="40" cy="34" r="14" fill="var(--background)" stroke="var(--primary)" strokeWidth={sw} />
        </g>

        <path
          d="M710 420 L710 330 Q710 290 690 270 Q670 250 685 220"
          stroke={ink}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <path
          d="M710 350 Q735 330 750 300 M710 380 Q680 370 665 350"
          stroke={ink}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <rect x="697" y="418" width="26" height="32" rx="4" fill="var(--card)" stroke={ink} strokeWidth={sw} />
      </svg>
    </div>
  );
}
