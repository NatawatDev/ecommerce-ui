import React from "react"
import { Button } from "@nextui-org/button"
import { IBaseButtonProp } from '@/types/index' 

const BaseButton: React.FC<IBaseButtonProp> = ({ title = '', action, disabled = false, className, variant, color, icon }) => {
  return (
    <>
      <Button
        radius='none'
        className={className}
        isDisabled={disabled} 
        onPress={action}
        color={color}
        variant={variant}
      >
        {icon}
        {title}
      </Button>
    </>
  )
}

export default BaseButton