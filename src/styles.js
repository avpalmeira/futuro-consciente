const styles = {
  pageContent: {
    position: "relative",
    paddingBottom: 50,
    boxSizing: "border-box",
    minHeight: "100vh"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 700,
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 30
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    maxWidth: 105,
    alignSelf: "center"
  },
  buttonConfirm: {
    backgroundColor: "#4caf50"
  },
  logo: {
    maxWidth: 200,
    height: "100%",
    padding: 20,
    marginRight: "auto",
    marginLeft: "auto"
  },
  appBar: {
    backgroundColor: "white"
  },
  tabsWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: 30
  },
  b: {
    fontWeight: 600
  },
  confirmText: {
    paddingBottom: 30
  },
  thankYouTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700
  },
  thankYouInfo: {
    textAlign: "center",
    padding: 40,
    paddingLeft: "20%",
    paddingRight: "20%"
  },
  shareInfo: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: "10%",
    paddingRight: "10%",
    marginBottom: 20
  },
  socialIcons: {
    display: "flex",
    maxWidth: 300,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between"
  },
  socialIcon: {
    fontSize: "2rem"
  },
  validationError: {
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    color: "#f50057"
  },
  footerLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 700,
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10
  },
  footerLink: {
    color: "black",
    opacity: 0.7,
    textDecoration: "none"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTop: "1px solid gray"
  }
};

export default styles;
