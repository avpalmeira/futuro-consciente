import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@material-ui/core";
import { Facebook, Twitter, WhatsApp } from "../components/social";
import styles from "../styles";
import { getDeliveryDate } from "../utils/DateHelper";

const ThankYou = props => {
  const { _name, _deliveryDate, _isAfterPandemic } = props.values;
  const deliveryDate = getDeliveryDate(_isAfterPandemic, _deliveryDate);

  return (
    <Container style={styles.container}>
      <Typography variant="body1" style={styles.thankYouTitle} gutterBottom>
        Obrigado, {_name}!
      </Typography>

      <Box style={styles.thankYouInfo}>
        <Typography variant="body1" gutterBottom>
          Sua mensagem foi agendada para daqui a:
          <br />
          {deliveryDate}
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Por favor, verifique sua caixa de entrada se chegou um e-mail de
          confirmacao.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Agora é só aguardar para sua mensagem chegar. Espero que isto o
          auxilie no seu caminho de auto-conhecimento!
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1" style={styles.shareInfo} gutterBottom>
          Se voce acredita que a Carta do Futuro pode ser útil para outras
          pessoas, compartilhe em suas redes sociais preferidas:
        </Typography>
        <br />
        <Box style={styles.socialIcons}>
          <WhatsApp />
          <Facebook />
          <Twitter />
        </Box>
      </Box>
    </Container>
  );
};

ThankYou.propTypes = {
  values: PropTypes.object
};

export default ThankYou;
