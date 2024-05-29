import './style-button.css';

export const Button = ({ID, LABEL, ROUTER }) => {
    return (
        <button className="generic-button"
        key={ID}
        router={ROUTER}>{LABEL}</button>
    )
}

// style={{backgroundColor: BACKGROUND_COLOR}