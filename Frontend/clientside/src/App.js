import './App.css';
import { Profile } from './components/Profile';
import Navbar from './scenes/global/Navbar';
import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider  } from "@mui/material";


function App() {

  const [theme,colorMode]=useMode();

  return (
    <ColorModeContext.Provider value={colorMode }>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'>
      {/* <Sidebar/> */}
      <main>
        <Navbar/>
        <Profile/>
     {/* <Routes>      
     </Routes> */}

      </main>
    
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
