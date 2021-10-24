import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <section className="my-5">
            <h1 id="Home">Luke Munoz</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default Home;