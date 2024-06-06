import './home-style.css'
import { Component } from "react";
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";
import { postFile } from '../../utils/ApiService';


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderId: 1,
            filesId: '',
            directoryBar: ['home'],
            folders: [],
            files: []
        }

        this.handleFolderChange = this.handleFolderChange.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.openFolder = this.openFolder.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    
    handleFolderChange(folder_name) {
        this.setState(prevState => ({
            directoryBar: [...prevState.directoryBar, `/${folder_name}`]
        }));
    }

    openFolder(folder_id) {
        /* o id deve ir formatado como /id/subfolders */
        this.setState({ folderId: folder_id});
    }
    
    goToHome(home_path) {
        this.setState({ folderId: home_path })
        this.setState({ directoryBar: 'home' })
    }

    createFile() {
        // this.state.fileId
        //postFile()
    }


    handleFileChange(folder_id) {
        this.setState({filesId: folder_id})
    }
        
    render() {
        
        const { folderId, directoryBar, filesId } = this.state;
        
        return (
            <main className='home-main'>
                <section className='home-section'>

                    <Header
                        folderPathName={directoryBar}
                        setHome={this.goToHome}
                    />

                    <div className='home-Directory-box'>
                        <Directory
                            key={''}
                            folderId={folderId}
                            setPathNameInDirBar={this.handleFolderChange}
                            openFolder={this.openFolder}                            
                            setFileId={this.handleFileChange}
                        ></Directory>
                    </div>

                </section>
            </main>
        );
    }
}

export default Home;