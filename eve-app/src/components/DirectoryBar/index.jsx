
import { useContext } from 'react';
import './directory-bar-style.css'
import { PathNameContext } from '../../utils/PathProvieder';

export const DirectoryBar = () => {

    // const path = PATH || 'home2' ;
    const { pageNames } = useContext(PathNameContext);

    return (
        <>
            <div className='directory-bar-content'>
                <div className='DirectoryBar-path-box-content'>
                    <div className='DirectoryBar-path-content'>
                        <p>home{pageNames}</p>
                    </div>
                </div>

                {/*  <p>{sliceName(texto, 10)}</p> */}

            </div>
        </>
    )
}