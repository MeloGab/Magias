import React from "react";
import bruxo from "../../Img/ball-amico.png";

import "./Login.css";
import { Link } from 'react-router-dom';


function Login() {

    return(
        <header>
            <div className="main">
                <div className="esquerdo">
                    <h1>Faça Login</h1>
                    <img src={bruxo} className="bruxo" alt="Bruxo" />
                </div>
                <div className="direito">
                    <div className="card">
                        <h1>LOGIN</h1>
                        <div className="txt">
                            <label htmlFor="usuario">Usuário</label>    
                            <input type="text" name="usuario" placeholder="Seu Usuário" />
                        </div>    
                        <div className="txt">
                            <label htmlFor="senha">Senha</label>    
                            <input type="password" name="senha" placeholder="Sua senha" />
                        </div>  
                        <Link to="/lista">
                        <button type="submit" className="btn-login">Login</button>
                        </Link>  
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Login