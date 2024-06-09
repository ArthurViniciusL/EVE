import './header-style.css';
import { EveLogo } from "../../components/EveLogo";
import { Button } from "../../components/Button";
import { BootstrapIcon } from '../../utils/Main';
import { Link } from 'react-router-dom';
import { DirectoryBar } from '../DirectoryBar';
import { Input } from '../Input';
import { postFile, postFolder } from '../../utils/ApiService';

export const Header = (props) => {

    const styleJs = {
        "ButtonStyle": {
            "width": "60px",
            "height": "fit-content",
            "fontSize": "medium",
            "borderRadius": "15px"
        }
    };

    const homePath = () => {
        props.goHome.setFolderId(1);
        props.goHome.setDirectoryBar('home');
    }

    const handleFolderChange = () => {

        let folderName = window.prompt('Só um aleta: Qual o nome da pasta?');

        if (folderName !== null && folderName.trim() !== '') {
            const parentId = props.folderId;
            postFolder(parentId, folderName);
        }
    }

    const handleOpenLocalFiles = (event) => {
        const receivedFile = event.target.files[0];
        const folderId = props.folderId;

        if (receivedFile) {
            const fileName = receivedFile.name;
            //const fileExtension = fileName.split('.').pop();

            postFile(folderId, fileName);
        };
    }

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

                        <div onChange={handleOpenLocalFiles} >
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

