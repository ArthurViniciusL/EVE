import './home-style.css'
import { Component } from "react";
import { Header } from "../../components/Header";
import Directory from "../../views/Directory";


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: '',
            folderPaths: ['home']
        }
        this.handleFolderChange = this.handleFolderChange.bind(this);
    }

    handleFolderChange(updatePath) {
        this.setState(setStateInfo => ({
            folderPaths: [...setStateInfo.folderPaths, updatePath]
        }));
    }  

    render() {

        return (
            <main className='home-main'>
                <section className='home-section'>
                    <Header FOLDER_PATH={this.state.folderPaths}/>

                    <div className='home-Directory-box'>
                        <Directory DIRECTORY_CHANGES={this.handleFolderChange} FOLDER={''} key={''}></Directory>
                    </div>
                </section>
            </main >
        )
    }
}