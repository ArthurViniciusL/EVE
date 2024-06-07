import './folder-style.css';
import { ReactComponent as FolderIcon } from '../../assets/imgs/eve_icon_folder.svg';
import { sliceName } from '../../utils/Main';


export const FolderComponent = ({ NAME }) => {
    const defaultName = NAME || "Pasta sem nome"
    const wordLength = 15;
    return (
        <>        
            <div className="folder-component" >
                <FolderIcon></FolderIcon>
                <p className='folder-name'>{sliceName(defaultName, wordLength)}</p>
            </div>

        </>
    );
}
