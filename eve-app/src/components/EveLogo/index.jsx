import {ReactComponent as Logo } from '../../assets/imgs/evelogo.svg'

export const EveLogo = ({WIDTH, HEIGHT}) => {
    return (
        <>
        <Logo style={{"maxWidth":WIDTH, "height":  HEIGHT}}></Logo>
        </>
    )
}