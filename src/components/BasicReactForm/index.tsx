import React from 'react'

import { onSubmit } from '../../services/submit'

const BasicReactForm = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
    confirm: '',
    term: false,
  })

  const handleSubmit: React.FormEventHandler = (event) => {
    onSubmit(formState)
    event.preventDefault()
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name
    const value = name === 'term' ? event.currentTarget.checked : event.currentTarget.value
    setFormState({
      ...formState,
      [name]: value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input value={formState.email} onChange={handleInputChange} name="email" />
      <label></label>
      <label>Password</label>
      <input value={formState.password} onChange={handleInputChange} name="password" type="password" />
      <label>Confirm</label>
      <input value={formState.confirm} onChange={handleInputChange} name="confirm" type="password" />
      <input checked={formState.term} onChange={handleInputChange} name="term" type="checkbox" />{' '}
      <span>I accept the Terms and Conditions.</span>
      <input type="submit" value="Register" />
    </form>
  )
}

export default BasicReactForm
