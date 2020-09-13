/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import validator from 'validator'

import { onSubmit } from '../../services/submit'

const ReactHookForm = () => {
  const { register, handleSubmit, errors, watch, trigger, formState } = useForm({
    mode: 'onChange',
  })

  const watchAllFields = watch(['password', 'confirm'])

  useEffect(() => {
    if (formState.dirtyFields.password || formState.dirtyFields.confirm) {
      trigger('confirm')
    }
  }, [watchAllFields.password])
  useEffect(() => {
    if (formState.dirtyFields.password || formState.dirtyFields.confirm) {
      trigger('password')
    }
  }, [watchAllFields.confirm])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        ref={register({
          required: 'This is required.',
          validate: (value) => validator.isEmail(value) || 'Not a valid email.',
        })}
        name="email"
      />
      <ErrorMessage name="email" errors={errors} as="div" className="error-message" />
      <label>Password</label>
      <input
        ref={register({
          required: 'This is required.',
          validate: (value) => watch('confirm') === value || "Passwords don't match.",
        })}
        name="password"
        type="password"
      />
      <ErrorMessage name="password" errors={errors} as="div" className="error-message" />
      <label>Confirm</label>
      <input
        ref={register({
          required: 'This is required.',
          validate: (value) => watch('password') === value || "Passwords don't match.",
        })}
        name="confirm"
        type="password"
      />
      <ErrorMessage name="confirm" errors={errors} as="div" className="error-message" />
      <input
        ref={register({ required: 'You must accept the Terms and Conditions..' })}
        name="term"
        type="checkbox"
      />{' '}
      <span>I accept the Terms and Conditions.</span>
      <ErrorMessage name="term" errors={errors} as="div" className="error-message" />
      <input type="submit" value="Register" />
    </form>
  )
}

export default ReactHookForm
