import React from "react"
import Parser from "html-react-parser"

import { useFormContext } from "../../formContext"
import { HTMLFieldProps } from "../../interfaces"

const HTMLField: React.FC<HTMLFieldProps> = props => {
  const { field } = props
  const { cssClass, content, label, pageNumber } = field
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const parsedContent = Parser(String(content))
  const { state } = useFormContext()

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  return (
    <div className={`${classes}`} style={{ display: activePageStyle }}>
      <p>{label}</p>
      {parsedContent}
    </div>
  )
}

export default HTMLField
