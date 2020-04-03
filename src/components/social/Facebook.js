import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "../../styles";

export default class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.linkToShare = "https://developers.facebook.com/docs/";
    this.appId = "FB_APP_ID";
  }

  initFbApi() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: this.appId,
        xfbml: true, // parse social plugins on this page
        version: "v6.0"
      });
    };

    console.log("Loading fb sdk");
    this.loadFbSDK();
  }

  loadFbSDK() {
    (function(d, s, id) {
      if (d.getElementById(id)) return;

      let fjs = d.getElementsByTagName(s)[0];
      const js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";

      if (!fjs) fjs = d.getElementsByTagName("title")[0];
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  componentDidMount() {
    this.initFbApi();
  }

  handleShareToFacebook() {
    window.FB.ui(
      {
        display: "popup",
        method: "share",
        href: this.linkToShare
      },
      function(response) {
        console.log(response);
      }
    );
  }

  render() {
    return (
      <div
        style={{ cursor: "pointer", color: "purple" }}
        onClick={this.handleShareToFacebook}
      >
        <FacebookIcon style={styles.socialIcon} />
      </div>
    );
  }
}
