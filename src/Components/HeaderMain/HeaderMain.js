import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css'

function HeaderMain() {
    return(
        <header>
            <div className="conteudo">
                <div className="logo">
                    <h1>Magias</h1>
                </div>

                <div className="btn-create">
                    <Link to="/cadastro">
                        <button>Cadastre nova Magia</button>
                    </Link>
                </div>
            </div> 
        </header>
    )
}

export default HeaderMain