const CheckIcon = ({ className, color = "#363636" }: { className?: string, color?: string }) => {
  return (
    <svg className={className} width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.571533 2.99995L2.85725 5.28566L7.42868 0.714233" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default CheckIcon