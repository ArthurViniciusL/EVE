import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { FileComponent } from '../../components/Files/index.jsx';

export const Directory = (props) => {
    
    const FOLDERS = props.folders;
    const FILES = props.files;
    
    // -------------------------------------------------------------------------------------------
    // Componente para atualizar a pagina sozinha em x segundos. OBS: otimizar com apenas um useEffect
    /* useEffect(() => {
        const intervalId = setInterval(async () => {
            const dadosDaAPI = await getFolders(FOLDER_ID);
            if (dadosDaAPI) {
                loadFolders(dadosDaAPI);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [FOLDER_ID]); */
    // -------------------------------------------------------------------------------------------

    const getDataFolderComponent = async (folder_id, folder_name) => {
        props.setFolderId(folder_id);

        const namePath = [props.getDirectoryBar];
        namePath.push("/"+folder_name);
        props.setDirectoryBar(namePath);
        
    };

    return (
        <>
            <div className='dir-content'>
                {
                    FOLDERS.map((folder, index) => (
                        <div key={index} onClick={() => getDataFolderComponent(folder.id, folder.name)}>
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