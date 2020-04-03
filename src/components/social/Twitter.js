import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "../../styles";

export default function Twitter() {
  const linkToShare = "https://developers.facebook.com/docs/";
  return (
    <div>
      <a href={linkToShare} style={{ color: "purple" }}>
        <TwitterIcon style={styles.socialIcon} />
      </a>
    </div>
  );
}
