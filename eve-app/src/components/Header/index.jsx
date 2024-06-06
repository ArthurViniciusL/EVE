import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";
import { BootstrapIcon } from '../../utils/Main';
import { Link } from 'react-router-dom';
import { DirectoryBar } from '../DirectoryBar';
import { Input } from '../Input';

export const Header = (props) => {

    //FOLDER_PATH, SEND_FILES, UPDATE_FILES 

    const styleJs = {
        "ButtonStyle": {
            "width": "60px",
            "height": "fit-content",
            "fontSize": "medium",
            "borderRadius": "15px"
        }
    };

    const homePath = () => {
        props.setHome('')
    }

    const handleFileChange = () => {
        const newFile = { 'name': 'arquivo', 'extension': '.txt' };
        const updatedFiles = [...props.filesState, newFile]; // Criar uma nova lista com o novo arquivo adicionado

        // Atualizar o estado com a nova lista de arquivos

        /*
        OBG: Aqui só está mandando para a exibição, para inserir no back-end implemente a função de createFile()
        */
        props.setFilesState(updatedFiles);
    };
    const iconSize = 25;

    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className='box-logo' onClick={homePath} >
                        <EveLogo WIDTH={'100%'} HEIGHT={'fit-content'} CURSOR={'pointer'}></EveLogo>
                    </div>

                    <DirectoryBar Path={props.folderPath} />

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

