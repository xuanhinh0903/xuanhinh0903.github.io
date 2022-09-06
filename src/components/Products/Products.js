import css from './Products.module.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import { React, useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Sliders from '../Sliders/Sliders';
function Products(props) {
    const location = useLocation();
    const { type } = location.state;
    const { productId } = useParams();
    const [data, setDatas] = useState([]);
    const [amount, setAmount] = useState(1);
    const [test, setTest] = useState(false);
    const n = 0;
    window.scrollTo(0, 0);
    const handleTest = (e) => {
        const listItem = {
            id: uuid(),
            index: n + 1,
            name: e.name,
            price: e.price,
            image: e.image,
            number: amount,
        };

        // var xhttp = new XMLHttpRequest();
        // xhttp.open('POST', 'https://json-server-demo-project.herokuapp.com');
        // xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // var data = `id=${uuid()}&name=${e.name}&price=${e.price}&image=${e.image}&index=${n + 1}&number=${amount}`;
        // xhttp.send(data);
        // xhttp.onload = function () {
        //     if (xhttp.status >= 200 && xhttp.status < 400) {
        //         console.log('thành công');
        //     } else {
        //         console.log('thất bại');
        //     }
        // };

        // axios.request

        const postData = async () => {
            const res = await axios
                .post(`https://json-server-demo-project.herokuapp.com/cart`, listItem, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((res) => {
                    if (res.status >= 200 && res.status < 400) {
                        setTest(true);
                    }
                })
                .catch((err) => {
                    setTest(false);
                });
        };
        postData();
    };

    const handleUp = (e) => {
        setAmount((prev) => prev + 1);
    };
    const handleDown = (e) => {
        if (amount > 1) {
            setAmount((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const res = await axios(`https://json-server-demo-project.herokuapp.com/All`);
            setDatas(res.data);
        };
        getData();
    }, []);

    return (
        <>
            {data.map((newData, index) =>
                newData.id.toString() === productId ? (
                    <div key={index}>
                        <div className="underlineFull"></div>
                        <div className={css.infomation}>
                            <Link to="/" className={css.nameHome}>
                                Trang chủ
                            </Link>
                            <span className="slash">/</span>
                            <div className={css.nameTag}>{newData.name}</div>
                        </div>
                        <div className={css.detail}>
                            <img className={css.img} src={newData.image} />
                            <div className={css.pay}>
                                <div className={css.namePay}>{newData.name}</div>
                                <div className={css.pricePay}>{newData.price}.000đ</div>
                                <div className={css.line}></div>
                                <div className={css.contentUpdate}>Nội dung đang cập nhật</div>
                                <div className={css.line}></div>
                                <div className={css.serviceProduct}>
                                    <div className={css.paymentUnit}>
                                        <img
                                            className={css.icon}
                                            src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/icon_service_product_1.svg?1655256672925"
                                        ></img>
                                        <div className={css.ship}>Giao hàng toàn quốc</div>
                                    </div>
                                    <div className={css.paymentUnit}>
                                        <img
                                            className={css.icon}
                                            src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/icon_service_product_2.svg?1655256672925"
                                        ></img>
                                        <div className={css.ship}>Cách thức thanh toán</div>
                                    </div>
                                </div>
                                <div className={css.line}></div>
                                <div className={css.counts}>
                                    <div className={css.count}>
                                        <span onClick={handleDown} className={css.down}>
                                            –
                                        </span>
                                        <span className={css.value}>{amount}</span>
                                        <span onClick={handleUp} className={css.up}>
                                            +
                                        </span>
                                    </div>
                                </div>
                                {test === true ? (
                                    <button
                                        onClick={() => {
                                            handleTest(newData);
                                        }}
                                        className={css.addCart}
                                    >
                                        Thêm hàng thành công!!
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            handleTest(newData);
                                        }}
                                        className={css.addCart}
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Fragment key={index}></Fragment>
                ),
            )}
            <Sliders type={type} />
        </>
    );
}

export default Products;
