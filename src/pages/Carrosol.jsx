import React from 'react';

const Carrosol = () => {
    return (
        <div className="carousel w-full rounded">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.magnific.com/free-vector/subscribe-our-newsletter-cartoon-banner-email-news-subscriptio_107791-3079.jpg?semt=ais_hybrid&w=740&q=80"
                    className="w-full max-h-[350px] object-cover md:ojecct-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://media.licdn.com/dms/image/v2/C511BAQG7OCsTMd_NQA/company-background_10000/company-background_10000/0/1584483424227/top_online_service_bd_cover?e=2147483647&v=beta&t=hyZZQDlypctNy4VByrSKxoiqndAHJt5DtftFWL2qTVc"
                    className="w-full max-h-[350px] object-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://sslcommerz.com/wp-content/uploads/2024/04/Services-of-Online-Payment-Gateways.png"
                    className="w-full max-h-[350px] object-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carrosol;