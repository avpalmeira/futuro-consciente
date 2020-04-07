import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles";
import { Tabs, Tab, Box } from "@material-ui/core";

function Navigation(props) {
  const { shouldRender, tab, onNavigationChange } = props;

  const navigation = !shouldRender ? (
    <Box style={styles.tabsWrapper}>
      <Tabs
        value={tab}
        onChange={onNavigationChange}
        aria-label="form steps tabs"
      >
        <Tab value={1} label="Sobre" />
        <Tab value={2} label="Contato" />
        <Tab value={3} label="Mensagem" />
        <Tab value={4} label="Confirmacao" />
      </Tabs>
    </Box>
  ) : null;

  return navigation;
}

Navigation.propTypes = {
  shouldRender: PropTypes.bool,
  tab: PropTypes.number,
  onNavigationChange: PropTypes.func
};

export default Navigation;
