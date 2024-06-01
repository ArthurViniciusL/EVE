const URL = 'http://localhost:8080/folders';
// fetch(`${URL}/${FOLDER_ID}/subfolders`);

const ficJsonApi = [
    {
        "id": 1,
        "name": "PastaTeste_1",
        "subfolders": [
            {
                "id": 41,
                "name": "SubPastaTeste_1_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 42,
                "name": "SubPastaTeste_1_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 43,
                "name": "SubPastaTeste_1_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 2,
        "name": "PastaTeste_2",
        "subfolders": [
            {
                "id": 44,
                "name": "SubPastaTeste_2_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 45,
                "name": "SubPastaTeste_2_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 46,
                "name": "SubPastaTeste_2_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 3,
        "name": "PastaTeste_3",
        "subfolders": [
            {
                "id": 47,
                "name": "SubPastaTeste_3_1",
                "subfolders": [],
                "files": []
            },
            {
                "id": 48,
                "name": "SubPastaTeste_3_2",
                "subfolders": [],
                "files": []
            },
            {
                "id": 49,
                "name": "SubPastaTeste_3_3",
                "subfolders": [],
                "files": []
            }
        ],
        "files": []
    },
    {
        "id": 4,
        "name": "PastaTeste_4",
        "subfolders": [],
        "files": []
    },
    {
        "id": 5,
        "name": "PastaTeste_5",
        "subfolders": [],
        "files": []
    },
    {
        "id": 6,
        "name": "PastaTeste_6",
        "subfolders": [],
        "files": []
    }
]

export async function getFolders(...PATH_FOLDER) {
    
    const defaultPath = `${URL}${PATH_FOLDER}` || URL

    try {
        console.log(PATH_FOLDER);
        const response = await fetch(defaultPath);
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

