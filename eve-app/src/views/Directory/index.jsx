
import { FolderComponent } from "../../components/Folder/index.jsx";

import { getFolders } from "../../utils/ApiService.js"

import './directory-style.css';

const Directory = () => {

    getFolders("id_dinamico");

    return (
        <>
            <div className='dir-content'>
                <FolderComponent ID={1} NAME={"Estati_nome_da_pasta_aqui"}></FolderComponent>
            </div >
        </>
    );
};

export default Directory;