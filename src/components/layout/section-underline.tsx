type SectionUnderlineProps = {
  className?: string;
};

export function SectionUnderline({
  className = "w-[4.5rem] sm:w-20",
}: SectionUnderlineProps) {
  return (
    <svg
      className={`absolute -bottom-0.5 left-0 text-primary ${className}`}
      viewBox="0 0 80 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 6 C20 2, 40 8, 78 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
