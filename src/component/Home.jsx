import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from './Nav'
import Lgb1 from "../image/lgb1.jpg"
import Lgb2 from "../image/lgb2.jpg"
import Lgb3 from "../image/lgb3.jpg"
import Shoping from './Shoping';
import Footer from './Footer';

const Home = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div style={{ overflow: "hidden" }}>
            <div class="fixed inset-x-0 top-0 z-50">
    <div class="bg-teal-600">
        <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                <div class="flex flex-1 items-center lg:mr-3 lg:flex-none">
                    <p class="ml-3 text-center font-medium text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" class="mr-2 hidden h-6 w-6 lg:inline">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                            </path>
                        </svg>To celebrate our
                        <span class="font-semibold">Big Version 3</span> release, use
                        <span class="font-black">VERSION3</span> code to get <span class="font-black">50% off</span>
                    </p>
                </div>
                <div class="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto"><a
                        class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50"
                        href="#pricing">Buy now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
            <Nav />
            {/* crousel------------- */}
            <Slider {...settings}>
                <div>
                    <img src={Lgb1} alt="Slide 1" />
                </div>
                <div>
                    <img src={Lgb2} alt="Slide 2" />
                </div>
                <div>
                    <img src={Lgb3} alt="Slide 3" />
                </div>
            </Slider>
            {/*---------------- */}
         <Shoping/>
         <div className="shoping-card">
                <h1 className='text-center text-3xl'>Personalized Office & Home Décor</h1>
                <p className='text-center'>Make your space unique with awesome customized prints & wall art.</p>
                <div className="card-container flex justify-center flex-wrap">
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    
                    

                </div>
                <div className="card-container flex justify-center flex-wrap">
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    <div className="card p-2 m-1" style={{ width: "250px", height:"300px", border:"1px solid black" }}><img src="https://static.gotprint.com/tl/en_US/index-2024-02-01/img/pc_top_seller.jpg" alt="" /><h1 className='text-center text-xl'>Business card</h1>
                    <p className='text-center'>Most deffrent type bussines card</p></div>
                    
                    

                </div>

            </div>
            <img src={Lgb1} style={{width:"100%", maxHeight :"300px"}} alt="" />
            <Shoping/>
            <img src={Lgb3} style={{width:"100%", height:"300px"}} alt="" />
            <Shoping/>
   <Footer/>
        </div>
    )
}

export default Home