import './index.css'

const Logout = props => {
  const {isLoggedIn} = props
  return (
    <button className="button" type="button" onClick={isLoggedIn}>
      Logout
    </button>
  )
}

export default Logout
