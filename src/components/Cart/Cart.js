import css from './Cart.module.css';
import ImgDelete from '../../../src/delete.svg';
import axios from 'axios';
import { React, useContext, useEffect, useState } from 'react';
import { Fragment } from 'react';
function Cart() {
    const [datas, setDatas] = useState([]);
    const [amounts, setAmount] = useState([]);
    const [sum, setSum] = useState(0);
    const arrayLength = datas.length;

    const checkData = () => {
        const getData = async () => {
            const res = await axios(`https://json-server-demo-project.herokuapp.com/cart`);
            setDatas(res.data);
        };
        getData();
    };
    useEffect(() => {
        checkData();
    }, [sum]);
    const total = datas.reduce(function (acc, cur) {
        return acc + cur.price * cur.number;
    }, 0);
    const handleDelete = (e) => {
        const n = 0;
        axios.delete(`https://json-server-demo-project.herokuapp.com/cart/${e.id}`).then(() => {
            setDatas(
                datas.filter((data) => {
                    return data.id !== e.id;
                }),
            );
        });
    };

    return (
        <div className={css.all}>
            <div className="underlineFull"></div>
            <div className={css.gt}>Trang chủ / Giỏ hàng</div>
            <p className={css.cartRes}>Giỏ Hàng</p>
            {arrayLength <= 0 ? (
                <div>
                    <div className="underlineFull"></div>
                    <h4 className={css.arrayEmpty}>{'Chưa có sản phẩm trong giỏ hàng'}</h4>
                </div>
            ) : (
                datas?.map((data) => (
                    <div key={data.id}>
                        <div className={css.underlineFull}></div>
                        <div className={css.home}>
                            <div className={css.listName}>
                                <p className={`${css.item} ${css.itemName1}`}>Ảnh sản phẩm</p>
                                <p className={`${css.item} ${css.itemName2}`}>Tên sản phẩm</p>
                                <p className={`${css.item} ${css.itemName3}`}>Giá sản phẩm</p>
                                <p className={`${css.item} ${css.itemName3}`}>Số lượng</p>
                                <p className={`${css.item} ${css.itemName3}`}>Thành tiền</p>
                                <p className={`${css.item} ${css.itemName3}`}>Xóa</p>
                            </div>
                            <div className={css.listProduct}>
                                <img src={data.image} className={`${css.img} ${css.item} ${css.itemName1}`} />
                                <p className={`${css.item} ${css.itemName2}`}>{data.name}</p>
                                <div className={`${css.item} ${css.itemName3}`}>{data.price}.000đ</div>
                                <div className={css.count}>
                                    <span className={css.value}>{data.number}</span>
                                </div>
                                <div className={`${css.item} ${css.itemName3}`}>
                                    {(data.number * data.price).toLocaleString('it')}.000đ
                                </div>
                                <div
                                    onClick={() => {
                                        handleDelete(data);
                                    }}
                                    className={`${css.item} ${css.itemName3}`}
                                >
                                    <img src={ImgDelete} className={`${css.delete}`}></img>
                                </div>
                            </div>
                        </div>

                        <div className={css.homeRes}>
                            <img src={data.image} className={css.imgRes} />
                            <div className={css.allRes}>
                                <div className={css.c1Res}>
                                    <p className={css.nameRes}>{data.name}</p>
                                    <span className={css.pricesRes}>
                                        <span className={css.textPriceRes}>Giá</span>{' '}
                                        <p className={css.priceRes}> : {data.price}.000đ</p>
                                    </span>
                                </div>
                                <div className={css.numberres}>
                                    <p className={css.countRes}>
                                        <span className={css.textRes}>Số lượng</span> :{' '}
                                        <span className={css.textNumber}>{data.number}</span>
                                    </p>
                                    <button
                                        onClick={() => {
                                            handleDelete(data);
                                        }}
                                        className={css.buttonRes}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
            {arrayLength <= 0 ? (
                <></>
            ) : (
                <>
                    <div className={css.allPrice}>Tổng giá trị : {total.toLocaleString('it')}.000đ</div>
                    <div className={css.submit}>Thanh toán</div>
                </>
            )}
        </div>
    );
}

export default Cart;
