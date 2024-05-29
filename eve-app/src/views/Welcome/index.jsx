import { Component } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export class Welcome extends Component {
    render() {
        return <>
            <h1>Eve</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi ad fuga voluptas nam nostrum veritatis ea? Accusantium dicta rerum harum provident sit! Tenetur praesentium eveniet quaerat nam totam harum!</p>

            <Button EXTERNAL_LINK={"https://arthurviniciusl.github.io/arthur-vs-lucena/"} LABEL={"Criar conta"}></Button>

            <Link to="home">
                <Button LABEL={"Entrar"}></Button>
            </Link>
        </>
    }
}