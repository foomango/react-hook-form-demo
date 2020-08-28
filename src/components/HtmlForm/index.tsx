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
      <label></label>
      <input type="checkbox" /> <span>I accept the Terms and Conditions.</span>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default HtmlForm