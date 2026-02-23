import { useHistory } from "react-router-dom";
import Registerform from "../components/forms/RegisterForm";
import e from "./Register.module.css";

/* functionality for registration page */
function Registration(){

  const history = useHistory();

  function userHandler(user){
    fetch('http://localhost:9001/user/register' , {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'}
    }).then(
      response => response.json()
    )
    .then( function(data) {
      // console.log(data);
      if (data === true) {
        history.replace('/login');
        alert("User registered successfully.")
      } else {
        alert("User with that email is already registered.")
      }
      return;
    })
  }

  return (
  <section className={e.forms}>
    <div style={{marginBottom: '6px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase'}}>Join TaskFlow</div>
    <h1 className={e.registerColor}> Create Account</h1>
    <p style={{color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '24px'}}>Start managing your projects today</p>
      <Registerform userHand={userHandler}/>
  </section>
  );
}
export default Registration;

