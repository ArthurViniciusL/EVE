import './directory-bar-style.css'
import { sliceName } from '../../utils/Main';

export const DirectoryBar = ({ PATH }) => {

    const pathName = 'home' || PATH
    const texto_test = "/home/arthur/Downloads/Open_Sans/static/"
    
    return (
        <>
            <div className='directory-bar-content'>
               {/*  <p>{sliceName(texto, 10)}</p> */}
               <p>{texto_test}</p>
            </div>
        </>
    )
}