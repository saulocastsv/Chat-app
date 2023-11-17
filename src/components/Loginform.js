import logo from "../img/logo.png";
import "../css/styles.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Chats from '../Routes/Chats'

const firebaseConfig = {
  apiKey: "AIzaSyBEvG3IgdihvsKyjeJmjkHuV-pAckY8JOU",
  authDomain: "auth-teste-d75ca.firebaseapp.com",
  projectId: "auth-teste-d75ca",
  storageBucket: "auth-teste-d75ca.appspot.com",
  messagingSenderId: "210816772163",
  appId: "1:210816772163:web:4d22b5eee77cb740c4ccf6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  

function Loginform() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate(); 



  const login = async (e) => {
    e.preventDefault();
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        console.log(user);
        if (user){
          navigate("/chats");
        }
    } catch (error) {
        console.log(error.message);
    }
};


  return (
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"></span>
            <span className="txt04"><p align="center">
            <strong>❝Se eu vi mais longe, foi por 
              estar sobre ombros de gigantes.❞ </strong> - 
              </p><p align="center">Isaac Newton</p></span>

            <span className="login-form-title">
            <img src={logo} alt="/#"/>
            </span>

            <div className="wrap-input">
              <input
                className={loginEmail !== "" ? "has-val input" : "input"}
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={loginPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}/>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn"
              onClick={(e) => login(e)}
              >Login</button>
              
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Loginform;
