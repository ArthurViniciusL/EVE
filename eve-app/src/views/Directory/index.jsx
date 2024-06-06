import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { useEffect, useState } from 'react';
import { getFiles, getFolders } from '../../utils/ApiService.js';
import { FileComponent } from '../../components/Files/index.jsx';


const Directory = (props) => {
    // DIRECTORY_CHANGES, FOLDER, GO_TO_FOLDER, SEND_FILES
    const FolderPath = props.foldersState;
    const FileId = props.filesState;

    
    const [foldersObject, loadFolders] = useState([]);
    const [filesObject, loadFiles] = useState([]);
    
    // const test_file_view = props.filesContent;

    useEffect(() => {
        const API_REQUEST = async () => {
            const apiFolder = await getFolders(FolderPath);
            const apiFiles = await getFiles(FileId)
            //const files = SEND_FILES
            if (apiFolder) {
                loadFolders(apiFolder)
                loadFiles(apiFiles)
            }
        }
        API_REQUEST();
    }, [FolderPath, FileId]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(FolderPath);
            if (dadosDaAPI) {
                loadFolders(dadosDaAPI);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [FolderPath, FileId]);

    const getData = async (folder_id, folder_name) => {
        const pathName = `/${folder_id}/subfolders`;
        const folderName = `/${folder_name}`;
        props.goToFolder(pathName);
        props.setPathName(folderName);
    };


    return (
        <>
            <div className='dir-content'>
                {
                    (foldersObject).map((folder) => (
                        <div key={folder.id} onClick={() => getData(folder.id, folder.name)}>
                            <FolderComponent NAME={folder.name} />
                        </div>
                    ))

                }

                {
                    (filesObject).map((file, index) => (
                        <div key={index}>
                            <FileComponent NAME={file.name} />
                        </div>
                    ))
                }

                {
                    (foldersObject.length || filesObject.length) === 0 && (
                        <div className="void-dir">
                            <p>Diretório vazio!</p>
                        </div>
                    )
                }
            </div >
        </>
    );
}

export default Directory;