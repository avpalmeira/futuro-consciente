import React from "react";
import { Helmet } from "react-helmet";

export default function FacebookMetatags() {
  const description =
    "Envie uma mensagem para voce do futuro e entenda melhor sobre voce mesmo";

  return (
    <Helmet>
      <meta property="og:url" content={process.env.REACT_APP_SITE_LINK} />
      <meta property="og:title" content="Futuro - Mais Consciente" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
