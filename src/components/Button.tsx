import React from "react"

interface ButtonProps {
  type?: string
  text?: string
  cssClass?: string
  disabled?: boolean
  onClick: React.MouseEventHandler<HTMLInputElement>
}

const Button: React.FC<ButtonProps> = props => {
  const { type, text, cssClass, disabled, onClick } = props
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
