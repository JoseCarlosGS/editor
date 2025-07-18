function CropIcon({ size }: { size: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17 15h3V7c0-1.1-.9-2-2-2h-8v3h7v7z" />
            <path fill="currentColor" d="M7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" />
        </svg>
    )
}

export default CropIcon;