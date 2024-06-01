const URL = 'http://localhost:8080/folders';
// fetch(`${URL}/${FOLDER_ID}/subfolders`);

export async function getFolders(...PATH_FOLDER) {
    
    const defaultPath = `${URL}${PATH_FOLDER}` || URL

    try {
        console.log(PATH_FOLDER);
        const response = await fetch(defaultPath);
        const data = await response.json();
        console.log("loggetFolders: " + data);
        return data;
    } catch (error) {
        throw new Error('Erro ao obter dados da API:', error);
    }

};

export function getSubFolders(id, folders) {
    /*     const url = `http://localhost:8080/folders/${id}/subfolders`; */
}

