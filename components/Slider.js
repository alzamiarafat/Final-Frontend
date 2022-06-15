import Carousel from 'react-material-ui-carousel'
import { height } from 'tailwindcss/defaultTheme'

export default function Slider() {
    return (

        <Carousel className="opacity-75" sx={{ height: { xs: 200, md: 600 } }} animation="slide" interval={5000}>
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                className="w-full"
                alt="Wild Landscape" />
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="w-full"
                alt="Camera"
            />
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="w-full"
                alt="Exotic Fruits"
            />

        </Carousel>


    )
}
