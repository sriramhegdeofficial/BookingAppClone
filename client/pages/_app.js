import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { PageStateWrapper } from "../shared/context/pagestate";

function MyApp({ Component, pageProps }) {
  return (
    <PageStateWrapper>
      <Component {...pageProps} />
    </PageStateWrapper>
  );
}

export default MyApp;
