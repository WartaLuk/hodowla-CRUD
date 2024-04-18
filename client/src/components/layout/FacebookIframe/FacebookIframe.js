import React, { useState } from "react";

const FacebookIframe = () => {
  const [errorLoading, setErrorLoading] = useState(false);

  const handleError = () => {
    setErrorLoading(true);
  };

  return (
    <div>
      {!errorLoading ? (
        <iframe
          title="Facebook Page"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYourPageName&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          onError={handleError}
        ></iframe>
      ) : (
        <p>Nie udało się załadować treści z Facebooka.</p>
      )}
    </div>
  );
};

export default FacebookIframe;
