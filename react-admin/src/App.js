<<<<<<< HEAD
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material"


function App() {
  const [theme, colorMode] = useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content"></main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
=======
import Topbar from './scenes/global/Topbar'


function App() {
  return (
    <div className="app">
      <Topbar />
    </div>
>>>>>>> 044290fdebbfba9565bec2479d74c2cdc8404bfe
  );
}

export default App;
