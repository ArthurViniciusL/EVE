import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { useEffect, useState } from 'react';
import { getFolders } from '../../utils/ApiService.js';
import { FileComponent } from '../../components/Files/index.jsx';


const Directory = ({ DIRECTORY_CHANGES, FOLDER, GO_TO_FOLDER, SEND_FILES }) => {

    const [folders, setDadosApi] = useState([]);
    
    const files = SEND_FILES

    useEffect(() => {
        const API_REQUEST = async () => {
            const api = await getFolders(FOLDER);
            //const files = SEND_FILES
            if (api) {
                setDadosApi(api)
            }
        }
        API_REQUEST();
    }, [FOLDER]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(FOLDER);
            if (dadosDaAPI) {
                setDadosApi(dadosDaAPI);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [FOLDER]);

    const getData = async (folder_id, folder_name) => {
        const pathName = `/${folder_id}/subfolders`;
        const folderName = `/${folder_name}`;
        GO_TO_FOLDER(pathName);
        DIRECTORY_CHANGES(folderName);
    };


    return (
        <>
            <div className='dir-content'>
                {
                    (folders).map((folder) => (
                        <div key={folder.id} onClick={() => getData(folder.id, folder.name)}>
                            <FolderComponent NAME={folder.name} />
                        </div>
                    ))
                }


                {
                    files.length > 0 && (files.map((file, index) => (
                        <div key={index}>
                            {/* file.extension */}
                            <FileComponent NAME={file.name + file.extension} />
                        </div>
                    )))
                }


                {
                    (folders.length && files.length) === 0 && (
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