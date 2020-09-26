import React from 'react'

import { onSubmit } from '../../services/submit'

const BasicReactForm = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirm: '',
    term: false,
  })

  const handleSubmit: React.FormEventHandler = (event) => {
    onSubmit(state)
    event.preventDefault()
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value
    setState({
      ...state,
      [name]: value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input value={state.email} onChange={handleInputChange} name="email" />
      <label>Password</label>
      <input value={state.password} onChange={handleInputChange} name="password" type="password" />
      <label>Confirm</label>
      <input value={state.confirm} onChange={handleInputChange} name="confirm" type="password" />
      <input checked={state.term} onChange={handleInputChange} name="term" type="checkbox" />{' '}
      <span>I accept the Terms and Conditions.</span>
      <input type="submit" value="Register" />
    </form>
  )
}

export default BasicReactForm
