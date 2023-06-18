import React, { useState, useEffect } from "react"

import { useFormContext, ActionTypes } from "../../formContext"
import { FileUploadFieldProps } from "../../interfaces"

const FileUploadField: React.FC<FileUploadFieldProps> = props => {
  const { field } = props
  const {
    databaseId,
    type,
    label,
    cssClass,
    isRequired,
    pageNumber,
    maxFiles,
    maxFileSize,
    allowedExtensions,
    canAcceptMultipleFiles,
  } = field
  const valueId = `${type}${databaseId}Value`
  const htmlId = `field_${databaseId}`
  const otherClasses =
    cssClass === undefined || cssClass === null ? "" : `${cssClass}`
  const page = pageNumber === undefined || pageNumber === null ? 1 : pageNumber
  const multipleFiles =
    canAcceptMultipleFiles === undefined || canAcceptMultipleFiles === null
      ? false
      : canAcceptMultipleFiles
  const classes = `${otherClasses}`
  const { state, dispatch } = useFormContext()
  const [maxFilesError, setMaxFilesError] = useState("")

  const isCurrentPage = state.currentPage === page
  const activePageStyle = isCurrentPage ? "block" : "none"

  const errorMessage = state.errors.find(error => {
    return error.name.toString() === valueId
  })

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    if (event.currentTarget.files == null) return
    if (multipleFiles) {
      let currentUploads: File[] = []
      if (state.formData?.[valueId]?.length > 0) {
        if (state.formData?.[valueId]?.length === maxFiles) {
          return setMaxFilesError("File Limit Reached")
        }
        currentUploads = [...state.formData?.[valueId]]
      }
      const uploadedFiles = Array.prototype.slice.call(
        event.currentTarget.files
      )
      uploadedFiles.forEach(file => {
        return currentUploads.push(file)
      })
      return dispatch({
        type: ActionTypes.Update,
        payload: {
          [valueId]: [...currentUploads],
        },
      })
    }
    const uploadedFile = event.currentTarget.files[0]
    return dispatch({
      type: ActionTypes.Update,
      payload: {
        [valueId]: uploadedFile,
      },
    })
  }

  useEffect(() => {
    if (!(isRequired ?? false)) return undefined
    if (state.formData?.[valueId]?.length === 0) {
      return dispatch({ type: ActionTypes.AddRequiredField, payload: valueId })
    }
    dispatch({ type: ActionTypes.RemoveRequiredField, payload: valueId })
  }, [state.formData?.[valueId]])

  return (
    <div className={classes} style={{ display: activePageStyle }}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="file"
        name={htmlId}
        id={htmlId}
        required={isRequired}
        multiple={multipleFiles}
        defaultValue={state.formData?.[valueId]}
        onChange={handleChange}
      />
      {Boolean(maxFileSize) && <p>Max File Size{maxFileSize}</p>}
      {Boolean(maxFiles) && <p>Max Files: {maxFiles}</p>}
      {Boolean(allowedExtensions) && (
        <p>Allowed Extensions: {allowedExtensions}</p>
      )}

      {multipleFiles ? (
        <>
          {state.formData?.[valueId]?.map((file: File) => {
            return (
              <>
                <p>{file.name}</p>
                <p>{file.type}</p>
              </>
            )
          })}
        </>
      ) : (
        <>
          <p>{JSON.stringify(state.formData?.[valueId]?.name, null, 2)}</p>
          <p>{JSON.stringify(state.formData?.[valueId]?.type, null, 2)}</p>
        </>
      )}
      <p>{maxFilesError}</p>
      <p className="error-message">{errorMessage?.message}</p>
    </div>
  )
}

export default FileUploadField
