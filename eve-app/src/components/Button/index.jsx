
import './style-button.css';

export const Button = ({ ID, STYLE ,LABEL, ON_Click }) => {
    return (
        <button className="generic-button"
            key={ID}
            id={STYLE}
            onClick={ON_Click}
        > {LABEL}
        </button>

    )
}

// style={{backgroundColor: BACKGROUND_COLOR}