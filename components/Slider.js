import Carousel from 'react-material-ui-carousel'
export default function Slider() {
    return (

        <Carousel className="opacity-75" sx={{ height: { xs: 200, md: 600 } }} animation="slide" interval={5000}>
            <img
                src="https://media.istockphoto.com/vectors/creation-responsive-internet-website-for-multiple-platforms-building-vector-id1058262630?k=20&m=1058262630&s=612x612&w=0&h=3DXTZqrusjsv2xJd4eFjeFHs-QFWpUWtQT6rhMjqSX0="
                className="w-full"
                height={20}
                alt="Wild Landscape" />
            <img
                src="https://www.wallpapertip.com/wmimgs/160-1606771_beefhouse.jpg"
                className="w-full"
                alt="Camera"
            />
            <img
                src="https://wallpaperaccess.com/full/1385324.jpg"
                className="w-full"
                alt="Exotic Fruits"
            />

        </Carousel>


    )
}
