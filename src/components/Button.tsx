import React from "react"

interface ButtonProps {
  type?: string
  text?: string
  cssClass?: string
  disabledClass?: string
  disabled?: boolean
  onClick: React.MouseEventHandler<HTMLInputElement>
}

const Button: React.FC<ButtonProps> = props => {
  const { type, text, cssClass, disabledClass, disabled, onClick } = props
  const buttonText = text === undefined ? "Submit" : text
  const buttonType = type === "TEXT" ? "submit" : "image"
  const classes = `${cssClass === undefined ? "" : cssClass}`.trim()
  const disabledClasses = `${
    disabled !== undefined && disabled ? `${String(disabledClass)}` : ""
  }`

  return (
    <div className={`${classes} ${disabledClasses}`}>
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
