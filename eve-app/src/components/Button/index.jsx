import './style-button.css';

export const Button = ({ ID, LABEL, STYLE_EVE, CSS, OnClick }) => {
    return (
        <button className="generic-button"
            key={ID}
            id={STYLE_EVE}
            style={CSS}
            onClick={OnClick}
        > {LABEL}
        </button>
    )
}

// style={{backgroundColor: BACKGROUND_COLOR}