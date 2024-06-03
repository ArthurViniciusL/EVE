//const URL = 'http://localhost:8080/folders';
//(`${URL}/${FOLDER_ID}/subfolders`);

const URL = process.env.REACT_APP_API_URL;

const URL_JUST_GET =  'https://arthurviniciusl.github.io/ApiTest/folders.json'

export async function getFolders(...PATH_FOLDER) {
    
    const defaultPath = `${URL}${PATH_FOLDER}` || URL
    // const defaultPath = URL_JUST_GET

    try {
        const response = await fetch(defaultPath);
        const data = await response.json();
        console.log("Path Folder: " + data);
        return data;
    } catch (error) {
        throw new Error('Erro ao obter dados da API:', error);
    }

};

export function createFolder(father_id, folder_name) {
    /*     const url = `http://localhost:8080/folders/${id}/subfolders`; */
}

