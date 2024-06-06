import './file-style.css';
import { ReactComponent as FileIcon } from '../../assets/imgs/eve_file_icon.svg';
import { sliceName } from '../../utils/Main.js';


export const FileComponent = ({ NAME }) => {
    const defaultName = NAME || 'FileComponent'
    const wordLength = 15;
    return (
        <>
            <div className="file-component" >
                <FileIcon></FileIcon>
                <p className='file-name'>{sliceName(defaultName, wordLength)}</p>
            </div>
        </>
    );
}
