import React from "react"

import { useFormContext } from "../../formContext"
import { SectionFieldProps } from "../../interfaces"

const SectionField: React.FC<SectionFieldProps> = props => {
  const { field } = props
  const { cssClass, label, pageNumber } = field
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const classes =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const { state } = useFormContext()

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  return (
    <div className={`${classes}`} style={{ display: activePageStyle }}>
      <p>{label}</p>
      <hr />
    </div>
  )
}

export default SectionField
