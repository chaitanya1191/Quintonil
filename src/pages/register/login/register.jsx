import "./login.css"

export default function login() {
  return (
    <div className = "login">
        <form className = "loginForm">
            <label>Email</label>
            <input type = "text" placeholder = "Enter Your Email..."></input>
            <label>Password</label>
            <input type = "password" placeholder ="Enter your password..."></input>
            <button className="login">Login</button>
            <button className="loginRegisterButton">Register</button>
        </form>
      
    </div>
  )
}
