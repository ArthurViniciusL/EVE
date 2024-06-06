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

    const handleFolderChange = () => {
        const foldersName = window.prompt('Só um aleta: Qual o nome da pasta?')

        /*
        OBG: Aqui só está mandando para a exibição, para inserir no back-end implemente a função de createFolder()
        */

        // props.setFolderState(foldersName)
    }

    const handleOpenLocalFiles = () => {
        const newFile = { 'name': 'arquivo.txt'};
        const file = [...props.fileId, newFile];

        /*
        OBG: Aqui só está mandando para a exibição, para inserir no back-end implemente a função de createFile()
        */
        // Atualizar o estado com a nova lista de arquivos
        
        props.sendFile(file)
    };
    const iconSize = 25;

    return (
        <>
            <header className="box-header" >
                <div className="header-content">
                    <div className='box-logo' onClick={homePath} >
                        <EveLogo WIDTH={'100%'} HEIGHT={'fit-content'} CURSOR={'pointer'}></EveLogo>
                    </div>

                    <DirectoryBar Path={props.folderPathName} />

                    <div className='Header-box-button'>

                        <div onClick={handleFolderChange}>
                            <Button LABEL={
                                <BootstrapIcon
                                    iconName="Archive"
                                    color="var(--solidBlueEve)"
                                    size={iconSize}
                                    className="align-top"
                                />
                            } CSS={styleJs.ButtonStyle} />
                        </div>

                        <div onClick={handleOpenLocalFiles}>
                            <Button LABEL={
                                <Input TYPE={'file'} LABEL={
                                    <BootstrapIcon
                                        iconName='FileEarmarkArrowDown'
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

