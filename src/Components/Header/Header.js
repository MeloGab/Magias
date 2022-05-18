import React from 'react';
import { Link } from 'react-router-dom';

import '../HeaderMain/HeaderMain.css'

function Header() {
    return(
        <header>
            <div className="conteudo">

                    <Link to="/lista">
                        <h3>Voltar</h3>
                    </Link>
            </div> 
        </header>
    )
}

export default Header