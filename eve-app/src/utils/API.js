export function getAllFolders(id, folders) {

    /* const url = `http://localhost:8080/folders/${n}/subfolders`; */

    
    /*     const url = "http://localhost:8080/folders"; */

    const url = `http://localhost:8080/folders/${id}/subfolders`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(data => {
            console.log('Success:', data);
            folders(data); // Atualiza o estado com os dados recebidos
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
