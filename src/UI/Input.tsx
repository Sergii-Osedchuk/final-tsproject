import { ComponentPropsWithoutRef, FC } from 'react';

type InputPropsType = ComponentPropsWithoutRef<'input'> & {label: string, id: string};

const Input: FC<InputPropsType> = ({ label, id, ...props }) => {
  return (
    <div className='control'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  )
}

export default Input;