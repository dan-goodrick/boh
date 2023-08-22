import React from "react";

function HomeView() {
  const isChUaFormFactorSupported = typeof window.navigator.permissions !== 'undefined' && 'ch-ua-form-factor' in window.navigator.permissions;

  return (
    <div>
      <h1>Builders of Hope</h1>
      {isChUaFormFactorSupported ? (
                <div className="video-container">
                <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z1O--YcDilY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
                </div>
            ) : (
                <div className="fallback-content">
                <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z1O--YcDilY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
                </div>
            )}
      <div className="video-container">

      </div>
    </div>
  );
}

export default HomeView;
