import {PrimaryButton, SecondaryButton} from "./Button.style"

const Button = ({children, type, onClick}) => {
    if (type === 'primary') {
      return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
    } else {
      return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
    }
}

export default Button