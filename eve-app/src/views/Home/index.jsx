import './home-style.css'
import { Component } from "react";
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folderPaths: ['home'],
            files: [{}]
        }
        this.handleFolderChange = this.handleFolderChange.bind(this);
        this.goToFolder = this.goToFolder.bind(this);
        this.updateFiles = this.updateFiles.bind(this); // Adiciona a função de atualização de arquivos ao estado
   
    }

    handleFolderChange(updatePath) {
        this.setState(prevState => ({
            folderPaths: [...prevState.folderPaths, updatePath]
        }));
    }

    goToFolder(dirPath) {
        this.setState({ path: dirPath });
    }

    updateFiles(updatedFiles) {
        this.setState({ files: updatedFiles });
    }

    render() {

        const {path, files} = this.state;


        return (
            <main className='home-main'>
                <section className='home-section'>

                    <Header FOLDER_PATH={this.state.folderPaths}
                        SEND_FILES={files} 
                        UPDATE_FILES={this.updateFiles} />

                    <div className='home-Directory-box'>
                        <Directory
                            key={''}
                            DIRECTORY_CHANGES={this.handleFolderChange}
                            FOLDER={path}
                            GO_TO_FOLDER={this.goToFolder}
                            SEND_FILES={files} UPDATE_FILES={this.updateFiles}
                        ></Directory>
                    </div>

                </section>
            </main>
        );
    }
}

export default Home;