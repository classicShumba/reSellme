import Button from "../components/Button"
import '../styles/_signup.scss'

const SignUp = ({data}) => {
  return (
    <div className="sign-up">
        <img src={data.bg} alt="resellme waves" />
        <div className="signup-text">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <Button clname={'signup-btn'} title={data.button}/>
        </div>
    </div>
  )
}

export default SignUp