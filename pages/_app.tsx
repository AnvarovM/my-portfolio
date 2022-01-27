import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

// style
import '../styles/globals.css';
import '../styles/home.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-my-lightBg dark:bg-my-darkBg'>
      <Head>
        {/* Monda */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
