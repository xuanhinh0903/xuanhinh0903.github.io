import { Fragment } from 'react';
import GetListData from '../../components/Layout/GetListsData/index';
import css from './index.module.css';
function Home() {
    return (
        <>
            <div className={css.container}>
                {/* banner */}
                <Fragment>
                    <img
                        className={css.imgBanner}
                        src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/slider_3.jpg?1655256672925"
                    ></img>
                </Fragment>
                {/* Category */}
                <Fragment>
                    <h1 className={css.TextCenter}>DANH MỤC SẢN PHẨM</h1>
                    <div className="underline"></div>
                    <div className={css.categorys}>
                        <div className={css.Category}>
                            <div className={css.cate1s}>
                                <img
                                    className={css.cate1}
                                    src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/cate_1.jpg?1655256672925"
                                ></img>
                                <div className={css.cateOverlay}></div>
                                <div className={css.cateInfo1}>
                                    <h1 className={css.cateText1}>Varsity Jacket</h1>
                                    <a>Xem thêm{'-->'}</a>
                                </div>
                            </div>
                            <div className={css.cate2s}>
                                <img
                                    className={css.cate2}
                                    src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/cate_3.jpg?1655256672925"
                                ></img>
                                <div className={css.cateInfo2}>
                                    <h1 className={css.cateText2}>Hoddie</h1>
                                    <a>Xem thêm{'-->'}</a>
                                </div>
                            </div>
                        </div>
                        <div className={css.Category}>
                            <div className={css.cate3s}>
                                <img
                                    className={css.cate3}
                                    src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/cate_2.jpg?1655256672925"
                                ></img>
                                <div className={css.cateInfo3}>
                                    <h1 className={css.cateText3}>Cardigans</h1>
                                    <a>Xem thêm{'-->'}</a>
                                </div>
                            </div>
                            <div className={css.cate4s}>
                                <img
                                    className={css.cate4}
                                    src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/cate_4.jpg?1655256672925"
                                ></img>
                                <div className={css.cateInfo4}>
                                    <h1 className={css.cateText4}>Baseball Jacket</h1>
                                    <a>Xem thêm{'-->'}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
                {/* List data */}
                <Fragment>
                    <GetListData />
                </Fragment>
                {/* Information */}
                <Fragment>
                    <div className={css.container__info}>
                        <h1 className={css.TextCenter}>TIN TỨC</h1>
                        <div className="underline"></div>
                        <div className={css.Informations}>
                            <div className={css.Information}>
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/448/472/articles/291878625-564477785151876-2270185994304182409-n.jpg?v=1657442177877"
                                    className={css.img}
                                />
                                <p className={css.text}>[ TUYỂN DỤNG ] SALE STAFF HÀ NỘI</p>
                                <p className={css.time}>10/07/2022</p>
                                <p className={css.textDetail}>
                                    [ TUYỂN DỤNG ] SALE STAFF HÀ NỘI Số lượng: 2 Địa điểm làm việc: Hà Nội Sale staff là
                                    người chịu trách nhiệ...
                                </p>
                            </div>

                            <div className={css.Information}>
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/448/472/articles/291878625-564477785151876-2270185994304182409-n.jpg?v=1657442177877"
                                    className={css.img}
                                />
                                <p className={css.text}>[ TUYỂN DỤNG ] VIDEO CONTENT CREATOR</p>
                                <p className={css.time}>20/06/2022</p>
                                <p className={css.textDetail}>
                                    VỊ TRÍ: VIDEO CONTENT CREATOR Video Content Creator là người chịu trách nhiệm làm
                                    việc chung với team media để ...
                                </p>
                            </div>

                            <div className={css.Information}>
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/448/472/articles/291878625-564477785151876-2270185994304182409-n.jpg?v=1657442177877"
                                    className={css.img}
                                />
                                <p className={css.text}>SBLS® MEMBER CARD 2022</p>
                                <p className={css.time}>10/06/2022</p>
                                <p className={css.textDetail}>
                                    Chương trình Membership tại Symbolic. Studio chính thức được phát hành nhằm tri ân
                                    khách hàng quen thuộc, nâng cao c...
                                </p>
                            </div>
                        </div>
                        <div className={css.logos}>
                            <img
                                className={css.logo}
                                src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/brand1.jpg?1655256672925"
                            ></img>
                            <img
                                className={css.logo}
                                src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/brand2.jpg?1655256672925"
                            ></img>
                            <img
                                className={css.logo}
                                src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/brand3.jpg?1655256672925"
                            ></img>
                            <img
                                className={css.logo}
                                src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/brand4.jpg?1655256672925"
                            ></img>
                        </div>
                    </div>
                </Fragment>
            </div>
        </>
    );
}

export default Home;
