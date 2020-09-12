import React from 'react'

import { onSubmit } from '../../services/submit'

const handleSubmit: React.FormEventHandler = (event) => {
  onSubmit({})
  event.preventDefault()
}

const HtmlForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input name="email" />
      <label>Password</label>
      <input name="password" type="password" />
      <label>Confirm</label>
      <input name="confirm" type="password" />
      <input name="term" type="checkbox" /> <span>I accept the Terms and Conditions.</span>
      <input type="submit" value="Register" />
    </form>
  )
}

export default HtmlForm
