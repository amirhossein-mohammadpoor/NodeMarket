import React, { useState } from "react"
import Input from "../../../components/input/Input"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import "./SignInPage.scss"
import { NavLink, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import { userSignIn } from "../../../redux/actions/userActions"
import FormAlert from "../../../components/formAlert/FormAlert"

const SignInPage = ({ userSignIn }) => {
  const history = useHistory()
  const token = useSelector(state => state.user.token)
  const [formAlert, setFormAlert] = useState(null)

  if (token) {
    history.push("/user/profile")
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleEmail = event => {
    setForm({
      ...form,
      email: event.target.value
    })
  }
  const handlePassword = event => {
    setForm({
      ...form,
      password: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()

    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.filter(user => (
      user.email === form.email && user.password === form.password)
    )[0]      
    
    const errors = []
    
    if (user) {
      userSignIn(user.email)
      history.push("/")
    } else {
      errors.push("ایمیل یا رمز عبور صحیح نمی باشد")
    }

    if (errors.length !== 0) {
      setFormAlert(<FormAlert alerts={errors} />)
    } else {
      setFormAlert(null)
    }      
    
  }

  return (
    <Container className="signin-form">
      <form onSubmit={handleSubmit}>
        <h4>ورود به حساب کاربری</h4>
        <Input
          placeholder="ایمیل"
          onChange={handleEmail}
          value={form.email}
          textLeft={true}
        />
        <Input
          placeholder="گذر واژه"
          onChange={handlePassword}
          value={form.password}
          textLeft={true}
        />
        {
          formAlert
        }
        <SubmitButton>ورود به حساب کاربری</SubmitButton>
        <div className="signin-form-footer">
          <NavLink to="/account/reset_password">
            رمز عبور را فراموش کرده ام!
          </NavLink>
          <NavLink to="/account/signup">
            ایجاد حساب کاربری
          </NavLink>
        </div>
      </form>
    </Container>
  )
}

export default connect(null, { userSignIn })(SignInPage)