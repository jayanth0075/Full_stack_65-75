import { useHistory } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import c from "../pages/Login.module.css";

/* functionality for login page*/
function Loginpage(){

  const history = useHistory();

  function LoginHandler(user, email, password){
    fetch(`http://localhost:9001/user/login/${email}?password=`+password , {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    }).then(
        response => response.json()
    ).then( function(data) {
      if (data === -1) {
        alert("Login unsuccessful, email or password incorrect.");
      }
      else {
        localStorage.setItem('userId', data)
        localStorage.setItem('userEmail', email)
        history.replace(`/workspaces/${data}`);
      }
    })
  }

  return (

      <div className={c.forms}>
        <div style={{marginBottom: '6px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase'}}>Welcome to TaskFlow</div>
        <h1 className={c.loginColor}> Sign In </h1>
        <p style={{color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '24px'}}>Manage your projects efficiently</p>
        <LoginForm LoginHand={LoginHandler}/>

        <section className={c.forgetIt}> <a href="/forgotpassword"><p> Forgot Password? </p></a></section>
      </div>
  );
}

export default Loginpage;

