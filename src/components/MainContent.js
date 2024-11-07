import "./mainContent.css";

function MainContent() {
  return (
    <>
      <section className="main-section">
        <div className="main-container">
          <div className="header-section">
            <h2 className="main-heading">
              Actionable intelligence at the edge.
            </h2>
            <p className="main-paragraph">
              Highly optimized traffic brain embedded directly in AI-ready
              cameras to perform deep traffic analysis of live video stream.
              All-in-camera solution for a wide variety of traffic tasks with
              cutting edge analytics.
            </p>
            <div className="image-container">
              <img
                src="./trafic.jpg"
                alt="Traffic img"
                className="main-image"
              />
            </div>
          </div>

          <section className="feature-section">
            <div className="feature-card">
              <img
                src="https://datafromsky.com/wp-content/uploads/2022/06/icon-inside.svg"
                alt="icon inside"
                className="feature-icon"
              />
              <div className="feature-content">
                <h3 className="feature-title">
                  <b>Inside</b> the camera
                </h3>
                <p className="feature-text">
                  The traffic brain runs directly in your camera. Taste built-in
                  powerful intelligence running locally without excessive data
                  transfer.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img
                src="https://datafromsky.com/wp-content/uploads/2022/06/icon-countless.svg"
                alt="icon countless"
                className="feature-icon"
              />
              <div className="feature-content">
                <h3 className="feature-title">
                  Countless <b>applications</b>
                </h3>
                <p className="feature-text">
                  Traffic monitoring, parking management, retail analytics or
                  smart security have never been easier.
                  Download-install-analyze solution for various applications.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img
                src="https://datafromsky.com/wp-content/uploads/2022/06/icon-scenarios.svg"
                alt="icon scenarios"
                className="feature-icon"
              />
              <div className="feature-content">
                <h3 className="feature-title">
                  Ready for <b>integration</b>
                </h3>
                <p className="feature-text">
                  Open API enables you to integrate your smart camera with any
                  3rd party system. Convert your camera into a data source for
                  adaptive traffic lights, smart city dashboards or security
                  systems.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default MainContent;
