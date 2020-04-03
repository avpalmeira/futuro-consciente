import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "../../styles";

export default class Twitter extends React.Component {
  loadTwitterSdk() {
    window.twttr = (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      const t = window.twttr || {};

      if (d.getElementById(id)) return t;
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    })(document, "script", "twitter-wjs");
  }

  componentDidMount() {
    this.loadTwitterSdk();
  }

  render() {
    const linkToShare = "https://developers.facebook.com/docs/";
    const message = "Hey you!";
    const urlEncodedMessage = encodeURI(message);
    const link = `https://twitter.com/intent/tweet?text=${urlEncodedMessage}&url=${linkToShare}`;
    return (
      <div>
        <a href={link} style={{ color: "#00AAEC" }}>
          <TwitterIcon style={styles.socialIcon} />
        </a>
      </div>
    );
  }
}
