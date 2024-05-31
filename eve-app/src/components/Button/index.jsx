
import './style-button.css';

export const Button = ({ ID, LABEL,  ON_Click, STYLE_EVE, CSS}) => {
    return (
        <button className="generic-button"
            key={ID}
            onClick={ON_Click}
            id={STYLE_EVE}
            style={CSS}
        > {LABEL}
        </button>

    )
}

// style={{backgroundColor: BACKGROUND_COLOR}