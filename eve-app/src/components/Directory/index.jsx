import { useEffect, useState } from "react";
import { getAllFolders } from "../../utils/ApiService.js";
import { FolderComponent } from "../Folder";
import { FileComponent } from "../Files";

import './directory-style.css';

const Directory = () => {

    const [folders, f] = useState([]);

    useEffect(() => {
        getAllFolders(1, f);
    }, []);

    return (
        <>
            <FileComponent NAME={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nihil sequi asperiores ducimus enim delectus totam libero. Consequatur reiciendis exercitationem, repellendus laboriosam sunt eaque, similique molestias architecto accusantium temporibus ut."}></FileComponent>

            <h2>Listas:</h2>
            <div className="dir-content">
                {folders.map((folder, index) => (
                        <FolderComponent ID={index} NAME={folder.name}></FolderComponent>
                ))}

            </div>
        </>
    );
};

export default Directory;
