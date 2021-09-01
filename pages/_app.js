import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import Typography from '../src/styles/Typography';
import Theme from '../src/styles/Theme';
import Header from '../src/components/Header';

export default function App({ Component, pageProps }){
  return(
    <>
      <ThemeProvider theme={Theme}>
        <Typography />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}