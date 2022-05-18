import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderMain from './../../Components/HeaderMain/HeaderMain'
import './Lista.css'
import { Link } from 'react-router-dom';

function Lista () {

    //    const [ posts , setPosts ] = useState([]);

    
    //    useEffect(() => {
    //        axios.get("https://9488e748.us-south.apigw.appdomain.cloud/api/v1/spells")
    //        .then((response) => {
    //            setPosts(response.data)
    //        })
    //    }, []);


    return(
        <div>
            <HeaderMain/>

            <main>
                <div className="cards">
                      {/* {posts.map((post, key) => { */}
                             {/* return ( */}
                                 {/* <div className="card" key={key} > */}
                                 <div className="card"> 
                                        <header>
                                            {/* <h2> {post.name} </h2> */}
                                            <h2>Nome da Magia</h2>
                                        </header>
                                        <div className="botões">
                                            <div className="btn-editar">
                                                <Link to="/editar">
                                                    <button>Editar</button>                                    
                                                </Link>
                                            </div>
                                            <div className="btn-deletar">
                                                <button>Deletar</button>
                                            </div>
                                            <div className="btn-detalhes">
                                                <Link to="/detalhes">
                                                <button>Detalhes</button>
                                                </Link>
                                            </div>
                                        </div>
                                </div>    
                              {/* )  */}
                        {/* })}  */}
                </div>
            </main>

        </div>

    )
}

export default Lista