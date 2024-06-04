import './style-button.css';

export const Button = ({ ID, LABEL, STYLE_EVE, CSS }) => {
    return (
        <button className="generic-button"
            key={ID}
            id={STYLE_EVE}
            style={CSS}
        > {LABEL}
        </button>
    )
}

// style={{backgroundColor: BACKGROUND_COLOR}