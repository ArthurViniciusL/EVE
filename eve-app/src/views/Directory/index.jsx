import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { useEffect, useState } from 'react';
import { getFolders } from '../../utils/ApiService.js';

const Directory = ({DIRECTORY_CHANGES}) => {

    const [folders, setDadosApi] = useState([]);
    // '/1/subfolders'
    const [folder, goToFolder] = useState('');

    

    useEffect(() => {
        const API_REQUEST = async () => {
            const api = await getFolders(folder);
            if (api) {
                setDadosApi(api)
            }
        }
        API_REQUEST();
    }, [folder]);

    // ------------------------------------------------------------------------------------------
    // UseEffect para atualizar os dados quando requisitarAPI tiver uma alteração
    useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(folder);
            if (dadosDaAPI) {
                setDadosApi(dadosDaAPI);
            }
        }, 10000); // Define um intervalo de 10 segundos para requisitarAPI

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, [folder]);
    // ------------------------------------------------------------------------------------------

    /*    const loadFolders = async (folder_id) => {
   
       }
   
       const setPathNameInDirBar = (folder_name) => {
   
       }
   
        */

    const getData = async (folder_id, folder_name) => {
        const pathName = `/${folder_id}/subfolders`;
        const folderName =`/${folder_name}`;
        goToFolder(pathName);
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
                    folders.length === 0 && (
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