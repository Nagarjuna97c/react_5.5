import './index.css'

const Login = props => {
  const {isLoggedIn} = props
  console.log('Login Component')
  return (
    <button className="button" type="button" onClick={isLoggedIn}>
      Login
    </button>
  )
}

export default Login
