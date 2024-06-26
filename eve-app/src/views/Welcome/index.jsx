import './welcome-style.css'
import { Component } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import clouds from '../../assets/imgs/clouds.png';
import { EveLogo } from '../../components/EveLogo';
import { createDefaultFolder } from '../../utils/ApiService';

export class Welcome extends Component {

    render() {
        
        createDefaultFolder();
        
        const msgOnClick = () => {
           window.alert('Ops! Ainda não temos dinheiro para essa parte...');
        };

        const styleJs = {
            "ButtonStyle": {
                "width": "300px", "height": "70px", "fontSize": "22px", "margin": "30px"
            }
        }


        return <>
            <main className='box-welcome-content'>
                <div className='page-content'>
                    <div className='box-logo-welcome'>
                    <EveLogo WIDTH={"100%"} HEIGHT={""} ></EveLogo>

                    </div>

                    <div className='text-box'>
                        <p>  Bem-vindo ao EVE, <strong>seu novo gerenciador de arquivos na nuvem!</strong> </p>

                        <p>  Imagine um lugar onde todos os seus arquivos importantes estão sempre ao seu alcance, organizados de forma intuitiva e seguros contra qualquer imprevisto. Esse lugar existe, e nós o chamamos de eve.</p>

                    </div>

                    <div className='buttons-box'>
                        <Button LABEL={"Criar conta"} OnClick={msgOnClick} STYLE_EVE={"border"} CSS={styleJs.ButtonStyle}></Button>

                        <Link to="home">
                            <Button LABEL={"Entrar"} STYLE_EVE={"fill"} CSS={styleJs.ButtonStyle}></Button>
                        </Link>
                    </div>

                    <footer>
                        <img className='clouds' src={clouds} alt="imagem do footer" />
                    </footer>
                </div>
            </main>

        </>
    }
}