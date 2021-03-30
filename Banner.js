import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(string, n){
        return (
            string?.length > n ? string.substr(0, n - 1) + '...' : string
        )
    }

    return (
        <header

            className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`,
                backgroundPosition: "center center"
            }}

        >
            <div className="banner__contents">

                <h1 className="banner__title">
                    movie name
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(`this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test`, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
