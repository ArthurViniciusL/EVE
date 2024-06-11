//const URL = 'http://localhost:8080/folders';
//(`${URL}/${FOLDER_ID}/subfolders`);

const URL = process.env.REACT_APP_API_URL;
const URL_FILES = process.env.REACT_APP_API_FILE_URL;

export async function createDefaultFolder() {

    // Define a propriedade estática para indicar que a função foi chamada uma vez;
    if (createDefaultFolder.called) {
        return;
    }
    createDefaultFolder.called = true;

    try {
        const response = await fetch(URL);
        const jsonApi = await response.json();

        if (Object.keys(jsonApi).length < 1) {
            // Construindo a URL com os parâmetros CURL;
            const fileCurl = `${URL}?name=/&content=null&folderId=null`;

            const restMethod = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch(fileCurl, restMethod)
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(err => {
                            throw new Error(`Folder - Erro de requisição: ${response.statusText} - ${JSON.stringify(err)}`);
                        });
                    }
                    return response.json();
                })
                .then(responseData => {
                    console.log('Resposta do servidor: ', responseData);
                })
        }
    } catch (error) {
        throw new Error('Folder: Erro ao obter dados da API:', error);
    }
}

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

export async function postFolder(id, folder_name) {

    const folderCurl = `${URL}?name=${encodeURIComponent(folder_name)}&parentId=${encodeURIComponent(id)}`;

    const restMethod = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(folderCurl, restMethod)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(`Folder - Erro de requisição: ${response.statusText} - ${JSON.stringify(err)}`);
                });
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
        return jsonApi;

    } catch (error) {
        throw new Error('File: Erro ao obter dados da API:', error);
    }
};

export async function postFile(folder_id, file_name) {

    const fileCurl = `${URL_FILES}?name=${encodeURIComponent(file_name)}&content=null&folderId=${encodeURIComponent(folder_id)}`;

    const restMethod = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(fileCurl, restMethod)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(`Folder - Erro de requisição: ${response.statusText} - ${JSON.stringify(err)}`);
                });
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
