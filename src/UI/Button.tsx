import { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import { type LinkProps, Link } from 'react-router-dom';

type BaseProps = {
  textOnly?: boolean,
  children: ReactNode
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never};
type LinkProp = LinkProps & BaseProps & { to: string};

function isLinkProps(props: ButtonProps | LinkProp): props is LinkProp {
  return 'to' in props;
}


const Button: FC<ButtonProps | LinkProp> = (props) => {
  if (isLinkProps(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
        {children}
      </Link>
    );
  }
  const { children, textOnly, ...otherProps } = props;
  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;