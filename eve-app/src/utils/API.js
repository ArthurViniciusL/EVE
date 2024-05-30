export function getFolders(setFolders) {
    const url = 'http://localhost:8080/folders';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setFolders(data); // Atualiza o estado com os dados recebidos
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
