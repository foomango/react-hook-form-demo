import { CheckboxProps as AntdCheckboxProps } from 'antd/es/checkbox'

interface OverrideProps {
  value?: boolean
  onChange?: (value: boolean) => void
}

export type CheckboxProps = Omit<AntdCheckboxProps, 'checked' | 'onChange'> & OverrideProps
