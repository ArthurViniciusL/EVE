import { Component } from "react";
import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { getFolders } from '../../utils/ApiService.js';
import { PathNameContext } from "../../utils/PathProvieder.js";

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folders: []
        };

    }

    static contextType = PathNameContext;

    async componentDidMount() {
        this.loadFolders();
    }

    // = '/1/subfolders'
    loadFolders = async (folder_id) => {
        try {
            const folders = await getFolders(folder_id);
            this.setState(() => (
                { folders }
            ));

            this.setPathNameInDirBar();

        } catch (erro) {
            console.log('Erro: ' + erro + ' ao obter a pasta.')
        }
    }

    setPathNameInDirBar(folder_name) {
        const { addPathName } = this.context;
        addPathName(folder_name);
    }

    handleFolderClick = (folder_id, folder_name) => {
        const path = `/${folder_id}/subfolders`;
        const name = `/${folder_name}`;
        this.loadFolders(path, name);
        this.setPathNameInDirBar(name);
    };

    render() {
        const { folders } = this.state;

        return (
            <>
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
