import { useEffect, useState } from "react";
import { getAllFolders } from "../../utils/ApiService.js";
import { FolderComponent } from "../Folder";
/* import { FileComponent } from "../Files"; */

import './directory-style.css';

const Directory = () => {

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

export default Directory;
