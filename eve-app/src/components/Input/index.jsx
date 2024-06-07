export const Input = ({ TYPE, LABEL, NAME }) => {
    return (
        <>

            <label htmlFor="input-uploud" className={NAME} style={{'cursor':'pointer'}}>
                {LABEL}
            </label>
            <input id="input-uploud" type={TYPE} style={{ "display": "none"}} />
        </>
    )
}