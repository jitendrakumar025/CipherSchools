import React ,{useContext} from 'react'
import { Box,IconButton,Typography,useTheme } from '@mui/material'
import { ColorModeContext,tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import { LightModeOutlined ,DarkModeOutlined,NotificationAddOutlined,Person2Outlined,SearchOutlined,FilterListOutlined} from '@mui/icons-material'

function Topbar() {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const colorMode= useContext(ColorModeContext);
  return (
    <Box  display="flex" className="navBox" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box  display="flex" ml="10px" alignItems="center" >
            <img height="35px" width="35px" src="../../assets/logo.png" alt="" srcset="" />
            <Typography variant="h4" ml="7px" color={colors.grey[100]}>
                  CipherSchools
            </Typography>
        <Box  display="flex" className="nav-link-left" alignItems="center">
            <span variant="h6" color={colors.grey[100]}>
                  Browse
            </span>
            <img height="15px" width="13px" ml src="../../assets/BottomArrow.svg" alt="" srcset="" />
        </Box>
        </Box>
        <Box className="nav-right">

        <Box  display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
           <IconButton>
              <SearchOutlined/>
            </IconButton>          
          <InputBase sx={{ml:2,flex:1}} placeholder="Search" />
          <IconButton>
              <FilterListOutlined/>
            </IconButton>   
        </Box>
         <Box  display="flex" justifyContent="space-evenly" >
          <IconButton title='Notification'>
            <NotificationAddOutlined/>
          </IconButton>
          <IconButton>
           <Person2Outlined/>
          </IconButton>
          <div className='top-right' title='CipherPoint:00'>
            <img  src="../../assets/WatchPoints.svg" alt="" srcset="" />
            <div className='clipherpoints'>
                <span>0</span>
            </div>
          </div>
          <IconButton sx={{mx:1}} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode==="dark"?(
                <DarkModeOutlined/>
                ):(<LightModeOutlined/> )}
                </IconButton>
         </Box>
    </Box>
    </Box>

  )
}

export default Topbar