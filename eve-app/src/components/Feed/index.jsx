import { useEffect, useState } from "react";
import { getAllFolders } from "../../utils/API";

const Feed = () => {

    const [folders, f] = useState([]);
    
    useEffect(() => {
        getAllFolders(1,f);
    }, []);

    return (
        <>
            <h2>Listas:</h2>
            <div>
                {folders.map((folder, index) => (
                    <ul>
                        <li>📁</li>
                        <li key={index}>{folder.name}</li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default Feed;
