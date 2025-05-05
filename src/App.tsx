import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";
import googleAnalyticsTool from "./lib/utils/googleAnalyticsTool";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import clarityTool from "./lib/utils/clarityAnalyticsTool";

function App() {
  useEffect(() => {
    clarityTool;
    googleAnalyticsTool.page(); // Registra la vista de página inicial
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routings />
          <VercelAnalytics />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
