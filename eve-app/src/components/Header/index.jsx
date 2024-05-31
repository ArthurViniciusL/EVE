import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
export const Header = () => {
    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className="box-logo">
                        <EveLogo WIDTH={"100%"} HEIGTH={"100%"} ></EveLogo>
                    </div>
                    <h1>Olá</h1>
                    <div>
                        <span>i</span>
                        <span>i</span>
                        <span>i</span>
                    </div>
                </div>
            </header>
        </>
    )
}