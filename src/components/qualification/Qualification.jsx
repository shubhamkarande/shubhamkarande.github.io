import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.E. in Computer Engineering
                </h3>
                <span className="qualification__subtitle">
                  University of Mumbai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Diploma in Computer Engineering
                </h3>
                <span className="qualification__subtitle">MSBTE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Experience 1 - NEW */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Vserv</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> August 2025 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Freelance Software Engineer</h3>
                <span className="qualification__subtitle">Mindrift</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2025 - August 2025
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Engineer
                </h3>
                <span className="qualification__subtitle">Outlier</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> October 2024 - April
                  2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Software Engineer Intern
                </h3>
                <span className="qualification__subtitle">
                  Prodigy InfoTech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2024 - September
                  2024
                </div>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelance Web Developer
                </h3>
                <span className="qualification__subtitle">Remotasks</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> January 2023 -
                  December 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* Experience 6 - NEW */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">
                  HyperStellar Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> August 2021 -
                  September 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
