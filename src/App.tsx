import Main from "components/pages/Main";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Main />
    </StyledEngineProvider>
  );
}

export default App;
