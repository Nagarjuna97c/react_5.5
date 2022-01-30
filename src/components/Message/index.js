import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  let heading
  if (!isLoggedIn) {
    heading = <h1 className="heading">Please Login</h1>
  } else {
    heading = <h1 className="heading">Welcome User</h1>
  }
  return heading
}

export default Message
