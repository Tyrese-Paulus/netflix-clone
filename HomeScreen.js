import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row 
                genre="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
           
            <Row 
                genre="Trending Now"
                fetchUrl={requests.fetchTrending}
            />

            <Row 
                genre="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />

            <Row
                className="last"
                genre="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />


        </div>
    )
}

export default HomeScreen
