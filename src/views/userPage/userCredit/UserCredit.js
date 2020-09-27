import React, { useState, useEffect } from "react"
import "./UserCredit.scss"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import { useSelector } from "react-redux"
import { editUserProfile } from "../../../redux/actions/userActions"
import { connect } from "react-redux"
import credits from "../../../constants/credits"

const UserCredit = ({ editUserProfile }) => {
  const [showInput, setShowInput] = useState(false)
  const [value, setValue] = useState("")
  const [credit, setCredit] = useState(0)

  const token = useSelector(state => state.user.token)
  const USER = useSelector(state => state.user.users.filter(
    user => user.email === token
  ))[0]
    
  useEffect(() => {
    setCredit(USER.credit)
  }, [USER])

  const handleShowInput = () => {
    setShowInput(!showInput)
  }
  const handleAddCredit = value => {
    value = Number(value)    
    const user = {
      ...USER,
      credit: USER.credit + value
    }
    editUserProfile(user)
    setValue("")
  }

  return (
    <div className="user-credit">
      <h4>افزایش اعتبار</h4>
      <h5>موجودی فعلی: <span>{credit} تومان</span></h5>
      <div>
        <ul className="d-none d-md-flex justify-content-md-between">
          {
            credits.map(credit => (
              <li 
                key={credit.title}
                onClick={() => handleAddCredit(credit.value)}
              >
                <SubmitButton>{credit.title}</SubmitButton>
              </li>
            ))
          }
          <li>
            <SubmitButton onClick={handleShowInput}>مبلغ دلخواه</SubmitButton>
          </li>
        </ul>
        <ul className="d-flex flex-column align-items-center d-md-none">
          {
            credits.map(credit => (
              <li 
                key={credit.title}
                className="mb-4" 
                onClick={() => handleAddCredit(credit.value)}
              >
                <SubmitButton>{credit.title}</SubmitButton>
              </li>
            ))
          }
          <li className="mb-4">
            <SubmitButton onClick={handleShowInput}>مبلغ دلخواه</SubmitButton>
          </li>
        </ul>
      </div>
      {
        showInput &&
        <React.Fragment>
          <div className="custom-credit-input">
            <input
              onChange={e => setValue(e.target.value)}
              value={value}
              placeholder="مبلغ افزایش اعتبار را به تومان کنید"
            />
            <span>تومان</span>
          </div>
          <div className="add-credit-button">
            <SubmitButton onClick={() => handleAddCredit(value)}>افزایش اعتبار</SubmitButton>
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default connect(null, { editUserProfile })(UserCredit)