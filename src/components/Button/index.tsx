import { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import classnames from 'classnames';
import { IconBaseProps } from "react-icons/lib"

import styles from './styles.module.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes {
  icon?: React.ComponentType<IconBaseProps>;
  isUnfilled?: boolean;
}

export function Button({children, icon: Icon, isUnfilled,...rest}: ButtonProps) {

  return (
    <button 
      {...rest} 
      className={classnames(styles.button, isUnfilled && (styles.unfilled))}
    >
      {Icon && <Icon size={20} />}

      {children}
    </button>
  )
}
