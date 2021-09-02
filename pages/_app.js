import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global/GlobalStyle';
import Typography from '../src/styles/global/Typography';
import Theme from '../src/styles/global/Theme';
import Header from '../src/components/Header/Header';

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