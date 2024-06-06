//const URL = 'http://localhost:8080/folders';
//(`${URL}/${FOLDER_ID}/subfolders`);

const URL = process.env.REACT_APP_API_URL;
const URL_FILES = process.env.REACT_APP_API_FILE_URL;

export async function getFolders(FOLDER_PATH) {

    const defaultPath = `${URL}${FOLDER_PATH}` || URL

    try {
        const response = await fetch(defaultPath);
        const jsonApi = await response.json();
        //console.log("Path Folder: " + jsonApi);
        return jsonApi;

    } catch (error) {
        throw new Error('Folder: Erro ao obter dados da API:', error);
    }

};

export function createFolder(father_id, folder_name) {
    /*     const url = `http://localhost:8080/folders/${id}/subfolders`; */
}

export async function getFiles(folder_id) {
    
    const defaultPath = `${URL_FILES}/folder/${folder_id}`

    try {
        const response = await fetch(defaultPath);
        const jsonApi = await response.json();
        //console.log("File: " + jsonApi);
        return jsonApi;
    
    } catch (error) {
        throw new Error('File: Erro ao obter dados da API:', error);
    }
}

export function createFile(NAME, FOLDER_ID) {
    
    const restMethod = {
        method: 'POST',

    }

    const file = {
        folderId: FOLDER_ID,
        name: NAME,
        content: null // para a conversão em base64
    }
}
