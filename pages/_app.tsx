// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Ejecutando el archivo pages/_app.tsx'); //Extrañamente ejecuta en la consola delbrowser y la terminal del server.!
  return <Component {...pageProps} />
}

export default MyApp
