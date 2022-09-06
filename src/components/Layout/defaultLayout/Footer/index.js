import { Fragment } from 'react';
import css from './index.module.css';
function Footer() {
    return (
        <Fragment>
            <div className={css.contactEmail}>
                <p className={css.contactText}>NHẬN THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI</p>
                <div className={css.importtext}>
                    <input className={css.inputText} placeholder="Nhập email của bạn tại đây"></input>
                    <span className={css.submit}>Gửi</span>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.lists}>
                    <img
                        className={css.logo}
                        src="https://bizweb.dktcdn.net/100/448/472/themes/852542/assets/logo_footer.png?1655256672925"
                    />
                    <div className={css.itemAdd}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <rect width="36" height="36" fill="#000"></rect>
                            <g clipPath="url(#clip_ad_f)">
                                <path
                                    d="M18.0001 8.4707C13.9044 8.4707 10.5884 11.8057 10.5884 15.9249C10.5884 21.1417 14.6217 25.3759 18.0001 27.5295C21.3786 25.3759 25.4119 21.1417 25.4119 15.9249C25.4119 11.8057 22.0958 8.4707 18.0001 8.4707ZM18.0001 19.5108C16.0251 19.5108 14.4346 17.9008 14.4346 15.9249C14.4346 13.9489 16.0355 12.3389 18.0001 12.3389C19.9648 12.3389 21.5657 13.9489 21.5657 15.9249C21.5657 17.9008 19.9752 19.5108 18.0001 19.5108Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip_ad_f">
                                    <rect
                                        width="14.8235"
                                        height="19.0588"
                                        fill="white"
                                        transform="translate(10.5884 8.4707)"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={css.text}>436/31 Cách Mạng Tháng 8, P11, Quận 3, TP HCM</p>
                    </div>

                    <div className={css.itemAdd}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <rect width="36" height="36" fill="#000"></rect>
                            <g clipPath="url(#clip_t_f)">
                                <path
                                    d="M18.0001 8.4707C12.7454 8.4707 8.4707 12.7454 8.4707 18.0001C8.4707 23.2548 12.7454 27.5295 18.0001 27.5295C23.2548 27.5295 27.5295 23.2548 27.5295 18.0001C27.5295 12.7454 23.2548 8.4707 18.0001 8.4707ZM22.5322 22.9291C22.3773 23.084 22.174 23.1619 21.9708 23.1619C21.7675 23.1619 21.564 23.084 21.4093 22.9291L17.4387 18.9586C17.2894 18.8102 17.206 18.6084 17.206 18.3972V13.2354C17.206 12.7963 17.5617 12.4413 18.0001 12.4413C18.4385 12.4413 18.7942 12.7963 18.7942 13.2354V18.0685L22.5322 21.8063C22.8426 22.1169 22.8426 22.6187 22.5322 22.9291Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip_t_f">
                                    <rect
                                        width="19.0588"
                                        height="19.0588"
                                        fill="white"
                                        transform="translate(8.4707 8.4707)"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={css.text}>
                            Giờ làm việc: Từ 9:00 đến 21:30 các ngày trong tuần từ Thứ 2 đến Chủ nhật
                        </p>
                    </div>

                    <div className={css.itemAdd}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <rect width="36" height="36" fill="#000"></rect>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.2145 16.99C15.4027 16.7084 15.5853 16.433 15.7735 16.1514C16.418 15.1844 16.3952 15.4965 15.9503 14.4132C15.5681 13.489 15.1803 12.5709 14.7981 11.6467C14.4388 10.7898 14.4787 10.6429 13.4805 10.594C13.1097 10.5695 12.7561 10.6246 12.4994 10.7776C11.6552 11.2917 10.8966 12.5709 10.6685 13.6665C9.68168 20.1665 18.0094 27.8784 24.8998 27.5173C25.8695 27.4194 26.7935 26.5686 27.1985 25.5281C27.324 25.1548 27.4038 24.7631 27.4552 24.3652C27.6206 23.1105 27.5864 23.3737 26.5425 22.8106C25.6984 22.3577 24.8542 21.8987 24.0043 21.4457C23.1943 21.005 23.3826 20.8949 22.8065 21.5804C22.4243 22.0333 22.0478 22.4801 21.6657 22.933C21.158 23.5328 21.3177 23.5084 20.5819 23.2207C18.3346 22.3516 16.0701 20.595 15.0719 18.0549C14.8209 17.4062 14.8495 17.5408 15.2145 16.99Z"
                                fill="white"
                            ></path>
                        </svg>
                        <p className={css.text}>HOTLINE:0393137233</p>
                    </div>
                </div>

                <div className={`${css.listss} `}>
                    <div className={css.listsitem}>
                        <div className={css.Us}>Về chúng tôi</div>
                        <div className={css.UsItem}>Trang chủ</div>
                        <div className={css.UsItem}>Giới thiệu</div>
                        <div className={css.UsItem}>Sản phẩm</div>
                    </div>

                    <div className={css.listsitem}>
                        <div className={css.Us}>Hỗ trợ khách hàng</div>
                        <div className={css.UsItem}>Tìm kiếm</div>
                        <div className={css.UsItem}>Đăng nhập</div>
                        <div className={css.UsItem}>Đăng ký</div>
                        <div className={css.UsItem}>Giỏ hàng</div>
                    </div>

                    <div className={css.listsitem}>
                        <div className={css.Us}>Chính sách</div>
                        <div className={css.UsItem}>Tìm kiếm</div>
                        <div className={css.UsItem}>Đăng nhập</div>
                        <div className={css.UsItem}>Đăng ký</div>
                        <div className={css.UsItem}>Giỏ hàng</div>
                    </div>
                </div>
            </div>
            <div className={css.underline}></div>
            <p className={css.fullText}>@Bản quyền của Xuân Hinh</p>
        </Fragment>
    );
}

export default Footer;
