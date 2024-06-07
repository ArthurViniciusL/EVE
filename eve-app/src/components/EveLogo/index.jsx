import { ReactComponent as Logo } from '../../assets/imgs/evelogo.svg'

export const EveLogo = ({ WIDTH, HEIGHT,CURSOR }) => {
    return (
        <>
            <Logo style={{ "maxWidth": WIDTH, "height": HEIGHT, 'cursor': CURSOR }}></Logo>
        </>
    )
}