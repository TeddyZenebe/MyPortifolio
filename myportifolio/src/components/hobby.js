import React from 'react';
import Slider from 'react-animated-slider';
import coding from '../img/coding.gif';
import soccer from '../img/soccer.gif';
import book from '../img/book.gif';
import swimming from '../img/swimming.gif';
import '../App.css';
import 'react-animated-slider/build/vertical.css';
import 'normalize.css/normalize.css';
const content = [
    {
        title: 'Coding and Designing',
        description: 'Coding is my day to day activity that I loved doing it. I do relax by creating different designs and learning new programing languages.',
        image: `url(${coding})`
    },
    {
        title: 'Soccer',
        description: 'I love Watching and playing soccer during weekends.',
        image: `url(${soccer})`
    },
    {
        title: 'Reading Books',
        description: 'Reading scientific and novel books are my hobby. ',
        image: `url(${book})`
    },
    {
        title: 'Swimming ',
        description: 'I am not very good in swimming but I love going to pool once a week with my family',
        image: `url(${swimming})`
    }
];

const Hobby = () => {
    return (
        <div className="hobby-wrapper">
            <Slider
                autoplay={3000}
                direction="vertical"
                nextButton="next"
                className="slider-wrapper"
            >
                {content.map((item, index) => (
                    <div

                        key={index}
                        className="slider-content"
                        style={{
                            background: `${item.image} no-repeat center center`
                        }}
                    >
                        <div className="inner">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hobby;