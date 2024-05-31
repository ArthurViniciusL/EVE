import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";
import { BootstrapIcon } from '../../utils/Main';
import { Link } from 'react-router-dom';
import { DirectoryBar } from '../DirectoryBar';

export const Header = () => {

    const styleJs = {
        "ButtonStyle": {
            "width": "60px",
            "height": "fit-content",
            "fontSize": "medium",
            "borderRadius": "15px"
        }
    };
    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className="box-logo">
                        <Link to={"home"}>
                            <EveLogo WIDTH={"100%"} HEIGTH={"100%"} ></EveLogo>
                        </Link>
                    </div>

                    <DirectoryBar></DirectoryBar>

                    <div className='Header-box-button'>
                        <Button LABEL={
                            <BootstrapIcon
                                iconName="FolderFill"
                                color="var(--solidBlueEve)"
                                size={20}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle}></Button>

                        <Button LABEL={
                            <BootstrapIcon
                                iconName="FileEarmarkArrowDownFill"
                                color="var(--solidBlueEve)"
                                size={20}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle}></Button>

                        <Link to={"/"}>
                            <Button LABEL={
                                <BootstrapIcon
                                    iconName="BoxArrowRight"
                                    color="var(--solidRedEve)"
                                    size={20}
                                    className="align-top"
                                />
                            } CSS={styleJs.ButtonStyle}></Button>
                        </Link>
                    </div>
                </div>
            </header >
        </>
    )
}