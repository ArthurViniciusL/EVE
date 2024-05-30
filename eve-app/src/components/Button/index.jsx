
import './style-button.css';

export const Button = ({ ID, STYLE ,LABEL }) => {
    return (
        <button className="generic-button"
            key={ID}
            id={STYLE}
        > {LABEL}
        </button>

    )
}

// style={{backgroundColor: BACKGROUND_COLOR}