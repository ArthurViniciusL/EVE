import './directory-bar-style.css'
import { sliceName } from '../../utils/Main';

export const DirectoryBar = ({ PATH }) => {
    return (
        <>
            <div className='directory-bar-content'>
               {/*  <p>{sliceName(texto, 10)}</p> */}
               <p>{PATH}</p>
            </div>
        </>
    )
}