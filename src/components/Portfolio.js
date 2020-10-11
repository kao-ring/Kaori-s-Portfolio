import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a
                          href={item.deployed_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${item.image}`}
                            className="item-img"
                            alt={`${item.name}`}
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.discription}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a
                        href={item.deployed_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.deployed_icon}
                          alt="deployed_icon"
                          class="icon-h"
                        />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
