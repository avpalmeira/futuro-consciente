import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
  Switch
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { addWeeks } from "date-fns";
import PropTypes from "prop-types";
import styles from "../../styles";

function FutureMessage(props) {
  const { next, prev, values, handleChange } = props;
  const { validation, _message, _isAfterPandemic, _deliveryDate } = values;
  // beware: this is a duplicate. this variable is also set in validators
  const minDeliveryDate = addWeeks(new Date(), 1);

  return (
    <Container style={styles.container}>
      <TextField
        placeholder="Escreva sua mensagem"
        label="Mensagem para voce do Futuro"
        name="_message"
        onChange={e => handleChange(null, e)}
        multiline
        rows="3"
        variant="outlined"
        defaultValue={_message}
      />

      {validation._message && validation._message.isInvalid ? (
        <p style={styles.validationError}>{validation._message.message}</p>
      ) : null}

      <br />

      <Grid container spacing={2} style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid
          item
          sm={6}
          xs={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>
            Deseja que a mensagem seja enviada após o surto do COVID-19?
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          xs={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Switch
            checked={_isAfterPandemic}
            color="primary"
            name="_isAfterPandemic"
            onChange={e => handleChange(null, e)}
            inputProps={{ "aria-label": "check option to send after pandemic" }}
          />
          <Typography style={{ marginLeft: 10 }}>
            {_isAfterPandemic ? "Sim" : null}
          </Typography>
        </Grid>
      </Grid>

      <br />

      {!_isAfterPandemic ? (
        <Grid container spacing={2}>
          <Grid
            item
            sm={6}
            xs={9}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography>Ou deseja enviar na seguinte data:</Typography>
          </Grid>
          <Grid item sm={6} xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                autoOk={true}
                disablePast={true}
                minDate={minDeliveryDate}
                error={false}
                helperText={false}
                variant="inline"
                name="_deliveryDate"
                format="dd/MM/yyyy"
                label="Insira a data de envio"
                value={_deliveryDate}
                onChange={handleChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
            {validation._deliveryDate && validation._deliveryDate.isInvalid ? (
              <p style={styles.validationError}>
                {validation._deliveryDate.message}
              </p>
            ) : null}
          </Grid>
        </Grid>
      ) : null}

      <Box style={styles.buttons}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginRight: 20 }}
          onClick={prev}
        >
          Anterior
        </Button>

        <Button color="primary" variant="contained" onClick={next}>
          Próximo
        </Button>
      </Box>
    </Container>
  );
}

FutureMessage.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object
};

export default FutureMessage;
