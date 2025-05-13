function DashedLineDiagonal({ size }: { size: number }) {
    return (
        <svg height={size} viewBox="0 0 24 24" fill="none" transform="rotate(-45)" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.931 12.011L2.931 12.011M5.931 12.011L6.931 12.011M9.931 12.011L10.931 12.011M13.931 12.012L14.931 12.012M17.931 12.012L18.931 12.012M21.931 12.013L22.931 12.013"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default DashedLineDiagonal