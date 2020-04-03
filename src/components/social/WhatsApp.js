import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styles from "../../styles";

export default class WhatsApp extends React.Component {
  render() {
    return (
      <div style={{ color: "purple" }}>
        <WhatsAppIcon style={styles.socialIcon} />
      </div>
    );
  }
}
