import * as icons from 'react-bootstrap-icons';

export const BootstrapIcon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}

export function sliceName(word) {
    
    let healthyWord = word;
    
    if (word.length > 15) {
        const sliceWord = word.slice(0,15);
        healthyWord = `${sliceWord}...`;

    }




    return healthyWord;   

}