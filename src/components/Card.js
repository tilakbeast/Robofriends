import React from 'react';

// const lin = "https://robohash.org/";
const Card = ({ id, name, email } ) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src = {`https://robohash.org/${id}`} height = "200" width = "200" alt = "Some pic" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;