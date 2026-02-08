export default function ArrowIcon({ className, color = "black" }: { className?: string, color?: string }) {
    return (
        <svg className={className + " shrink-0"} width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.4243 4.84264C40.6586 4.60833 40.6586 4.22843 40.4243 3.99412L36.6059 0.175736C36.3716 -0.0585786 35.9917 -0.0585786 35.7574 0.175736C35.523 0.410051 35.523 0.78995 35.7574 1.02427L39.1515 4.41838L35.7574 7.81249C35.523 8.04681 35.523 8.42671 35.7574 8.66102C35.9917 8.89534 36.3716 8.89534 36.6059 8.66102L40.4243 4.84264ZM0 5.01838H40V3.81838H0V5.01838Z" fill={color} />
        </svg>
    )
}