import { ThemeProvider } from '@mui/material/styles';
import Main from '../../main/Main';
import { darkTheme } from '../style/darkTheme';


const AppCore = () => {


    return <ThemeProvider theme={darkTheme}>
        <Main />
    </ThemeProvider>
}

export default AppCore