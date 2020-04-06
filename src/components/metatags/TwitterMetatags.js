import React from "react";
import { Helmet } from "react-helmet";

export default function TwitterMetatags() {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@maisconsciente" />
    </Helmet>
  );
}
