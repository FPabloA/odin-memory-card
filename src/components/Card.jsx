import '../styles/Card.css'

function Card ({ text = "", handleClick }) {
    return (
        <>
            <div className="card-wrapper" onClick={handleClick}>
                <div className="card-img">IMG placeholder</div>
                <div className="card-text-wrapper">
                    <div className="card-text">{text}</div>
                </div>
            </div>
        </>
    );
}

export default Card;