import { Component } from "react";
import { Button } from "../../components/Button";


export class Home extends Component {
    render() {
        return <>
            <h1>Eve</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi ad fuga voluptas nam nostrum veritatis ea? Accusantium dicta rerum harum provident sit! Tenetur praesentium eveniet quaerat nam totam harum!</p>
            <Button LABEL={"Entrar"}></Button>
            <Button LABEL={"Criar conta"} BACKGROUND_COLOR={"red"}></Button>
        </>
    }
}