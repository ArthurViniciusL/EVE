import * as icons from 'react-bootstrap-icons';

export const BootstrapIcon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}

export function sliceName(word) {

    const sliceWord = word.slice(0,15);

    const healthyWord = `${sliceWord}...`;

    return healthyWord;   

}