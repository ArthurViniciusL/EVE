import './home-style.css'
import { Component } from "react";
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            filesId: '1',
            filesContent: [{}],
            folderPaths: ['home'],
        }
        this.handleFolderChange = this.handleFolderChange.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goFolder = this.goFolder.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this); // Adiciona a função de atualização de arquivos ao estado
    }

    handleFolderChange(path) {
        this.setState(prevState => ({
            folderPaths: [...prevState.folderPaths, path]
        }));
    }

    goToHome(home) {
        this.setState({ path: home })
        this.setState({ folderPaths: 'home' })
    }

    goFolder(dirPath) {
        this.setState({ path: dirPath });
    }

    handleFileChange(file) {
        this.setState(prevState => ({
            filesContent: [...prevState.filesContent, file]
        }));
    }


    render() {

        const { path, filesId, filesContent } = this.state;

        return (
            <main className='home-main'>
                <section className='home-section'>

                    <Header
                        folderPath={this.state.folderPaths}
                        setHome={this.goToHome}
                        filesState={filesId}
                        setFilesState={this.handleFileChange}
                    />

                    <div className='home-Directory-box'>
                        <Directory
                            key={''}
                            foldersState={path}
                            setPathName={this.handleFolderChange}
                            goToFolder={this.goFolder}
                            filesState={filesId}
                            filesContent={filesContent}
                        ></Directory>
                    </div>

                </section>
            </main>
        );
    }
}

export default Home;