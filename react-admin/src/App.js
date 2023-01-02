import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Calendar from './scenes/calendar'
import Form from './scenes/form'
import Bar from './scenes/bar'
import Line from './scenes/line'
import Pie from './scenes/pie'
import Geography from './scenes/geography'


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
        <div className="app">
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/line' element={<Line/>} />
              {/* <Route path='/faq' element={<Faq/>} /> */}
              <Route path='/geography' element={<Geography/>} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  )
}



export default App;
