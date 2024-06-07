import * as icons from 'react-bootstrap-icons';

export const BootstrapIcon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}

export function sliceName(word, wordLength) {
    
    let healthyWord = word;
    
    if (word.length > wordLength) {
        const sliceWord = word.slice(0,15);
        healthyWord = `${sliceWord}...`;
    }
    return healthyWord;   
}