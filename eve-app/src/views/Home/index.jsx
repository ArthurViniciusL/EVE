import './home-style.css'
import { Header } from '../../components/Header/index.jsx'
import { Directory } from '../Directory';

import React, { useEffect, useState } from 'react';
import { createDefaultFolder, getFiles, getFolders } from '../../utils/ApiService.js';

const Home = () => {
    const [FOLDERS, loadFolders] = useState([]);
    const [FILES, loadFiles] = useState([]);
    const [FOLDER_ID, setFolderId] = useState(1);
    const [DIRECTORY_BAR, setDirectoryBar] = useState(['home']);


    if (FOLDER_ID === 1) {
        createDefaultFolder();
    }

    useEffect(() => {
        console.log('FILES.map is not a function irá aparecer caso não exista o diretório raiz de id = 1 para setar em FOLDER_ID.')
        const fetchData = async () => {
            const apiFolder = await getFolders(FOLDER_ID);
            const apiFiles = await getFiles(FOLDER_ID);
            if (apiFolder) {
                loadFolders(apiFolder);
                loadFiles(apiFiles);
            }
        }
        fetchData()
    }, [FOLDER_ID]);

    useEffect(() => {
        // Componente para atualizar a pagina sozinha em x segundos. OBS: otimizar com apenas um useEffect
        const intervalId = setInterval(async () => {
            const apiFolder = await getFolders(FOLDER_ID);
            const apiFiles = await getFiles(FOLDER_ID);
            if (apiFolder) {
                loadFolders(apiFolder);
                loadFiles(apiFiles);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [FOLDER_ID]);

    return (
        <main className='home-main'>
            <section className='home-section'>
                <Header
                    folderPathName={DIRECTORY_BAR}
                    goHome={{ setFolderId, setDirectoryBar }}
                    folderId={FOLDER_ID}
                />

                <div className='home-Directory-box'>
                    <Directory
                        folders={FOLDERS}
                        files={FILES}
                        setFolderId={setFolderId}
                        getDirectoryBar={DIRECTORY_BAR}
                        setDirectoryBar={setDirectoryBar}
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;
