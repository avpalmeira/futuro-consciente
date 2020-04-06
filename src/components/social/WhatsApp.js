import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styles from "../../styles";

export default class WhatsApp extends React.Component {
  render() {
    const linkToShare = process.env.REACT_APP_SITE_LINK;
    // const message = `Olá, espero que voce goste desse link: ${linkToShare}`;
    const urlencodedtext = encodeURIComponent(linkToShare);
    const link = `https://wa.me/?text=${urlencodedtext}`;

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        style={{ color: "#189D0E", cursor: "pointer" }}
      >
        <WhatsAppIcon style={styles.socialIcon} />
      </a>
    );
  }
}
