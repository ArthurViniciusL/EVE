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
    
    const iconSize = 25;

    return (
        <>
            <header className="box-header" >
                <div className="header-content">

                    <div className='box-logo'>
                        <EveLogo WIDTH={'100%'} CURSOR={'pointer'}></EveLogo>
                    </div>

                    <DirectoryBar></DirectoryBar>

                    <div className='Header-box-button'>
                        <Button LABEL={
                            <BootstrapIcon
                                iconName="FolderFill"
                                color="var(--solidBlueEve)"
                                size={iconSize}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle}></Button>

                        <Button LABEL={
                            <BootstrapIcon
                                iconName="FileEarmarkArrowDownFill"
                                color="var(--solidBlueEve)"
                                size={iconSize}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle}></Button>

                        <Link to={"/"}>
                            <Button LABEL={
                                <BootstrapIcon
                                    iconName="BoxArrowRight"
                                    color="var(--solidRedEve)"
                                    size={iconSize}
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

