import './directory-bar-style.css'
import { Button } from '../Button';
import { BootstrapIcon } from '../../utils/Main';

export const DirectoryBar = ({Path}) => {
   
    return (
        <>
            <div className='directory-bar-content'>
                <div className='DirectoryBar-path-box-content'>
                    <div className='DirectoryBar-path-content'>
                        <p>{Path}</p>
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