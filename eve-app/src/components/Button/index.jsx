import './style-button.css';

export const Button = ({ ID, LABEL, BORDE, FILL, TEXT_COLOR }) => {
    return (

        <button className="generic-button"
            key={ID}
            style={{ border: BORDE, backgroundColor: FILL, color: TEXT_COLOR }}
        > {LABEL}
        </button>

    )
}

// style={{backgroundColor: BACKGROUND_COLOR}