import { useContext } from 'react';
import './directory-bar-style.css'
import { PathNameContext } from '../../utils/PathProvieder';
import { Button } from '../Button';
import { BootstrapIcon } from '../../utils/Main';

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
                    <Button LABEL={
                        <BootstrapIcon iconName="Search"
                            color="var(--solidBlueEve)"
                            size={20}
                            className="align-top"></BootstrapIcon>
                    }></Button>
            </div>
        </>
    )
}