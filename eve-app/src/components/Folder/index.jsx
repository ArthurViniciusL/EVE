import './folder-style.css';
import { ReactComponent as FolderIcon } from '../../assets/imgs/eve_icon_folder.svg';
import { sliceName } from '../../utils/sliceNames';


export const FolderComponent = ({ ID, NAME }) => {

    return (
        <>
            <div key={ID} className="folder-component" >
                <FolderIcon></FolderIcon>
                <p className='folder-name'>{sliceName(NAME)}</p>
            </div>
        </>
    );
}
