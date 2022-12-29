import React, { useEffect, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import { useFormContext, ActionTypes } from "../../formContext"
import { CaptchaFieldProps } from "../../interfaces"

const CaptchaField: React.FC<CaptchaFieldProps> = props => {
  const { field, captcha } = props
  const {
    id,
    type,
    cssClass,
    captchaTheme,
    captchaBadgePosition,
    simpleCaptchaSize,
    pageNumber,
  } = field
  const valueId = `${type}${id}Value`
  const classes =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const size =
    captcha.type.toLowerCase() === "invisible"
      ? captcha.type.toLowerCase()
      : simpleCaptchaSize
  const { state, dispatch } = useFormContext()
  const captchaRef = useRef(null)

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  function handleChange(token: string | null): void {
    return dispatch({
      type: ActionTypes.Update,
      payload: { [valueId]: token },
    })
  }

  useEffect(() => {
    if (state.formData?.[valueId] === null) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  return (
    <div className={classes} style={{ display: activePageStyle }}>
      <ReCAPTCHA
        sitekey={captcha.captchaSiteKey}
        theme={captchaTheme}
        badge={captchaBadgePosition}
        ref={captchaRef}
        size={size}
        onChange={handleChange}
      />
    </div>
  )
}

export default CaptchaField
