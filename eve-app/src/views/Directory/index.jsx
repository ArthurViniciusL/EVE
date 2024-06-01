import { Component } from "react";
import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { getFolders } from '../../utils/ApiService.js';

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folders: [] // Inicializa o estado folders como uma lista vazia
        };
    }

    async componentDidMount() {
        await this.loadFolders();
    }

    loadFolders = async (folder_id = '') => {
        try {
            const folders = await getFolders(folder_id);
            this.setState({ folders })
        } catch (erro) {
            console.log('Erro: ' + erro + ' ao obter a pasta.')
        }
    }

    handleFolderClick = (folder_id) => {
        const path = `/${folder_id}/subfolders`;
        this.loadFolders(path);
    };

    render() {
        const { folders } = this.state;
        return (
            <>
                <div className='dir-content'>
                    {
                        folders.map((folder) => (
                            <div key={folder.id} onClick={() => this.handleFolderClick(folder.id)} >
                                <FolderComponent NAME={folder.name} />
                            </div>
                        ))
                    }
                    {
                        folders.length === 0 && (
                            <div>
                                <p>Diretório vazio!</p>
                            </div>
                        )
                    }



                </div >
            </>
        );
    }
}
