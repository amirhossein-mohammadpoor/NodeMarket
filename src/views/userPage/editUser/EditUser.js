import React, { useState } from "react"
import Input from "../../../components/input/Input"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import "./EditUser.scss"
import { Container } from "reactstrap"
import { useSelector, connect } from "react-redux"
import { editUserProfile } from "../../../redux/actions/userActions"
import { useHistory } from "react-router-dom"

const EditUser = ({ editUserProfile }) => {
  const token = useSelector(state => state.user.token)
  const USER = useSelector(state => state.user.users.filter(
    user => user.email === token
  ))[0]
  const [form, setForm] = useState({
    number: USER.number,
    name: USER.name,
    lastName: USER.lastName 
  })
  const history = useHistory()

  const handleNumber = event => {
    setForm({
      ...form,
      number: event.target.value
    })
  }
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
  const handleSubmit = event => {
    event.preventDefault()
    const user = {
      ...USER,
      name: form.name,
      lastName: form.lastName,
      number: form.number
    }
    
    editUserProfile(user)
    history.push("/user/profile")
  }

  return (
    <Container className="edit-user-form">
      <form onSubmit={handleSubmit}>
        <h4>ویرایش حساب کاربری</h4>
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
        <SubmitButton>اعمال تغییر</SubmitButton>        
      </form>
    </Container>
  )
}

export default connect(null, { editUserProfile })(EditUser)