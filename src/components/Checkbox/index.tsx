import React from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox'

import { CheckboxProps } from './interfaces'

const Checkbox: React.FC<CheckboxProps> = React.forwardRef((props, ref) => {
  const { value, onChange, ...restProps } = props

  const handleChange = (e: CheckboxChangeEvent) => {
    if (onChange) onChange(e.target.checked)
  }

  return <AntdCheckbox ref={ref as any} checked={value} onChange={handleChange} {...restProps} />
})

export default Checkbox
