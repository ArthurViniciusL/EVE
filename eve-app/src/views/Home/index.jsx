import './home-style.css'
import { Component } from "react";
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderId: '',
            filesId: '2',
            directoryBar: ['home'],
            folders: [],
            files: []
        }

        this.handleFolderChange = this.handleFolderChange.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.openFolder = this.openFolder.bind(this);
        
        //this.handleFileChange = this.handleFileChange.bind(this); // Adiciona a função de atualização de arquivos ao estado
        //this.createFolder = this.createFolder.bind(this);
    }
    
    handleFolderChange(folder_name) {
        this.setState(prevState => ({
            directoryBar: [...prevState.directoryBar, `/${folder_name}`]
        }));
    }

    openFolder(folder_id) {
        /* o id deve ir formatado como /id/subfolders */
        this.setState({ folderId: `/${folder_id}/subfolders` });
    }
    
    goToHome(home_path) {
        this.setState({ folderId: home_path })
        this.setState({ directoryBar: 'home' })
    }
    
        
    render() {
        
        const { folderId, directoryBar, filesId } = this.state;
        
        return (
            <main className='home-main'>
                <section className='home-section'>

                    <Header
                        folderPathName={directoryBar}
                        setHome={this.goToHome}
                        
                        fileId={filesId}
                    />

                    <div className='home-Directory-box'>
                        <Directory
                            key={''}
                            folderId={folderId}
                            setPathNameInDirBar={this.handleFolderChange}
                            openFolder={this.openFolder}
                            
                            fileId={filesId}
                        ></Directory>
                    </div>

                </section>
            </main>
        );
    }
}

export default Home;