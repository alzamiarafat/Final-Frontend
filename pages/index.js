import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Slider from "../components/Slider"
import Work from "../components/Work"



export default function Home() {
  return (
    <>
      <Layout>
        <Slider />
        <Work />
        <Portfolio />
      </Layout>
    </>
  )
}
