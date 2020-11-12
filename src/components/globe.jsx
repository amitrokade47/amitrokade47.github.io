import React, { Component } from 'react'
import {Helmet} from "react-helmet";

export default class Globe extends Component {
    render() {
      return (
        <div>
        <section id="colorlib-globe" className="js-fullheight" data-section="globe">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8" type="text/javascript"></script>
            <script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
            <script src="https://d3js.org/topojson.v1.min.js" type="text/javascript"></script>
            <script src="https://d3js.org/queue.v1.min.js" type="text/javascript"></script>
            
        </Helmet>
        <meta charSet="UTF-8" />
        <title />
        <div className="container-fluid map-container">
          <div className="row">
            <div className="col-md-12" id="globeParent">
              <div style={{display: 'none'}}>
              {/* <img src={'url(images/bg_1.jpg)'} alt="description" id="plane"/> */}
              <img id="plane" src="images/plane-2_03-black.png" alt="desc"/>
              </div>
            </div>
          </div>
        </div>
        <Helmet>
            <script src="../globe.js" type="text/jsx"></script>
        </Helmet>
        </section>
      </div>


      )
  }
}
