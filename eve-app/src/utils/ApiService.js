//const URL = 'http://localhost:8080/folders';
//(`${URL}/${FOLDER_ID}/subfolders`);

const URL = process.env.REACT_APP_API_URL;
const URL_FILES = process.env.REACT_APP_API_FILE_URL;

export async function getFolders(folder_id) {

    const path = `/${folder_id}/subfolders`
    const formattedPath = `${URL}${path}`

    try {
        const response = await fetch(formattedPath);
        const jsonApi = await response.json();
        //console.log("Path Folder: " + jsonApi);
        return jsonApi;

    } catch (error) {
        throw new Error('Folder: Erro ao obter dados da API:', error);
    }

};

export function postFolder(id, folder_name) {

    const folder = {
        name: folder_name,
        parentId: id
    };
    console.log('postFolder debug:')
    console.log(folder)

    const restMethod = [{
        //mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(folder),
        headers: {
            "Content-type": "application/json" // Define o cabeçalho 'Content-Type' como 'JSON'
        }
    }];

    fetch(URL, restMethod)
        .then(response => {
            if (!response.ok) {
                throw new Error('Folder - Erro de requisição: ', response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Resposta do servidor: ', responseData);
        })
        .catch(error => {
            console.error('Erro inesperado', error);
        });

};

export async function getFiles(folder_id) {

    const formattedPath = `${URL_FILES}/folder/${folder_id}` || `${URL_FILES}/folder/1`

    try {
        const response = await fetch(formattedPath);
        const jsonApi = await response.json();
        //console.log("File: " + jsonApi);
        return jsonApi;

    } catch (error) {
        throw new Error('File: Erro ao obter dados da API:', error);
    }
};

export function postFile(folder_id, file_name) {

    const file = {
        name: file_name,
        content: "", // para a conversão em base64
        folderId: folder_id
    };
    console.log('postFile debug:')
    console.log(file)

    const restMethod = [{
        //mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(file),
        headers: {
            "Content-type": "application/json" // Define o cabeçalho 'Content-Type' como 'JSON'
        }
    }];

    fetch(URL_FILES, restMethod)
        .then(response => {
            if (!response.ok) {
                throw new Error('File - Erro de requisição: ', response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Resposta do servidor: ', responseData);
        })
        .catch(error => {
            console.error('Erro inesperado', error);
        });
};
