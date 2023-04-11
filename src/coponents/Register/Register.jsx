import "./register.css"

export default function Register() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
            <h3 className="loginLogo">LamaSocial</h3>
            <span className="loginDesc">Connect with friends and the world around you on Lamasocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
