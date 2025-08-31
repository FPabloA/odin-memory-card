import '../styles/Card.css'

function Card (props) {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-img">IMG placeholder</div>
                <div className="card-text-wrapper">
                    <div className="card-text">{props.text}</div>
                </div>
            </div>
        </>
    );
}

export default Card;