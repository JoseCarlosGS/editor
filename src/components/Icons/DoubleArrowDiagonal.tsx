function DoubleArrowDiagonal({ size }: { size: number }) {
    return (
        <svg height={size} viewBox="0 0 24 24" fill="none" transform="rotate(-45)" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23 12l-4-4-1 1 2.5 2H12v1.5h8.5L18 15l1 1 4-4zM1 12l4-4 1 1-2.5 2H12v1.5H3.5L6 15l-1 1-4-4z"
                fill="currentColor"
                strokeWidth="0.8"
            />
        </svg>
    )
}

export default DoubleArrowDiagonal