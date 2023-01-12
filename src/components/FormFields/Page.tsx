import React from "react"

import Button from "../Button"
import { useFormContext, ActionTypes } from "../../formContext"
import { PageFieldProps } from "../../interfaces"

const PageField: React.FC<PageFieldProps> = props => {
  const { field } = props
  const { cssClass, nextButton, previousButton } = field
  const classes =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const { state, dispatch } = useFormContext()
  const { totalPageCount, currentPage } = state

  const isLastPage = currentPage === totalPageCount
  const isFirstPage = currentPage === 1 && currentPage < totalPageCount

  const handleClick = (
    event: React.FormEvent<HTMLInputElement>,
    direction: string
  ): void => {
    event.preventDefault()
    if (direction === "next") {
      return dispatch({
        type: ActionTypes.ChangePageNumber,
        payload: currentPage + 1,
      })
    }
    return dispatch({
      type: ActionTypes.ChangePageNumber,
      payload: currentPage - 1,
    })
  }

  return (
    <>
      {totalPageCount > 1 && (
        <>
          {Boolean(nextButton) && !isLastPage && (
            <Button
              type={nextButton.type}
              text={nextButton.text}
              cssClass={classes}
              onClick={e => handleClick(e, "next")}
              disabled={false}
            />
          )}

          {Boolean(previousButton) && !isFirstPage && (
            <Button
              type={previousButton.type}
              text={previousButton.text}
              cssClass={classes}
              onClick={e => handleClick(e, "previous")}
            />
          )}
        </>
      )}
    </>
  )
}

export default PageField
