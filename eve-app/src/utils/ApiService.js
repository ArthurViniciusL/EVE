/* export function getAllFolders(id, folders) {
    const url = require('../utils/ApiTest.json');

    // Simular uma Promise resolvida com os dados do JSON local
    new Promise((resolve) => {
        resolve(url);
    })
        .then(data => {
            console.log('Success:', data);
            folders(data); // Atualiza o estado com os dados recebidos
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
 */

const URL = 'http://localhost:8080/folders';

export async function olaMundo() {
    console.log("Ola, mundo!")
}

// fetch(`${URL}/${FOLDER_ID}/subfolders`);

export async function getFolders(FOLDER_ID) {
    try {
        console.log(FOLDER_ID);
        const response = await fetch(`${URL}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Erro ao obter dados da API:', error);
    }

};

export function getSubFolders(id, folders) {
    /*     const url = `http://localhost:8080/folders/${id}/subfolders`; */
}

