import "../styles/globals.scss"
import type { AppProps } from "next/app"
import MainPageLayout from "../components/MainPageLayout/MainPageLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainPageLayout>
      <Component {...pageProps} />
    </MainPageLayout>
  )
}

export default MyApp
