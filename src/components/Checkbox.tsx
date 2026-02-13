import CheckIcon from "@/assets/icons/CheckIcon"

const Checkbox = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={`${isActive ? 'border-green-500' : 'border-[#D1D2D9]'}
                    flex items-center justify-center shrink-0
                    border w-[20px] h-[20px] rounded-[4px]`}>

      {
        !isActive ? null :
          <CheckIcon className="w-[15px] h-[15px]" color="oklch(72.3% 0.219 149.579)" />
      }
    </div>
  )
}

export default Checkbox