import { useEffect, useState } from "react";
import { getAllFolders } from "../../utils/ApiService.js";
import { FolderComponent } from "../Folder/index.jsx";
/* import { FileComponent } from "../Files"; */

import './directory-style.css';

const DirectoryView = () => {

    const [folders, f] = useState([]);

    useEffect(() => {
        getAllFolders(1, f);
    }, []);

    return (
        <>            
            <div className="dir-content">
                {folders.map((folder, index) => (
                        <FolderComponent ID={index} NAME={folder.name}></FolderComponent>
                ))}

            </div>
        </>
    );
};

export default DirectoryView;
