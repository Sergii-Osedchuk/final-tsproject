import { FC, ComponentPropsWithoutRef } from 'react';
import { type LinkProps, Link } from 'react-router-dom';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { to?: never, textOnly: boolean };
type LinkProp = LinkProps & { to: string, textOnly: boolean };

function isLinkProps(props: ButtonProps | LinkProp): props is LinkProp {
  return 'to' in props;
}


const Button: FC<ButtonProps | LinkProp> = ({ ...props }) => {
  let name;
  props.textOnly ?  name = 'button button--text-only': name = 'button';
  if (isLinkProps(props)) {
    return <Link className={name} {...props}/>
  }
  return (
    <button className={name} {...props}></button>
  );
}

export default Button;