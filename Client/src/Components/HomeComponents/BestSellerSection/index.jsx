import React from 'react'
import './index.scss'


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




import { Pagination } from 'swiper/modules';
const BestSeller = () => {
    return (
        <>
            <section id='BestSeller'>
                <div className="BestSellerArea">
                    <div className="BestSellersText">
                        <p>Popular Item in the market</p>
                        <h1>Best Sellers</h1>
                    </div>

                </div>
               
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    // breakpoints: {
                    //     // when window width is >= 320px
                    //     320: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 20
                    //     },
                    //     // when window width is >= 480px
                    //     480: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 30
                    //     },
                    //     // when window width is >= 640px
                    //     640: {
                    //       slidesPerView: 4,
                    //       spaceBetween: 40
                    //     }
    // }
                  
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  
                >


                    <SwiperSlide>
                        <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="BestBox">
                            <div className="BestImg">
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp" alt="" />
                            </div>
                            <div className="BestContext">
                                <p>Accessories</p>
                               <h6>Quartz Belt Watch</h6>
                               <h5>$150.00</h5>
                            </div>

                    
                        </div>

                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    )
}

export default BestSeller
