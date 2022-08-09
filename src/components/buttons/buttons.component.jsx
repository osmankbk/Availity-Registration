import './buttons.scss';
const BUTTON_TYPES_CLASSES = {
  cancle: 'cancle',
}

const Buttons = ({children, buttonType, ...otherProps}) => {

  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Buttons;