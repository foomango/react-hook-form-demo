/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import validator from 'validator'
import { Input } from 'antd'

import { onSubmit } from '../../services/submit'
import withFormValidation from '../with-form-validation'
import Checkbox from '../Checkbox'

const InputWithFormValidation = withFormValidation(Input)
const CheckBoxWithFormValidation = withFormValidation(Checkbox)

const ReactHookFormV2 = () => {
  const methods = useForm({
    mode: 'onChange',
  })
  const { handleSubmit, watch, trigger, formState } = methods

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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <InputWithFormValidation
          validationProps={{
            name: 'email',
            rules: {
              required: 'This is required.',
              validate: (value: string) => validator.isEmail(value) || 'Not a valid email.',
            },
          }}
        />
        <label>Password</label>
        <InputWithFormValidation
          type="password"
          validationProps={{
            name: 'password',
            rules: {
              required: 'This is required.',
              validate: (value: string) => watch('confirm') === value || "Passwords don't match.",
            },
          }}
        />
        <label>Confirm</label>
        <InputWithFormValidation
          type="password"
          validationProps={{
            name: 'confirm',
            rules: {
              required: 'This is required.',
              validate: (value: string) => watch('password') === value || "Passwords don't match.",
            },
          }}
        />
        <CheckBoxWithFormValidation
          validationProps={{
            name: 'term',
            rules: { required: 'You must accept the Terms and Conditions..' },
          }}>
          {' '}
          I accept the Terms and Conditions.
        </CheckBoxWithFormValidation>

        <input type="submit" value="Register" />
      </form>
    </FormProvider>
  )
}

export default ReactHookFormV2
