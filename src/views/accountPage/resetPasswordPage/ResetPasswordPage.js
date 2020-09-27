import React, { useState } from "react"
import Input from "../../../components/input/Input"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import "./ResetPasswordPage.scss"
import { Container } from "reactstrap"
import { useHistory } from "react-router-dom"

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("")
  const history = useHistory()

  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()

    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.filter(user => (
      user.email === email)
    )[0]
    
    if (user) {
      history.push("/account/update_password")
    }
  }

  return (
    <Container className="reset-password-form">
      <form onSubmit={handleSubmit}>
        <h4>تغییر رمز عبور</h4>
        <Input 
          placeholder="ایمیل"
          onChange={handleEmail}
          value={email}
          textLeft={true}
          />
        <SubmitButton>ارسال ایمیل</SubmitButton>
      </form>
    </Container>
  )
}

export default ResetPasswordPage