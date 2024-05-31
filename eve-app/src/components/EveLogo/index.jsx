import {ReactComponent as Logo } from '../../assets/imgs/evelogo.svg'

export const EveLogo = ({WIDTH, HEIGHT}) => {
    return (
        <>
        <Logo style={{"max-width":WIDTH, "height":  HEIGHT}}></Logo>
        </>
    )
}