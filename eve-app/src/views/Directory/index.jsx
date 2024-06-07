import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { useEffect, useState } from 'react';
import { getFiles, getFolders } from '../../utils/ApiService.js';
import { FileComponent } from '../../components/Files/index.jsx';

const Directory = (props) => {
    const FOLDER_ID = props.folderId;

    const [FOLDERS, loadFolders] = useState([]);
    const [FILES, loadFiles] = useState([]);

    useEffect(() => {
        const API_REQUEST = async () => {
            const apiFolder = await getFolders(FOLDER_ID);
            const apiFiles = await getFiles(FOLDER_ID);

            if (apiFolder) {
                loadFolders(apiFolder)
                loadFiles(apiFiles)
            }
        }
        API_REQUEST();
    }, [FOLDER_ID]);

    // -------------------------------------------------------------------------------------------
    // Componente para atualizar a pagina sozinha em x segundos. OBS: otimizar com apenas um useEffect
    useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(FOLDER_ID);
            if (dadosDaAPI) {
                loadFolders(dadosDaAPI);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [FOLDER_ID]);
    // -------------------------------------------------------------------------------------------

    const getDataFolderComponent = async (folder_id, folder_name) => {
        props.openFolder(folder_id);
        props.setPathNameInDirBar(folder_name);
        props.setFileId(folder_id)
    };

    return (
        <>
            <div className='dir-content'>
                {
                    (FOLDERS).map((folder) => (
                        <div key={folder.id} onClick={() => getDataFolderComponent(folder.id, folder.name)}>
                            <FolderComponent NAME={folder.name} />
                        </div>
                    ))
                }

                {
                    (FILES).map((file, index) => (
                        <div key={index}>
                            <FileComponent NAME={file.name} />
                        </div>
                    ))
                }

                {
                    (FOLDERS.length || FILES.length) === 0 && (
                        <div className="void-dir">
                            <h3 style={{ 'color': '#aaadb6' }}>Diretório vazio!</h3>
                        </div>
                    )
                }
            </div >
        </>
    );
}

export default Directory;