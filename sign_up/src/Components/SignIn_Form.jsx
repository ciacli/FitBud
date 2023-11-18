import '../Component_Styles/SignIn.css'

export default function FormModel()
{

  return(
      <div class = "sign_in">
        <h1>Sign In</h1>
        <input type = 'text' onChange = {(e) =>setFormData({...FormData, name : e.target.value})} class = 'FormName' placeholder = 'Insert your name here'>

        </input>
        <input type = 'email' onChange={(e) => setFormData({...FormData, email : e.target.value})} class = 'FormEmail' placeholder = 'Insert your email here'>

        </input>

        <input type = 'password'onChange={(e) => setFormData({...FormData, password : e.target.value})} class = 'FormPassword' placeholder='Insert your password here'>

        </input>
        <button>Sign In</button>
        <a href='#'>Forgot Password</a>
      </div>
  )
}