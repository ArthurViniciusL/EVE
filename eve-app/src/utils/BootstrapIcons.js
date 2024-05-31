import * as icons from 'react-bootstrap-icons';

export const BootstrapIcon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}