import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://runecom07.runtime.vn/Uploads/shop96/images/product/05_01_2015_11_14_47_TGDd-TetSamsung-800x350.jpg" alt="Los Angeles" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="chicago.jpg" alt="Chicago" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src="ny.jpg" alt="New York" width={1100} height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        );
    }
}

export default App;