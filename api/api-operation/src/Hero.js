import React from 'react';
import Hero1 from './image/1.jpg'
import Hero2 from './image/2.jpg'
import Hero3 from './image/3.jpg'
import Hero4 from './image/4.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div style={styles.heroContainer}>
            <Slider {...settings}>
                <img src= {Hero1} alt="Slide 1" />
                <img src={Hero2} alt="Slide 2" />
                <img src= {Hero3} alt="Slide 3" />
                <img src= {Hero4} alt="Slide 3" />

            </Slider>

            {/* <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to ShopEasy</h1>
        <p style={styles.subText}>Discover the best deals and top-rated products!</p>
      </div> */}
        </div>
    );
};

const styles = {
    heroContainer: {

        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        borderRadius: '10px',
        marginBottom: '20px', paddingTop: '20px'

    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subText: {
        fontSize: '1.2rem',
    },
};

export default Hero;
