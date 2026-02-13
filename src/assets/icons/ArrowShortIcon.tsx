export default function ArrowShortIcon({ className, color = "black" }: { className?: string, color?: string }) {
    return (
        <svg className={className + " shrink-0"} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0746 7.0153H0.942017M0.942017 7.0153L7.74649 13.8209M0.942017 7.0153L7.48468 0.470947" stroke={color} strokeWidth="1.33238" />
        </svg>
    )
}