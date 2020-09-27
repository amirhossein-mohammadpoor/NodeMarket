import React, { useState } from "react"
import Input from "../../../components/input/Input"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import "./SignUpPage.scss"
import FormAlert from "../../../components/formAlert/FormAlert"
import { Container } from "reactstrap"
import validator from "validator"
import { connect } from "react-redux"
import { signUpUser } from "../../../redux/actions/userActions"
import { createCart } from "../../../redux/actions/cartActions"
import { useHistory } from "react-router-dom"

const SignUpPage = ({ signUpUser, createCart }) => {
  const history = useHistory()
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
    repeatPassword: ""
  })
  const [formAlert, setFormAlert] = useState(null)

  const handleName = event => {
    setForm({
      ...form,
      name: event.target.value
    })
  }
  const handleLastName = event => {
    setForm({
      ...form,
      lastName: event.target.value
    })
  }
  const handleNumber = event => {
    setForm({
      ...form,
      number: event.target.value
    })
  }
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
  const handleRepeatPassword = event => {
    setForm({
      ...form,
      repeatPassword: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()

    const errors = []

    if (!validator.isEmail(form.email)) {
      errors.push("ایمیل معتبر نیست")
    }

    if (!validator.isNumeric(form.number)) {
      errors.push("شماره همراه معتبر نیست")
    }

    if (!validator.isLength(form.password, { min: 4 })) {
      errors.push("طول گذر واژه باید حداقل 4 کاراکتر باشد")
    }

    if (form.password !== form.repeatPassword) {
      errors.push("گذر واژه ها همخوانی ندارد")
    }

    if (errors.length !== 0) {
      setFormAlert(<FormAlert alerts={errors} />)
    } else {
      setFormAlert(null)

      const user = {
        name: form.name.trim(),
        lastName: form.lastName.trim(),
        number: form.number.trim(),
        email: validator.normalizeEmail(form.email),
        password: form.password.trim(),
        credit: 0,
        position: [],
        favorites: [],
        orders: []
      }

      const cart = {
        email: validator.normalizeEmail(form.email),
        products: []
      }

      createCart(cart)
      signUpUser(user)

      history.push("/user/profile")

      setForm({
        name: "",
        lastName: "",
        number: "",
        email: "",
        password: "",
        repeatPassword: ""
      })
    }
  }

  return (
    <Container className="signup-form">
      <form onSubmit={handleSubmit}>
        <h4>ثبت نام</h4>
        <Input
          placeholder="نام"
          onChange={handleName}
          value={form.name}
          textLeft={false}
        />
        <Input
          placeholder="نام خانوادگی"
          onChange={handleLastName}
          value={form.lastName}
          textLeft={false}
        />
        <Input
          placeholder="شماره همراه"
          onChange={handleNumber}
          value={form.number}
          textLeft={true}
        />
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
        <Input
          placeholder="تکرار گذر واژه"
          onChange={handleRepeatPassword}
          value={form.repeatPassword}
          textLeft={true}
        />
        {
          formAlert
        }
        <SubmitButton>ثبت نام</SubmitButton>
      </form>
    </Container>
  )
}

export default connect(null, { signUpUser, createCart })(SignUpPage)