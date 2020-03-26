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
import PropTypes from "prop-types";
import styles from "./styles";
import FormValidator from "../helpers/FormValidator";

function FutureMessage(props) {
  const { next, prev, values, handleChange, validation } = props;

  const validator = new FormValidator([
    {
      field: "_message",
      method: "isEmpty",
      validWhen: false,
      message: "A mensagem é obrigatória"
    },
    {
      field: "_deliveryDate",
      method: FormValidator.isValidDate,
      validWhen: true,
      message: "Insira uma data válida"
    }
  ]);

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
        defaultValue={values._message}
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
            checked={values._isAfterPandemic}
            color="primary"
            name="_isAfterPandemic"
            onChange={e => handleChange(null, e)}
            inputProps={{ "aria-label": "check option to send after pandemic" }}
          />
          <Typography style={{ marginLeft: 10 }}>
            {values._isAfterPandemic ? "Sim" : null}
          </Typography>
        </Grid>
      </Grid>

      <br />

      {!values._isAfterPandemic ? (
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
          <Grid
            item
            sm={6}
            xs={9}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography>Deseja enviar entao na seguinte data:</Typography>
          </Grid>
          <Grid item sm={6} xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                autoOk={true}
                disablePast={true}
                error={false}
                helperText={false}
                variant="inline"
                name="_deliveryDate"
                format="dd/MM/yyyy"
                label="Insira a data de envio"
                value={values._deliveryDate}
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

      <br />

      <Box>
        <Button
          color="primary"
          variant="contained"
          style={{ marginRight: 20 }}
          onClick={prev}
        >
          Anterior
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={e => next(validator, e)}
        >
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
  values: PropTypes.object,
  validation: PropTypes.object
};

export default FutureMessage;
