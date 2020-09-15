import { ValidationValueMessage, ValidationRule, Validate } from 'react-hook-form'

export type WrappedComponentProps = {
  className?: string
  value?: any
  children?: any
  ref?: any
}

export interface ValidationProps {
  name: string
  defaultValue?: unknown
  rules?:
    | Partial<{
        required: string | boolean | ValidationValueMessage<boolean>
        min: ValidationRule<React.ReactText>
        max: ValidationRule<React.ReactText>
        maxLength: ValidationRule<React.ReactText>
        minLength: ValidationRule<React.ReactText>
        pattern: ValidationRule<RegExp>
        validate: Validate | Record<string, Validate>
      }>
    | undefined
  onFocus?: (() => boolean) | undefined
}

export interface WithFormValidationProps {
  validationProps: ValidationProps
}
