import './welcome-style.css'
import { Component } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { ReactComponent as EveLogo } from "../../assets/imgs/evelogo.svg";
import { ReactComponent as Clouds } from "../../assets/imgs/clouds.svg";

export class Welcome extends Component {

    render() {
        return <>
            <main >
                <div className='page-content'>
                    <EveLogo className="EveLogo"></EveLogo>

                    <div className='text-box'>
                        <p>  Bem-vindo ao EVE, <strong>seu novo gerenciador de arquivos na nuvem!</strong> </p>

                        <p>  Imagine um lugar onde todos os seus arquivos importantes estão sempre ao seu alcance, organizados de forma intuitiva e seguros contra qualquer imprevisto. Esse lugar existe, e nós o chamamos de eve.</p>

                    </div>

                    <div className='buttons-box'>
                        <Button LABEL={"Criar conta"} STYLE={"border"}></Button>

                        <Link to="home">
                            <Button LABEL={"Entrar"} STYLE={"fill"}></Button>
                        </Link>
                    </div>
                </div>
            </main>

        </>
    }
}