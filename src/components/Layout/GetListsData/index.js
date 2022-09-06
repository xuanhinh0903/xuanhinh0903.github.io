import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import css from './index.module.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Products from '../../Products/Products';

function GetListData() {
    const listName = ['All', 'Top', 'Button', 'Accessories'];
    const [type, setType] = useState('All');
    const [datas, setDatas] = useState([]);
    const [dataUpdates, setDataUpdates] = useState(4);
    const datasNew = datas.filter(function (res) {
        return res.index <= dataUpdates;
    });

    useEffect(() => {
        const getData = async () => {
            const res = await axios(`https://json-server-demo-project.herokuapp.com/${type}`);
            setDatas(res.data);
            setDataUpdates(4);
        };
        getData();
    }, [type]);
    const handleCheck = () => {
        setDataUpdates((res) => res + 4);
    };

    return (
        <div>
            <h1 className={css.TextCenter}>TOP SẢN PHẨM BÁN CHẠY</h1>
            <div className="underline"></div>
            <div className={css.listItem}>
                {listName.map((item, index) => (
                    <div
                        className={css.itemItem}
                        onClick={() => setType(item)}
                        key={index}
                        style={type === item ? { backgroundColor: '#000', color: '#fff' } : {}}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className={css.lists}>
                <div className={css.list}>
                    {datasNew.map((data, index) => (
                        <Link
                            to={`/products/${data.id}`}
                            state={{ type: type }}
                            className={css.item}
                            key={data.id}
                            id={data.id}
                        >
                            <div className={css.product}>
                                <img className={css.img} src={data.image}></img>
                            </div>
                            <div className={css.name}>{data.name}</div>
                            <div className={css.price}>{data.price}.000đ</div>
                        </Link>
                    ))}
                </div>
            </div>

            {datasNew.length < 4 && datasNew.length == datasNew.length ? (
                <></>
            ) : (
                <div className={css.button} onClick={handleCheck}>
                    Xem thêm
                </div>
            )}
        </div>
    );
}

export default GetListData;
