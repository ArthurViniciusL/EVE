import { Component } from "react";
import './directory-style.css';
import { FolderComponent } from "../../components/Folder/index.jsx";
import { getFolders } from '../../utils/ApiService.js';
import { Link } from "react-router-dom";

const filtro = async (data) => {
    return data.flatMap(f => [{ "id": f.id, "name": f.name }])
}

const ficJsonApi = [
    {
        "id": 1,
        "name": "PastaTeste_1",
        "subfolders": [
            {
                "id": 41,
                "name": "SubPastaTeste_1_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 42,
                "name": "SubPastaTeste_1_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 43,
                "name": "SubPastaTeste_1_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 2,
        "name": "PastaTeste_2",
        "subfolders": [
            {
                "id": 44,
                "name": "SubPastaTeste_2_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 45,
                "name": "SubPastaTeste_2_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 46,
                "name": "SubPastaTeste_2_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 3,
        "name": "PastaTeste_3",
        "subfolders": [
            {
                "id": 47,
                "name": "SubPastaTeste_3_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 48,
                "name": "SubPastaTeste_3_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 49,
                "name": "SubPastaTeste_3_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 4,
        "name": "PastaTeste_4",
        "subfolders": [],
        "files": []
    },
    {
        "id": 5,
        "name": "PastaTeste_5",
        "subfolders": [],
        "files": []
    },
    {
        "id": 6,
        "name": "PastaTeste_6",
        "subfolders": [],
        "files": []
    }
]

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folders: [] // Inicializa o estado folders como uma lista vazia
        };
    }

    async componentDidMount() {
        //id/folders/ 
        // '/2/subfolders'
        try {
            const path = await '';
            this.setState({ path })

            const folders = await getFolders(path);
            this.setState({ folders });

        } catch (error) {
            console.error('Erro ao obter pastas:', error);
        }
    }

    handleFolderClick = (folder_id) => {
        console.log(`/${folder_id}/subfolders`);
    };

    render() {
        return (
            <>
                <div className='dir-content'>
                    {
                        this.state.folders.map((folder) => (
                            <div key={folder.id} onClick={() => this.handleFolderClick(folder.id)} >
                                <FolderComponent NAME={folder.name} />
                            </div>
                        ))
                    }

                </div >
            </>
        );
    }
}
