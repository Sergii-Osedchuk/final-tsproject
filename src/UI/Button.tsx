import { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import { type LinkProps, Link } from 'react-router-dom';

type BaseProps = {
  textOnly: boolean,
  children: ReactNode
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never};
type LinkProp = LinkProps & BaseProps & { to: string};

function isLinkProps(props: ButtonProps | LinkProp): props is LinkProp {
  return 'to' in props;
}


const Button: FC<ButtonProps | LinkProp> = (props) => {
  let name;
  props.textOnly ?  name = 'button button--text-only': name = 'button';
  if (isLinkProps(props)) {
    return <Link className={name} {...props}> {props.children} </Link>
  }
  return (
    <button className={name} {...props}>{props.children}</button>
  );
}

export default Button;