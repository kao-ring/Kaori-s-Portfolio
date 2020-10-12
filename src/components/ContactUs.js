import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                E-mail : {" "}
                <a href="mailto:kaori.caplan@gmail.com">
                   kaori.caplan@gmail.com
                </a>
              </h4>
              {resumeData.contacts.map((item,i) => {
                return (
                  <h4 key={i}>
                    {item.name} :{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </a>
                  </h4>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
