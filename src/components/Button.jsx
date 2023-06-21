import '../styles/_button.scss'
const Button = ({title, clname}) => {
  return (
    <a className={'btn ' + clname}>{title}</a>
  )
}

export default Button