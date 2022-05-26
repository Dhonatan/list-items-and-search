import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      color: '#808080',
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
      lineHeight: '1.8rem',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      variant: 'outlined',
      elevation: 0,
    },
  },
  shape: {
    borderRadius: 3,
  },
  palette: {
    common: {
      black: '#555',
    },
    primary: {
      light: '#d14d7d',
      main: '#00f2ea',
      contrastText: '#fff',
    },
    secondary: {
      light: '#777777',
      main: '#555',
      dark: '#3b3b3b',
    },
    text: {
      primary: '#555',
    },
    success: {
      light: '#aed581',
      main: '#8bc34a',
      dark: '#558b2f',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiFab: {
      root: {
        boxShadow: 'none !important',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '30px !important',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '12.5px'
      },
    }
  },
})
