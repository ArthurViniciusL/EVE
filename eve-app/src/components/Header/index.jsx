import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";
import { BootstrapIcon } from '../../utils/Main';
import { Link } from 'react-router-dom';
import { DirectoryBar } from '../DirectoryBar';
import { Input } from '../Input';

export const Header = ({ FOLDER_PATH, SEND_FILES, UPDATE_FILES }) => {

    const styleJs = {
        "ButtonStyle": {
            "width": "60px",
            "height": "fit-content",
            "fontSize": "medium",
            "borderRadius": "15px"
        }
    };

    const handleFileChange = () => {
        const newFile = { 'name': 'arquivo', 'extension': '.txt' };
        const updatedFiles = [...SEND_FILES, newFile]; // Criar uma nova lista com o novo arquivo adicionado

        // Atualizar o estado com a nova lista de arquivos
        UPDATE_FILES(updatedFiles);
    };
    const iconSize = 25;

    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className='box-logo'>
                        <EveLogo WIDTH={'100%'} HEIGHT={'fit-content'} CURSOR={'pointer'}></EveLogo>
                    </div>

                    <DirectoryBar Path={FOLDER_PATH} />

                    <div className='Header-box-button'>
                        <Button LABEL={
                            <BootstrapIcon
                                iconName="Archive"
                                color="var(--solidBlueEve)"
                                size={iconSize}
                                className="align-top"
                            />
                        } CSS={styleJs.ButtonStyle} />

                        <div onClick={handleFileChange}>
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
                        </div>

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

