import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import Header from './../../Components/Header/Header'
import { useForm } from 'react-hook-form'
import "./Cadastro.css"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const validationCadastro = yup.object({
    name: yup.string().required("O Nome da mágia é obrigatório"),
    type: yup.string().required("A descrição da Magia é obrigatorio"),
  }).required();


function Cadastro () {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationCadastro)
      });
    const onSubmit = data => axios.post("https://9488e748.us-south.apigw.appdomain.cloud/api/v1/spells", data)
    .then(() => {
        console.log("Deu certo");
        navigate('/lista');
    })
    .catch(() => {
        console.log("Deu errado")
    })


    return(

        <div>
           < Header />

             <main> 
                <div className="card-post">
                    <h1>Criar Magias</h1>    
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="fields">
                                <label>Nome da magia</label>
                                <input type="text" defaltValue="name"  {...register("name")} />  
                                <p className='error-message'>{errors.name?.message}</p>  
                            </div>
                            <div className="fields">
                                <label>Detalhes dessa magia</label>
                                <textarea type="text" defaltValue="type"  {...register("type")}></textarea>
                                <p className='error-message'>{errors.type?.message}</p>    
                            </div>

                            <div className="btn-post">
                                <button type='submit'>Criar</button>    
                            </div>
                        </form>
                    </div>
                </div>
            </main> 

        </div>

        
    )
}

export default Cadastro