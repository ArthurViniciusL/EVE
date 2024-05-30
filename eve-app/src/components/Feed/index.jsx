import { useEffect, useState } from "react";
import { getFolders } from "../../utils/API";

const Feed = () => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getFolders(setFolders);
    }, []);

    return (
        <div>
            <h1>Listas:</h1>
            <ul>
                {folders.map((folder, index) => (
                    <li key={index}>{folder.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
