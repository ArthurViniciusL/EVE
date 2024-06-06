import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { useEffect, useState } from 'react';
import { getFiles, getFolders } from '../../utils/ApiService.js';
import { FileComponent } from '../../components/Files/index.jsx';

const Directory = (props) => {
    const folder = props.folderId;
    const file = props.folderId;
    
    const [FOLDERS, loadFolders] = useState([]);
    const [FILES, loadFiles] = useState([]);

    useEffect(() => {
        const API_REQUEST = async () => {
            const apiFolder = await getFolders(folder);
            const apiFiles = await getFiles(file);

            if (apiFolder) {
                loadFolders(apiFolder)
                loadFiles(apiFiles)
            }
        }
        API_REQUEST();
    }, [folder, file]);

    // -------------------------------------------------------------------------------------------
    // Componente para atualizar a pagina sozinha em x segundos. OBS: otimizar com apenas um useEffect
    useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(folder);
            if (dadosDaAPI) {
                loadFolders(dadosDaAPI);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [folder, file]);
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
                            <h3 style={{'color':'#aaadb6'}}>Diretório vazio!</h3>
                            
                        </div>
                    )
                }
            </div >
        </>
    );
}

export default Directory;