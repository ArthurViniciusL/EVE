import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";
import { BootstrapIcon } from '../../utils/Main';
import { Link } from 'react-router-dom';
import { DirectoryBar } from '../DirectoryBar';
import { Input } from '../Input';

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
   
    // const texto_test = "/home/arthur/Downloads/Open_Sans/static/"

    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className='box-logo'>
                        <EveLogo WIDTH={'100%'} HEIGHT={'fit-content'} CURSOR={'pointer'}></EveLogo>
                    </div>

                    <DirectoryBar />

                    <div className='Header-box-button'>
                        <Button LABEL={
                            <BootstrapIcon
                                iconName="Archive"
                                color="var(--solidBlueEve)"
                                size={iconSize}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle} />

                        <Button LABEL={
                            <Input TYPE={'file'} LABEL={
                                <BootstrapIcon
                                    iconName="FileEarmarkArrowDown"
                                    color="var(--solidBlueEve)"
                                    size={iconSize}
                                    className="align-top"
                                />
                            }></Input>
                        } CSS={styleJs.ButtonStyle} />


                        <Link to={"/"}>
                            <Button LABEL={
                                <BootstrapIcon
                                    iconName="BoxArrowRight"
                                    color="var(--solidRedEve)"
                                    size={iconSize}
                                    className="align-top"
                                />
                            } CSS={styleJs.ButtonStyle} />
                        </Link>

                    </div>
                </div>

            </header >
        </>
    )
}

