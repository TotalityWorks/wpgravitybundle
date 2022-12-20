import React from "react"

import { useFormContext } from "../formContext"

interface ButtonProps {
  type?: string
  text?: string
  cssClass?: string
  onClick: React.MouseEventHandler<HTMLInputElement>
}

const Button: React.FC<ButtonProps> = props => {
  const { type, text, cssClass, onClick } = props
  const { state } = useFormContext()
  const disabled = state.errors.length > 0 || state.requiredFields.length > 0
  const buttonText = text === undefined ? "Submit" : text
  const buttonType = type === "TEXT" ? "submit" : "image"
  const classes = `${cssClass === undefined ? "" : cssClass}`.trim()

  return (
    <div className={`${classes}`}>
      <input
        type={buttonType}
        onClick={onClick}
        disabled={disabled}
        value={buttonText}
      />
    </div>
  )
}

export default Button
