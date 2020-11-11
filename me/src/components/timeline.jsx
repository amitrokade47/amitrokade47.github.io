import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engg Co-op at Lightellience, Boston, MA <span>January 2020 - August 2020</span></h2>
                        <p>•	Developed interactive lazy loading visualization tool for neural network graphs stored in protobufs which was an improvement over Google’s TensorBoard visualization.</p>
                        <p>•	Reduced complexity of navigation to visualize data points per unit time interval by using quadtree.</p>
                        <p>•	Converted different Machine Learning models (like .onnx) to company specific data protocol buffer using Python.</p>
                        <p>•	Built using NodeJS, D3 JS, TensorFlow, Python programming language, Flask and tested using Bazel and Jasmine framework.</p>
                        <p>•	Open sourced version of project available at <a href="url">https://github.com/Lightelligence/LTModelVisualization </a> , pip package available at https://pypi.org/project/lightelligence-model-visualization/ .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters in Computer Science at RIT, Rochester, NY <span>August 2018 - December 2020</span></h2>
                        <p>Pursuing MS in CS with Big Data as the concentration. The courses taken include Computational Problem Solving, Advanced Object-Oriented Programming, Foundations of Intelligent Systems, Introduction to Big Data, Foundations of Algorithms, Soft Computing, Machine Learning, Natural Language Processing.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of Engineering in Computer Engineering at RAIT, Mumbai <span>2014-2018</span></h2>
                        <p>Completed my Undergraduate in Computer Engineering and graduated with a GPA of 7.16/10</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
