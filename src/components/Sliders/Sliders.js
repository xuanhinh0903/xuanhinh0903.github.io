import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import css from './Sliders.module.css';

function Sliders(props) {
    const [datas, setDatas] = useState([]);
    // if (props.type === undefined) {
    //     props.type = 'All';
    // }
    useEffect(() => {
        const getData = async () => {
            const res = await axios(`https://json-server-demo-project.herokuapp.com/${props.type}`);
            setDatas(res.data);
        };
        getData();
    }, []);
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 8,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className={css.home}>
            <div className={css.introduce}>SẢN PHẨM TƯƠNG TỰ</div>
            <div className={css.line}></div>
            <div className={css.container}>
                <Slider {...settings}>
                    {datas.map((data, index) => (
                        <Link
                            to={`/products/${data.id}`}
                            state={{ type: data.type }}
                            className={css.item}
                            id={data.id}
                            key={index}
                            type={data.type}
                        >
                            <div className={css.border__img}>
                                <img className={css.image} src={data.image} />
                            </div>
                            <p className={css.name}>{data.name}</p>
                            <p className={css.price}>{data.price}.000đ</p>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Sliders;
