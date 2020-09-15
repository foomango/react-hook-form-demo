import React, { useRef } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import _ from 'lodash'

import { WrappedComponentProps, WithFormValidationProps } from './interfaces'

import './style/index.scss'

const prefixCls = 'with-form-validation'

const getDisplayName = (WrappedComponent: React.ComponentType) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component'

const withFormValidation = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) => {
  const WithFormValidation: React.FC<P & WithFormValidationProps> = ({ validationProps, className, ...restProps }) => {
    const { control, errors } = useFormContext()
    const ref = useRef<HTMLElement>(null)

    const { name, onFocus } = validationProps
    const handleFocus = () => {
      let skip = false
      if (onFocus) {
        skip = onFocus()
      }

      if (!skip && ref && ref.current) {
        if (ref.current.focus) {
          ref.current.focus()
        }
      }
    }
    const element = (
      <Controller
        control={control}
        render={(renderProps) => {
          return (
            <WrappedComponent
              {...({
                ref,
                ...restProps,
                ...renderProps,
                className: classNames({ 'mstr-rc-invalid': errors[validationProps.name] }, className),
              } as P)}
            />
          )
        }}
        {...validationProps}
        onFocus={handleFocus}
      />
    )
    return (
      <>
        {element}
        <div className={classNames(`${prefixCls}-message`)} title={_.get(errors, `${name}.message`)}>
          <ErrorMessage errors={errors} name={name} as="span" />
        </div>
      </>
    )
  }

  WithFormValidation.displayName = `WithFormValidation(${getDisplayName(WrappedComponent as React.ComponentType)})`

  return WithFormValidation
}

export default withFormValidation
