import React, { useState } from "react"
import Input from "../../../components/input/Input"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import "./UpdatePasswordPage.scss"
import { Container } from "reactstrap"
import { connect, useSelector } from "react-redux"
import { editUserProfile } from "../../../redux/actions/userActions"
import { useHistory } from "react-router-dom"

const UpdatePasswordPage = ({ editUserProfile }) => {
  const [password, setPassword] = useState("")
  const history = useHistory()
  const token = useSelector(state => state.user.token)
  const USER = useSelector(state => state.user.users.filter(
    user => user.email === token
  ))[0]

  const handleSubmit = event => {
    event.preventDefault()
    const user = {
      ...USER,
      password
    }
    editUserProfile(user)
    history.push("/")
  }

  return (
    <Container className="reset-password-form">
      <form onSubmit={handleSubmit}>
        <h4>تغییر رمز عبور</h4>
        <Input 
          placeholder="رمز عبور"
          onChange={event => setPassword(event.target.value)}
          value={password}
          textLeft={true}
          />
        <SubmitButton>تغییر رمز عبور</SubmitButton>
      </form>
    </Container>
  )
}

export default connect(null, { editUserProfile })(UpdatePasswordPage)