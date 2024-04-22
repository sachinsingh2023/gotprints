import React from 'react'
import { useState } from 'react';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [activeTab, setActiveTab] = useState('');

  const handleHover = (id) => {
    setActiveTab(id);
  };

  const handleLeave = () => {
    setActiveTab('');
  };
  const products = [
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' }, { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    // ... more products
  ]; const products2 = [
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' }
  ];
  const products3 = [
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 2, name: 'Sweatshirt', price: 49.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' },
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' }
    ,
    { id: 1, name: 'T-Shirt', price: 25.99, image: 'https://static.gotprint.com/tl/en_US/index-2024-02-01/img/foam_boards_new_year.jpg' }
  ];
  return (

    <div onMouseLeave={handleLeave}>
      <header class='flex bg-white border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50' >
        <div class='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
          <a href="javascript:void(0)"><img src="https://www.oblprint.com/assets/images/obl-print-logo.svg" alt="logo" class='w-36' />
          </a>

          <div id="collapseMenu" style={{ display: isMenuOpen ? 'block' : 'none' }}
            class='lg:ml-12 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
            <button id="toggleClose" onClick={handleClick} class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul
              class='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li class='mb-6 hidden max-lg:block'>
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                class='text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold'>New</a></li>
              <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Men</a></li>
              <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Women</a></li>
              <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Kids</a></li>
            </ul>
          </div>

          <div class="flex gap-x-6 gap-y-4 ml-auto">
            <div
              class='flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-94 max-lg:hidden'>
              <input type='text' placeholder='Search something...' class='w-full text-sm bg-transparent outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                class="cursor-pointer fill-gray-600">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>

            <div class='flex items-center space-x-8'>
              <span class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] inline"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000" />
                </svg>
                <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>

              <span class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="cursor-pointer fill-[#333] inline"
                  viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>
              <button
                class='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Sign
                In</button>

              <button id="toggleOpen" class='lg:hidden' onClick={handleClick}>
                <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* sub navbars-------------- */}
      <header className=''>
        <ul className='flex justify-center subnav cursor-pointer max-[768px]:hidden'>
          <li className={`p-4 pl1`} onMouseEnter={() => handleHover('pl1')} >All products</li>
          <li className={`p-4 pl2`} onMouseEnter={() => handleHover('pl2')} >Business Cards</li>
          <li className={`p-4 pl3`} onMouseEnter={() => handleHover('pl3')} >Marketing materials</li>
          <li className={`p-4 pl4`} onMouseEnter={() => handleHover('pl4')}>Signs & Banners</li>
          <li className={`p-4 pl5`} onMouseEnter={() => handleHover('pl5')}>Invitations & Stationary</li>
          <li className={`p-4 pl6`} onMouseEnter={() => handleHover('pl6')}>Stickers</li>
          <li className={`p-4 pl7`} onMouseEnter={() => handleHover('pl7')} >Gift</li>
          <li className={`p-4 pl8`} onMouseEnter={() => handleHover('pl8')} >Apparel</li>
          <li className={`p-4 pl9`} onMouseEnter={() => handleHover('pl9')} >Industry</li>
          <li className={`p-4 pl10`} onMouseEnter={() => handleHover('pl10')} onMouseLeave={handleLeave}>Services</li>
        </ul>
        <div className='listoptions'>
          <div className={`pl1d ${activeTab === 'pl1' ? '' : 'hidden'}`}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8"> All Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`pl2d ${activeTab === 'pl2' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> business cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products2.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl3d ${activeTab === 'pl3' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> Marketing materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products3.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl4d ${activeTab === 'pl4' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> Signs & Banners</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl5d ${activeTab === 'pl5' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Invitations & Stationary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products2.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl6d ${activeTab === 'pl6' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Stickers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products3.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl7d ${activeTab === 'pl7' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> Gift</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl8d ${activeTab === 'pl8' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Apparel</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products2.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl9d ${activeTab === 'pl9' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products3.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
          <div className={`pl10d ${activeTab === 'pl10' ? '' : 'hidden'}`}><div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8"> Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {products.map((product) => (
                <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div></div>
        </div>
      </header>


    </div>
  )
}
export default Nav
