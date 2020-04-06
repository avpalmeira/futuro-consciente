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

  constructLink(shareLink, message, linkToShare) {
    let link = shareLink.concat("?");

    if (message) {
      const textParam = `text=${message}&`;
      link = link.concat(textParam);
    }
    const urlParam = `url=${linkToShare}`;
    link = link.concat(urlParam);

    const encodedLink = encodeURI(link);

    return encodedLink;
  }

  render() {
    const shareLink = "https://twitter.com/intent/tweet";
    const linkToShare = process.env.REACT_APP_SITE_LINK;
    const link = this.constructLink(shareLink, null, linkToShare);
    return (
      <div>
        <a href={link} style={{ color: "#00AAEC" }}>
          <TwitterIcon style={styles.socialIcon} />
        </a>
      </div>
    );
  }
}
