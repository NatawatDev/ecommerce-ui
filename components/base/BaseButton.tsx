import React, { ReactNode } from "react"
import { Button } from "@nextui-org/button"

interface IBaseButtonProp {
  icon?: ReactNode,
  title?: string,
  action?: () => void,
  className?: string,
  disabled?: boolean,
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger", 
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
}

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