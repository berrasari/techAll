import '../styles/globals.css'
import Layout from "../components/Layout"


function MyApp({ Component, pageProps }) {

  return <><div className="max-w-full ">
  {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
  <Layout>{<Component {...pageProps} /> }</Layout>
</div></>
}

export default MyApp
