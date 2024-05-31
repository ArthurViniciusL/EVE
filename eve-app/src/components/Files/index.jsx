import './file-style.css';
import { ReactComponent as FileIcon } from '../../assets/imgs/eve_file_icon.svg';
import { sliceName } from '../../utils/sliceNames';


export const FileComponent = ({ ID, NAME }) => {

    return (
        <>
            <div key={ID} className="file-component" >
                <FileIcon></FileIcon>
                <p className='file-name'>{sliceName(NAME)}</p>
            </div>
        </>
    );
}
