import React from "react";
import FacebookMetatags from "./FacebookMetatags";
import TwitterMetatags from "./TwitterMetatags";

export default function SocialNetworkMetatags() {
  return (
    <div id="social-metatags">
      <FacebookMetatags />
      <TwitterMetatags />
    </div>
  );
}
