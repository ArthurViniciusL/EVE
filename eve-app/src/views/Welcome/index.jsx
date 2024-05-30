import './welcome-style.css'
import { Component } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { ReactComponent as EveLogo } from "../../assets/imgs/evelogo.svg"

export class Welcome extends Component {
    render() {
        return <>
            <main >
                <div className='page-content'>
                    <EveLogo className="EveLogo"></EveLogo>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus ipsa, veniam sint, maxime quis, nostrum aperiam quo accusantium eos at quas deserunt rerum ipsum porro. Amet assumenda corporis eius! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi ad fuga voluptas nam nostrum veritatis ea? Accusantium dicta rerum harum provident sit! Tenetur praesentium eveniet quaerat nam totam harum!</p>

                    <div className='buttons-box'>
                        < Button FILL={"#fff"} BORDE={"solid var(--solidBlueEve)"} TEXT_COLOR={'var(--solidBlueEve)'} LABEL={"Criar conta"}></Button>

                        <Link to="home">
                            <Button FILL={"var(--solidBlueEve)"} TEXT_COLOR={"#fff"} LABEL={"Entrar "}></Button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    }
}