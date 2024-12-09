import React, { ReactNode } from "react"
import { Button } from "@nextui-org/button"

interface IBaseButtonProp {
  icon?: ReactNode,
  title?: string,
  action?: () => {},
  className?: string,
  isDisable?: boolean,
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger", 
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
}

const BaseButton: React.FC<IBaseButtonProp> = ({ title = '', action, isDisable = false, className, variant, color, icon }) => {
  return (
    <div className={className}>
      <Button
        radius='none'
        disabled={isDisable} 
        onClick={action}
        color={color}
        variant={variant}
      >
        {icon}
        {title}
      </Button>
    </div>
  )
}

export default BaseButton