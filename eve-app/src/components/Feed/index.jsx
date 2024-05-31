import { useEffect, useState } from "react";
import { getAllFolders } from "../../utils/API";
import { FolderComponent } from "../Folder";
import { FileComponent } from "../Files";

const Feed = () => {

    const [folders, f] = useState([]);

    useEffect(() => {
        getAllFolders(1, f);
    }, []);

    return (
        <>
            <FolderComponent NAME={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nihil sequi asperiores ducimus enim delectus totam libero. Consequatur reiciendis exercitationem, repellendus laboriosam sunt eaque, similique molestias architecto accusantium temporibus ut."}></FolderComponent>

            <FileComponent NAME={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nihil sequi asperiores ducimus enim delectus totam libero. Consequatur reiciendis exercitationem, repellendus laboriosam sunt eaque, similique molestias architecto accusantium temporibus ut."}></FileComponent>

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
