import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Slider from "../components/Slider"
import Testimonial from "../components/Testimonial"
import Work from "../components/Work"




export default function Home() {
  return (
    <>
      <Layout>
        <Slider />
        <Work />
        <Portfolio />
        <Testimonial />
      </Layout>
    </>
  )
}
