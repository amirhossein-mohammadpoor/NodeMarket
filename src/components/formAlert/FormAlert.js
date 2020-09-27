import React from "react"
import "./FormAlert.scss"

const FormAlert = ({ alerts }) => {
  return (
    <ul className="form-alert">
      {
        alerts.map(alert => (
          <li key={alert}>{alert}</li>
        ))
      }
    </ul>
  )
}

export default FormAlert