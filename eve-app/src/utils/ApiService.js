//const URL = 'http://localhost:8080/folders';
//(`${URL}/${FOLDER_ID}/subfolders`);

const URL = process.env.REACT_APP_API_URL;
const URL_FILES = process.env.REACT_APP_API_FILE_URL;

export async function getFolders(folder_id) {
    
    const path = `/${folder_id}/subfolders` 

    const formattedPath = `${URL}${path}` || URL

    try {
        const response = await fetch(formattedPath);
        const jsonApi = await response.json();
        //console.log("Path Folder: " + jsonApi);
        return jsonApi;

    } catch (error) {
        throw new Error('Folder: Erro ao obter dados da API:', error);
    }

};

export function postFolder(father_id, folder_name) {
    /*     const url = `http://localhost:8080/folders/${id}/subfolders`; */
}

export async function getFiles(folder_id) {
    
    const formattedPath = `${URL_FILES}/folder/${folder_id}` // || `${URL_FILES}/folder/1`

    try {
        const response = await fetch(formattedPath);
        const jsonApi = await response.json();
        //console.log("File: " + jsonApi);
        return jsonApi;
    
    } catch (error) {
        throw new Error('File: Erro ao obter dados da API:', error);
    }
}

export function postFile(folder_id, file_name) {

    const file = {
        folderId: folder_id,
        name: file_name,
        content: null // para a conversão em base64
    };

    const restMethod = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Define o cabeçalho 'Content-Type' como 'JSON'
          },
          body: JSON.stringify(file)
    };

    fetch(URL_FILES, restMethod)
        .then(status => {
            if (!status.ok) {
                throw new Error('Erro de requisição: ' + status.statusText)
            }
            return status.json
        })
        .then(serverResponse => {
            console.log('Resposta do servidor: ' + serverResponse);
        })
        .catch(error => {
            console.error('Erro inesperado', error);
        })

}


//postFile(1,'meu arquivo de teste.png')