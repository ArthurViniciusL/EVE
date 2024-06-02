import { Component } from "react";
import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { getFolders } from '../../utils/ApiService.js';
import { Header } from "../../components/Header/index.jsx";

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folders: [], // Inicializa o estado folders como uma lista vazia
            dirName: ['home']
        };
    }

    async componentDidMount() {
        await this.loadFolders();
    }

    loadFolders = async (folder_id = '', folder_name) => {

        try {
            const folders = await getFolders(folder_id);
            //this.setState({ folders })
            this.setState((prevState) => ({
                folders,
                dirName: [...prevState.dirName, folder_name]
            }));
        } catch (erro) {
            console.log('Erro: ' + erro + ' ao obter a pasta.')
        }
    }

    handleFolderClick = (folder_id, folder_name) => {
        const path = `/${folder_id}/subfolders`;
        const name = `/${folder_name}`;
        this.loadFolders(path, name);
    };

    render() {
        const { folders, dirName } = this.state;
        return (
            <>
                <Header PATH_DIR_BAR={dirName}></Header>

                <div className='dir-content'>
                    {
                        (folders).map((folder) => (
                            <div key={folder.id} onClick={() => this.handleFolderClick(folder.id, folder.name)} >
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
}
