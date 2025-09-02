import '../styles/Card.css'

function Card ({ text = "", imgURL, handleClick }) {
    return (
        <>
            <div className="card-wrapper" onClick={handleClick}>
                <div className="card-img-wrapper">
                    <img className='card-img' src={imgURL}></img>
                    <div className='card-btn-div'></div>
                </div>
                <div className="card-text-wrapper">
                    <div className="card-text">{text}</div>
                </div>
            </div>
        </>
    );
}

export default Card;