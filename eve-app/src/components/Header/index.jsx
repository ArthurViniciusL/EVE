import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";


export const Header = () => {
    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className="box-logo">
                        <EveLogo WIDTH={"100%"} HEIGTH={"100%"} ></EveLogo>
                    </div>
                    <h1>{"{caminho_do_diretorio}"}</h1>
                    <div>
                        <Button LABEL={"x"} WIDTH={"fit-content"} HEIGHT={"fit-content"} ></Button>
                        <Button LABEL={"+"}  WIDTH={"fit-content"} HEIGHT={"fit-content"} ></Button>
                        <Button LABEL={"-"}  WIDTH={"fit-content"} HEIGHT={""} ></Button>

                    </div>
                </div>
            </header>
        </>
    )
}