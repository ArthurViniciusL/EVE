
export const Image = ({ID, SRC, ALT, WIDTH, HEIGHT}) => {
    return (
        <>
            <img key={ID} src={SRC} alt={ALT} style={{width:WIDTH, height:HEIGHT}} />
        </>

    );
}