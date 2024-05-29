import './style-button.css';

export const Button = ({ ID, LABEL, ROUTER, EXTERNAL_LINK }) => {
    return (
        <a href={EXTERNAL_LINK}>
            <button className="generic-button"
                key={ID}
            > {LABEL}
            </button>
        </a>
    )
}

// style={{backgroundColor: BACKGROUND_COLOR}