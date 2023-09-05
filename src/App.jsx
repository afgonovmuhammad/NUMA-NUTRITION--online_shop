import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Modal } from 'antd';
import React from 'react';
// import { Image, List } from 'antd';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Menu from '@mui/icons-material/Menu';
import { IconButton, Link } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

import Products from './img/Products.png'
import icon_png from './img/icom_png.png'

import iconA from './img/iconA.png'
import iconB from './img/iconB.png'
import iconC from './img/iconC.png'
import iconD from './img/iconD.png'
import iconE from './img/iconE.png'
import iconF from './img/iconF.png'

import resuts from './img/resuts.png'

import image_10 from './img/image_10.png'
import Rectangle_5 from './img/Rectangle_5.png'
import Mask_group from './img/Mask_group.png'

import bor1 from './img/bor1.png'
import bor2 from './img/bor2.png'
import bor3 from './img/bor3.png'
import bor4 from './img/bor4.png'
import bor5 from './img/bor5.png'
import bor6 from './img/bor6.png'
import bor7 from './img/bor7.png'
import bor8 from './img/bor8.png'
import bor9 from './img/bor9.png'
import bor10 from './img/bor10.png'
import bor11 from './img/bor11.png'
import bor12 from './img/bor12.png'
import bor13 from './img/bor13.png'

import bor1A from './img/bor1A.png'
import bor2A from './img/bor2AA.png'
import bor3A from './img/bor3A.png'
import bor4A from './img/bor4A.png'
import bor5A from './img/bor5A.png'
import bor6A from './img/bor6A.png'
import bor7A from './img/bor7A.png'
import bor8A from './img/bor8A.png'
import bor9A from './img/bor9A.png'
import bor10A from './img/bor10A.png'
import bor11A from './img/bor11A.png'
import bor12A from './img/bor12A.png'
import bor13A from './img/bor13A.png'

import Certificat1 from './img/Certificat1.png'
import Certificat2 from './img/Certificat2.png'
import Certificat3 from './img/Certificat3.png'
import Certificat4 from './img/Certificat4.png'
import Certificat5 from './img/Certificat5.png'
import Certificat6 from './img/Certificat6.png'
import Certificat7 from './img/Certificat7.png'
import Certificat8 from './img/Certificat8.png'
import Certificat9 from './img/Certificat9.png'
import Certificat10 from './img/Certificat10.png'
import Certificat11 from './img/Certificat11.png'

import icom_png from './img/icom_png.png'
import icon_navM from './img/icon_navM.png'
import Sliderr from './companent/swiper';
// import { Image } from '@mui/icons-material';


function App() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [count, setCount] = useState(0)
  const [state, setState] = useState({
    // top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<>
          <li style={{ paddingTop: "10px" }}><a className=" link2" href="#О_нас">О нас</a></li>
          <li style={{ paddingTop: "10px" }}><a className=" link2" href="#Продукты">Продукты</a></li>
          <li style={{ paddingTop: "10px" }}><a className=" link2" href="#Сертификаты">Сертификаты</a></li>
          <li style={{ paddingTop: "10px" }}><a className=" link2" href="#Контакты">Контакты</a></li>

        </>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>

              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <>
      <div className="main-1">
        <div className="contener">
          <div
            className="navbar 2xl:w-[80%] xl:w-[90%] md:w-[80%] w-[90%] flex m-auto justify-between  py-[20px] items-center ">

            <div className="icon  ">
              <img className=' hidden sm:flex' src={icon_png} alt="" />
              <img className=' sm:hidden mx:flex' src={icon_navM} alt="" />
            </div>

            <ul className="hidden xl:flex xl:justify-around w-[50%] lg:hidden ">
              <li><a className="links link" href="#О_нас">О нас</a></li>
              <li><a className=" link" href="#Продукты">Продукты</a></li>
              <li><a className=" link" href="#Сертификаты">Сертификаты</a></li>
              <li><a className=" link" href="#Контакты">Контакты</a></li>
            </ul>



            <button className="btn-12 lg:text-[18px]  md:text-[16px] text-[14px] lg:py-[7px] py-[2px] 3xl:w-[18.5%] 2xl:w-[20%] xl:w-[25%] lg:w-[35%] md:w-[50%] ">
              <span className="flex items-center justify-center xl:gap-[10px] md:gap-[15px]">
                <p className='mx:hidden sm:flex'>
                  <PhoneIcon />
                </p>
                <p className="">+992 987 654 321</p>
              </span>
            </button>
            <div className="MENU hidden mx:flex xl:hidden">
              <div className=' fixed sm:top-10  top-4 right-2 items-center  md:right-10 bg-[#ffffff] rounded-[20px]'>
                {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton style={{ color: "#26d984" }} onClick={toggleDrawer(anchor, true)}><Menu /></IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
          <div className="Products">
            <div className="contener ">
              <h1
                className="lg:text-[46px] xl:text-[56px] 2xl:w-[65%] sm:w-[80%] mx:w-[90%] 2xl:pt-[130px] md:text-[38px] sm:text-[30px] mx:text-[24px] lg:pt-[100px] pt-[50px] ">
                Возвращение к природе, при помощи
                натуральных продуктов</h1>
              <img className='w-[100%]' src={Products} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div id='О_нас' className="О_нас xl:pt-[230px]">
        <div className="contener lg:flex justify-between ">
          <div className="left_2 2xl:w-[60%] lg:w-[45%] w-[90%]">
            <h1 className="lg:text-[46px] xl:text-[56px] sm:text-[46px] mx:text-[36px]">О нас</h1>
            <p className=" xl:text-[21px] sm:text-[18px] lg:w-[80%]  py-[20px] ">Lorem ipsum dolor sit amet
              consectetur. Sit condimentum sem diam est diam porta ornare egestas.
              Sed rhoncus neque lorem ut eget duis. Mi aenean lorem volutpat lectus. Risus nec potenti justo
              facilisis. Urna gravida vitae posuere est ullamcorper sed at donec ac. Convallis nisi ipsum
              massa felis velit purus velit dictumst. Eu habitant nunc cursus enim pretium donec praesent ante
              donec. Ultricies mauris proin ultricies duis condimentum nullam eu nisl nec.</p>

            <div className=" grid grid-cols-3  xl:gap-y-[30px] gap-[30px] pt-[40px] ">
              <img src={iconA} alt="" />
              <img src={iconB} alt="" />
              <img src={iconC} alt="" />
              <img src={iconD} alt="" />
              <img src={iconE} alt="" />
              <img src={iconF} alt="" />
            </div>
            <img className='resurs' src={resuts} alt="" />
          </div>
          <div class=" ">
            <img src={image_10} alt="" />
            <div class=" flex mx:flex-col sm:flex-row gap-[20px] pt-[15px] ">
              <img src={Rectangle_5} alt="" />
              <img src={Mask_group} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section >
        <div id="Продукты" class="Productss ">
          <div class="contener Product1 md:py-[80px]">
            <h1 class="text-[#c54646] sm:text-center md:text-start lg:text-[46px] xl:text-[56px] sm:text-[46px] mx:text-[40px]">
              Продукты</h1>
            <div class=" grid 2xl:grid-cols-3 md:grid-cols-2  xl:gap-y-[50px] gap-[30px] m-auto ">

              <button type="primary" onClick={() => setOpen(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center">
                  <img src={bor1} alt="" />
                  <div class="flex flex-col justify-center text-start  p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Igneus</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>

                </div>
              </button>
              <button type="primary" onClick={() => setOpen2(true)}>
                <div
                  class="Bor  xl:w-[85%] sm:w-[70%]  md:w-[100%]  m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center">

                  <img src={bor2} alt="" />
                  <div class="flex flex-col justify-center text-start  p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Omega 3-6-9</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>

                </div>
              </button>
              <button type="primary" onClick={() => setOpen3(true)}>
                <div
                  class="Bor  xl:w-[85%] sm:w-[70%]  md:w-[100%]  m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor3} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Vitamin D3</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen4(true)}>
                <div
                  class="Bor  xl:w-[85%] sm:w-[70%]  md:w-[100%]  m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor4} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Detox Hepar Energy</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen5(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor5} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Endo Marine</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen6(true)}>

                <div
                  class="Bor xl:w-[85%] sm:w-[70%]  md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor6} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Endo Marine <span
                      class="text-[#000]">kids</span></h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen7(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor7} alt="" />
                  <div class="flex flex-col justify-center p-[30px] text-start">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Rikki</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen8(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor8} alt="" />
                  <div class="flex flex-col justify-center p-[30px] text-start">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Bonny</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen9(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor9} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">DR.BEEZEE Black Honey</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen10(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor10} alt="" />
                  <div class="flex flex-col justify-center text-start  p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">DR.BEEZEE King Bee</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen11(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor11} alt="" />

                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">DR.BEEZEE Queen Bee </h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen12(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor12} alt="" />
                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Beau Collagen</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>
              <button type="primary" onClick={() => setOpen13(true)}>
                <div
                  class="Bor xl:w-[85%] sm:w-[70%] md:w-[100%] m-auto lg:m-0 pt-[30px] mb-[50px] bg-white rounded-[50px] flex flex-col justify-center items-center ">
                  <img src={bor13} alt="" />

                  <div class="flex flex-col justify-center text-start p-[30px]">
                    <h2 class="text-[#26d984] text-[26px] font-[600]">Anti-Age</h2>
                    <p class="pt-[10px] text-[17px]">Lorem ipsum dolor sit amet consectetur. Sit condimentum
                      sem
                      diam est diam porta ornare
                      egestas. Sed rhoncus neque lorem ut eget duis.</p>
                  </div>
                </div>
              </button>

            </div>

          </div>
        </div>
      </section>

      <section id="Сертификаты">
        <div class="Certificates ">
          <div class="contener">
            <h1 className='lg:text-[46px] xl:text-[56px] sm:text-[46px] mx:text-[36px]'>Сертификаты</h1>
            <div class="gap-y-[50px] pt-[80px] ">

              <div class="md:grid 2xl:grid-cols-4 md:grid-cols-3   w-[100%] hidden md:gap-x-[40px] gap-y-[60px]">
                <div class=""><span><img className='w-[100%]' src={Certificat1} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat2} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat3} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat4} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat5} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat6} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat7} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat8} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat9} alt="" /></span></div>
                <div class=""><span><img className='w-[100%]' src={Certificat11} alt="" /></span></div> 
              </div>
              <div class="grid 2xl:grid-cols-4 md:grid-cols-3 gap-[10px]   items-center pt-[10px]">
              </div>

              <div className='md:hidden block' >
                <Sliderr />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div id="Контакты" class="Contacts mx:pb-[100px] lg:pb-0 pt-[120px]">
        <div class="contener">
          <div class="Contact lg:flex justify-around  p-[40px]  xl:pb-[130px]">
            <div class="leftCont lg:w-[45%]">
              <h1 class=" 2xl:text-[56px] sm:text-[50px] mx:text-[40px] font-[700]">Обратная <span
                class="text-[#26D984]">Связь</span></h1>
              <p class="font-[600] lg:w-[70%] py-[15px]">Enim tempor eget pharetra facilisis sed maecenas
                adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.</p>
            </div>
            <div class="rightCont flex flex-col  gap-y-[30px]  lg:w-[49%]">
              <input class="lg:py-[15px] mx:py-[7px] px-[30px] rounded-[89px]" type="text" placeholder='Имя' />
              <input class="lg:py-[15px] mx:py-[7px] px-[30px] rounded-[89px]" type="text" placeholder='Email' />
              <input class="lg:py-[15px] mx:py-[7px] px-[30px] rounded-[89px]" type="text" placeholder='Телефон' />
              <button class="btn-10 lg:py-[10px] mx:py-[5px]">
                <span>ОТПРАВЛЯТЬ</span>
              </button>
            </div>

          </div>
          <div class=" hidden xl:flex xl:relative xl:left-[50px] 2xl:top-[-230px] 3xl:top-[-260px]  xl:top-[-180px]">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49902.400404234526!2d68.772875!3d38.58215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1673776c5e7%3A0x3bbdd3ce999b219f!2zSXNtb2lsaSBTb21vbmkgTW9udW1lbnQsINC606_Rh9Cw0Lgg0rbQsNC70L7QuyDQmNC60YDQvtC806MsINCU0YPRiNCw0L3QsdC1!5e0!3m2!1sru!2s!4v1693034000083!5m2!1sru!2s"
              width="445" height="410"
              className='border-[2px] rounded-[15px]'
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>

          </div>
          <div class=" block xl:hidden mt-[50px] ">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49902.400404234526!2d68.772875!3d38.58215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1673776c5e7%3A0x3bbdd3ce999b219f!2zSXNtb2lsaSBTb21vbmkgTW9udW1lbnQsINC606_Rh9Cw0Lgg0rbQsNC70L7QuyDQmNC60YDQvtC806MsINCU0YPRiNCw0L3QsdC1!5e0!3m2!1sru!2s!4v1693034000083!5m2!1sru!2s"
              width="100%" height="410"
              className='border-[2px] rounded-[15px]'
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>

          </div>
        </div>
      </div>


      <div class="Footer  bg-[#3D3D3D] pb-[80px] sm:mt-[50px] xl:mt-[-40px]">
        <div class="contener">
          <div class="footer_end xl:w-[80%] w-[90%] m-auto mx:py-[60px] lg:py-0 lg:flex gap-[50px] justify-between  ">
            <div class="flex justify-center lg:pt-[40px] ">
              <div>
                <img src={icom_png} alt="" />
              </div>
            </div>
            <div className='w-[100%] flex mx:items-center md:items-start' >
              <ul class="grid mx:grid-cols-3 xl:grid-cols-4 md:text-[20px] xl:text-[22px] text-[17px]   gap-x-[10px] 2xl:w-[80%]  w-[95%] m-auto pt-[40px] md:pt-[60px] 3xl:gap-y-[40px] gap-[10px]  text-[#fff]">
                <li class="">
                  <a href="#О_нас">О нас</a>
                </li>
                <li class="">
                  <a href="#Продукты">Продукты</a>
                </li>
                <li class="">
                  <a href="#Сертификаты">Сертификаты</a>
                </li>
                <li class="mx:w-[200%] xl:w-[100%] pt-[20px] xl:pt-0 ">
                  <a href="#Контакты">Контакты</a>
                  <div class="md:flex lg:block justify-between items-center  gap-[0px]  ">
                    <div class="flex items-center gap-x-[10px]">

                      <PhoneInTalkIcon className='text-[#26D984] 2xl:text-[18px]' />
                      <p class="pt-[20px]">Тел: <br />
                        880 80 11 66</p>
                    </div>
                    <div class="flex items-center gap-x-[10px]">
                      <EmailIcon className='text-[#26D984] text-[18px]' />
                      <p class="pt-[20px]">Email:  <br />
                        info@marcc.com.au</p>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </div>

      </div>

      <div>
        <Modal
          title=""
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center text-[46px] py-[30px] font-[600]">Igneus</h2>
              <div>
                <img className=' hidden lg:block' src={bor1A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor1} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800]'>Состав: <span className='font-[400]'>Масло черного тмина и тыквы холодного отжима,
                экстракт корня костуса
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Форма и упаковка: <span className='font-[400]'>Igneus в рыбных желатиновых капсулах
                массой 500 мг. 180 штук в упаковке.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Способ применения: <span className='font-[400]'>Детям в возрасте 9-10 лет по 1 капсуле
                1-2 раза в день, для взрослых от 25 лет и старше по 2-3 капсулы 3
                раза в день. Рекомендуется пить за 30 минут до еды.

              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'>при повышенной чувствительности к
                компонентамм продукта, беременности и в случае после
                трансплантации органов, желчнокаменной болезни, диареи,
                коагулопатии
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Полезные свойства:</h3>
              <h3 className='text-[15px] font-[700] pt-[3px]'>• Очищает кровь и придает энергию </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает иммунитет, помогает при вирусных заболеваниях и при заболеваниях дыхательных путей</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Способствует понижению уровня сахара в крови</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при мужском и женском бесплодии</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Очищает печень, восстанавливает ее структуру</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает работу ЖКТ (пищеварительной системы)</h3>
              <span className='text-[15px] font-[400] pt-[3px]'> Кроме того, он помогает оздоровить организм человека, который регулярно егоупотребляет. </span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Полезные свойства: <span className='font-[400]'>помогает при опасных состояниях серлечно-сосудистой системы,
                таких как гиперхолестеринемия, ишемия, тромбоз, коагуляция, атеросклероз и
                сосудистый спазм. Помогает устранить хронические проблемы пищеварения, такие как
                гастрит, язва желудка и двенадцатиперстной кишки, ферментопатии и нарушение
                перистальтики, а также хронические проблемы, такие как геморрой и колит. </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Для нервной системы: <span className='font-[400]'>при регулярном употреблении продукт оказывает
                успокаивающее действие на нервную систему, снимает боль и улучшает
                качество сна. При регулярном употреблений продукт придает энергию и
                бодрость.</span></h3>
            </div>
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          title=""
          centered
          open={open2}
          onOk={() => setOpen2(false)}
          onCancel={() => setOpen2(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center text-[46px] py-[30px] font-[600]">Omega 3-6-9</h2>
              <div>
                <img className=' hidden lg:block' src={bor2A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor2} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800]'>Состав: <span className='font-[400]'>Лососевый жир. (Из подкожной жировой клетчатки рыбы).
                Форма и упаковка: Омега 3-6-9 жиров в рыбных желатиновых капсулах по 500 мг. 180 штук в упаковке.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Способ применения: <span className='font-[400]'> Детям в возрасте 4-5 лет по 1 капсуле 1 -2 раза в день, для взрослых от 20 лет и старше по 2-3 капсулы 3 раза в день. Рекомендуется пить во время еды.
                Противопоказания: повышенная чувствительность к компонентам продукта, желчнокаменная болезнь, в период обострения туберкулеза, геморрагический синдром.

              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Полезные свойства:</h3>
              <h3 className='text-[15px] font-[700] pt-[3px]'>• Укрепляет сердце, помогает при атеросклерозе, инфаркте и инсульте </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает мозговую деятельность, помогает при Альцгеймере и предупреждает развитие болезни Альцгеймера</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает остроту зрения, профилактика заболевании глаз</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Во время беременности способствует росту и развитию плода</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Очищает печень, восстанавливает ее структуру</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает состояние кожи, волос и ногтей </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Стимулирует усвоение кальция в организме. </h3>
              <span className='text-[15px] font-[400] pt-[3px]'>Omega 3-6-9 - это комплекс из самых важных для человеческого здоровья ненасыщенных жирных кислот. Организм не вырабатывает эти вещества самостоятельно, поэтому нуждается в их регулярном поступлении с пищей или добавками. Впервые о пользе ненасыщенных жирных кислот для организма человека стало известно в 20 веке. Датские ученые обратили внимание на отменное здоровье людей, проживающих в прибрежных областях Гренландии, и провели масштабное исследование, в результате которого было установлено, что низкий уровень болезней сердечно-сосудистой системы среди них связан с постоянным употреблением богатой полиненасыщенными жирами морской рыбы. </span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Со временем это открытие подтвердили ученые других стран, и специалисты решили создать комплекс из трех самых значимых жирных кислот - омега-3, -6 и -9 - в идеальном для организма человека соотношении. </h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open3}
          onOk={() => setOpen3(false)}
          onCancel={() => setOpen3(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Vitamin D3</h2>
              <div>
                <img className=' hidden lg:block' src={bor3A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor3} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800]'>Состав: <span className='font-[400]'>Холекалыдиферол (D3), Масло растительное рафинированное.
                Форма и упаковка: Холекалыдиферол (витамин D3) в рыбных желатиновых капсулах массой 500 мг. 180 штук в упаковке.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Способ применения: <span className='font-[400]'> Индивидуальный. Детям в возрасте 6-7 лет по 1 капсуле один раз в 2 дня, для взрослых от 20 лет и старше по 1-2 капсулы один раз в день. Рекомендуется пить до или во время еды.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'>  Гиперкалыдиемия, Гиперфосфатемия, Гипермагниемия Гипервитаминоз Д, почечная недостаточность.</span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Полезные свойства:</h3>
              <h3 className='text-[15px] font-[700] pt-[3px]'>• Стимулирует иммунитет, профилактика онкологических заболеваний </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Укрепляет кости и суставы</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает энергию</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при остеохондрозе и артрите, укрепляет зубы</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Усиливает всасывание кальция и фосфора</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Нормализует работу сердца и сосудов </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Активный дефицит витамина ДЗ указывает следующее: </h3>
              <span className='text-[15px] font-[400] pt-[3px]'>
                Прием витамина D3 способствует снижению заболеваемости ОРВИ, в том числе новой коронавирусной инфекции COVID-19. Доказано, что в странах, где у пациентов с COVID-19 более высокое содержание в организме витамина D3 риск осложнений значительно ниже. Витамин D3 повышает защитные силы организма, снижает вероятность развития «цитокинового шторма» (гипервоспаления), поддерживает функцию легких.
                Слабость, ломкость костей, проблемы с зубами, частый кариес, расшатывание, частые простуды и другие болезни. Витамин ДЗ нужен для предотвращения развития остеопороза, рахита, деформации позвоночника, а также это вещество играет важную роль в формировании правильной осанки, костныхтканей и обмене веществ.</span>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open4}
          onOk={() => setOpen4(false)}
          onCancel={() => setOpen4(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Detox Hepar Energy</h2>
              <div>
                <img className=' hidden lg:block' src={bor4A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor4} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <span className='text-[15px] font-[400] pb-[13px]'>Рекомендации по применению: детям старше 4 лет до 15мл. в день, детям старше 14 лет и взрослым до 50мл. в день за 30 минут до еды.</span>

              <h3 className='text-[15px] font-[800] pt-[15px]'>Состав: <span className='font-[400]'> экстракт горького арбуза, папайя, вишня, экстракт винограда, лимон, якорцы стелющиеся, корень имбиря, плоды шиповника.
              </span></h3>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'>  аллергические реакции; индивидуальная непереносимость компонентов продукта, обострения гастрита, язвенной болезни желудка и двенадцатиперстной кишки, эндометриоз. Не является лекарственным средством.</span></h3>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'>Основные функциональные возможности:</h3>
              <h3 className='text-[15px] font-[700] pt-[3px]'>• Для очищения и стимулирования детоксикации печени </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Для восстановления организма после перенесенных инфекционных заболеваний</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Обладает анти паразитарными свойствами</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Для укрепления иммунитета и как источник энергии</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• При синдроме хронической усталости.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Нормализует работу сердца и сосудов </h3>
              <br />
              <span className='text-[15px] font-[400] mt-[23px]'>
                Имеет натуральный биологический состав: АМК, ферменты, витамины и минералы. Способствует общему укреплению организма, так же помогает повысить иммунитет. Обладает антиоксидантным свойством. Способствует омолаживанию тела. Даже при хронических заболеваниях противовоспалительные свойства улучшают состояние всего организма.</span>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open5}
          onOk={() => setOpen5(false)}
          onCancel={() => setOpen5(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Detox Hepar Energy</h2>
              <div>
                <img className=' hidden lg:block' src={bor5A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor5} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800]'>Состав: <span className='font-[400]'> фейхоа, ламинария ангустата, пектин, морской кальций, листья репы, листья гуавы, яблочный сок. Не содержит ГМО и красителей. Возможен осадок.
                Область применения: для профилактики эндокринных заболеваний.
                Рекомендации по применению: перед употреблением взболтать, употреблять от 30мл. до 50мл. утром и вечером за 30 минут до еды. Продукт предназначен для людей в возрасте от 15 лет.
              </span></h3>
              <br />


              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'>состояния, при которых противопоказаны препараты йода, повышенная чувствительность к препаратам йода, индивидуальная непереводимость компонентов. Не является лекарственным средством.
                Напиток безалкогольный произведён по немецким стандартам качества и используемые технологии позволяют максимально сохранить биологический состав продукта. Улучшает память, предотвращает умственное отставание ребенка во время беременности женщин.</span></h3>
              <br />
              <span className='text-[15px] font-[400] mt-[23px]'>
                Улучшает гормональный фон для женщин и мужчин. Профилактика при йоде дефиците (гипотиреоз) особенно беременным женщинам. Вспомогательные общеукрепляющие действия, помогают восстановить организм при хронических заболеваниях. Так же повышает иммунитет и улучшает ритм сердца.</span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Основные функциональные возможности:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при болезнях щитовидной железы (зоб), дисфагия </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при сахарном диабете, регулирует уровень сахара в крови, а также снижает риск развития диабета</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• При нарушениях гормонального фона</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Нормализует работу кишечника, защищает от увеличения массы тела</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• При синдроме хронической усталости.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Нормализует обмен веществ </h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open6}
          onOk={() => setOpen6(false)}
          onCancel={() => setOpen6(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Endo Marine <span className='text-[#000]'>Kids</span></h2>
              <div>
                <img className=' hidden lg:block' src={bor6A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor6} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <span className='text-[15px] font-[400] mt-[23px]'>Рекомендации по применению: перед употреблением взболтать, употреблять от 30мл. до 50 мл. утром и вечером за 30 минут до еды.</span>

              <h3 className='text-[15px] font-[800] pt-[15px]'>Состав: <span className='font-[400]'> фейхоа, ламинария ангустата, пектин, морской кальций, яблочный сок. Не содержит ГМО и красителей. Возможен осадок.</span></h3>
              <br />


              <h3 className='text-[15px] font-[800] pt-[3px]'>Способ применения: <span className='font-[400]'>для профилактики эндокринных заболеваний. Продукт предназначен для детей в возрасте от 6
                месяцев.</span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'> состояния, при которых противопоказаны препараты йода, повышенная чувствительность к препаратам йода, индивидуальная непереводимость компонентов.</span></h3>

              <h3 className='text-[15px] font-[800] pt-[5px]'>Полезные свойства:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при рахите и при отставании в росте и развитий</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает память и умственную деятельность</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при желудочно-кишечных заболеваниях</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Для профилактики заболеваний, связанных с недостатком йода </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Укрепляет иммунитет </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при заболеваниях дыхательных путей, пневмонии, бронхите</h3>
              <br />
              <span className='text-[15px] font-[400] pt-[15px]'>
                В составе продукта имеются ягоды фейхоа, очень богат йодом, который необходим для поддержания работы щитовидной железы и всей эндокринной системы. В плодах довольно этот микроэлемент активно участвует в обеспечении тканей и органов кислородом, а также магния, калия, кальция и цинка.
                много железа
                И так же Ламинария - один из самых насыщенных йодом продуктов, который помогает выводить из организма вредные вещества, в том числе свинец и тяжёлые металлы. Йод также хорошо влияет на состояние щитовидной железы, в частности лечит эндемичный зоб, гипертиреоз, Базедову болезнь</span>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open7}
          onOk={() => setOpen7(false)}
          onCancel={() => setOpen7(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Rikki</h2>
              <div>
                <img className=' hidden lg:block' src={bor7A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor7} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800] pt-[15px]'>Состав: <span className='font-[400]'>мёд, яблочный пектин, навват, сок горького арбуза, черный тмин, сок граната, плоды годжи, плоды папайи, плоды гуавы.</span></h3>

              <h3 className='text-[15px] font-[800] pt-[3px]'>Применение: <span className='font-[400]'>Детям старше 2 лет рекомендуется принимать по 2-3 штуки 2-3 раза в день за 30 минут до еды. Продукт предназначен для детей в возрасте от 2-х лет.</span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'> индивидуальная непереносимость компонентов продукта; сахарный диабет; острый колит, ларингит. Во флаконе 60 мармеладных мишек.</span></h3>

              <h3 className='text-[15px] font-[800] pt-[5px]'>Полезные свойства:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Способствует избавлению от паразитов и их яиц и личинок. А также от продуктов их жизнедеятельности и выделяемых токсинов Восполняет суточную энергию</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• укрепляет желудочно-кишечный тракт и нормализует обменвеществ</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Укрепляет иммунную систему</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Положительно влияет на нервную систему</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает сон и состояние кожи  </h3>
              <span className='text-[15px] font-[400] pt-[3px]'>
                Продукт имеет в своем составе сок горького арбуза (колоцинта) и плодов папайи (плодов дынного дерева). И благодаря свойствам этих растений продукт обладает очищающим эффектом, избавляет организм от шлаков, токсинов и других вредных веществ. Так, с его помощью удается избавиться от паразитов и продуктов их жизнедеятельности, что способствует улучшению иммунитета, снижению веса, а также общему оздоровлению организма.</span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Плоды: <span className='font-[400]'> папайи содержат весьма ценный фермент- папаин. При попадании в желудок он немедленно приступает к расщеплению крахмала, белка и жира. Плоды этого растения издревле использовались в пищу благодаря своим прекрасным вкусовым качествам. Однако издавна папайя известна в странах Южной Америки и своими лечебными свойствами. В ее составе содержится вещество папаин натуральный
                фермент, смягчающий волокна мяса и других белков. В народной медицине применяется также как глистогонное средство.</span></h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open8}
          onOk={() => setOpen8(false)}
          onCancel={() => setOpen8(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">Bonny</h2>
              <div>
                <img className=' hidden lg:block' src={bor8A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor8} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800] pt-[15px]'>Состав: <span className='font-[400]'>кальций, витамин D3, пектин, навват, экстракт гуавы, экстракт репы, сок яблоки, мёд, экстракт розмарина, экстракт гинкго билобы.
                Показания к применению: Показания к применению: при остеопорозе, как дополнительный источник кальция и витамина D3.</span></h3>

              <h3 className='text-[15px] font-[800] pt-[3px]'>• Участвует в заживлении переломов костей, делает зубы здоровыми</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает психическую и физическая активность</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Поддерживает рост и развитие детей</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Обладает свойствами. </h3>
              <span className='text-[15px] font-[400] pt-[3px]'>
                энергостимулирующими, противовоспалительными, антиоксидантными
                Витамин D3 необходим для нормального развития костей и связок у детей, поддержания здоровья опорно-двигательного аппарата. Обеспечивает усвоение кальция и фосфора. Регулирует обменные процессы в клетках. Витамин D3 поддерживает свертываемость крови, способствует лучшему усвоению углеводов, повышает чувствительность нервных волокон, препятствует образованию холестериновых бляшек. Укрепляет иммунитет, помогая организму бороться с вирусами и бактериями.
                Остальная часть кальция содержится в клетках, межклеточном пространстве и крови, участвуя во многих процессах жизнедеятельности.
              </span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Способ применения: <span className='font-[400]'>
                детям старше 2-х лет употреблять по 2-3 штук мармелада 2-3 раза в день после еды.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Продукт предназначен для детей в возрасте от 2-х лет.
              </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Противопоказания: <span className='font-[400]'>
                Индивидуальная непереносимость компонентов продукта, гиперкальциемия, гиперкальциурия, гипервитаминоз Д, почечная недостаточность. В упаковке 60 мармеладных мишек.
                детям старше 2-х лет употреблять по 2-3 штук мармелада 2-3 раза в день после еды.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Полезные свойства: </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает иммунитет</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Содержание кальция в составе предотвращает дефицит кальция в организме</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Укрепляет костную ткань, предохраняет от развития остеопороза (снижение плотности костей и повышение их ломкости)</h3>


            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open9}
          onOk={() => setOpen9(false)}
          onCancel={() => setOpen9(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[30px] font-[600]">DR.BEEZEE Black Honey</h2>
              <div>
                <img className=' hidden lg:block' src={bor9A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor9} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]'>
              <h3 className='text-[15px] font-[800] pt-[15px]'>Состав: <span className='font-[400]'>Горный Мёд, экстракт чёрного тмина.</span></h3>
              <h3 className='text-[15px] font-[800] '>Рекомендуемое использование: <span className='font-[400]'>Принимайте ежедневно одну чайную ложку утром натощак и одну чайную ложку, смешанную с теплой водой, перед сном.</span></h3>

              <h3 className='text-[15px] font-[800] pt-[3px]'> Преимущества DR BeeZee Black Honey:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает иммунитет.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Снимает сухой кашель и успокаивает горло.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Поддерживает общее здоровье.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Обладает антибактериальными и противогрибковыми свойствами. </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает мужскую плодовитость.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Предлагает все преимущества чёрного тмина.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Защищает пищеварительную систему от кишечных бактерий.</h3>

              <h3 className='text-[15px] font-[800] pt-[3px]'>Напоминание о безопасности: <span className='font-[400]'>
                Все продукты на 100% натураль- ные, но могут вызывать аллергические реакции у некоторых людей с чувствительными состояниями. В случае возникновения аллергии немедленно прекратите использование продукта. Мы все знаем, что мёд одно из самых прекрасных природных даров, предложенных нам. От маленького ребенка до пожилого взрослого, каждый любит наслаждаться вкусным мёдом вместе с едой. Исходя из этого, Dr BeeZee представляет вам Королевский Мёд с Чёрным Тмином, который является великолепным дополнением к вашей повседневной рутины благодаря своему высокому качеству и пользе для здоровья. Этот мёд, сделанный из натуральных ингредиентов, является аппетитным удовольствием, которое непременно удовлетворит ваши вкусовые рецепторы. Этот Королевский Мёд с Чёрным Тмином извлекается из пчелиных ульев, где пчелы пьют экстракт чёрного тмина, найденного в диких цветах, чтобы приготовить вкусный и богатый питательными веществами мёд. Собранный мёд не содержит искусственных ингредиентов, сахара, ароматизаторов или консервантов, что делает его безопасным для вашего здоровья. Мёд с чёрным Тмином собирается с использованием традиционных методов пчеловодства, при этом сохраняется природа и особенно заботятся о пчелиных ульях. Этот мёд обладает свойствами, отталкивающими вредоносных организмов, чтобы защитить ваше тело от различных видов инфекций.
              </span></h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open10}
          onOk={() => setOpen10(false)}
          onCancel={() => setOpen10(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between items-center py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[25px] font-[600]">DR.BEEZEE KING BEE</h2>
              <div>
                <img className=' hidden lg:block' src={bor10A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor10} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%] flex flex-col  '>
              <span className='font-[400]'>
                Витамины в мёде улучшают работу сердца, укрепляют мышцы и снижают уровень холестерина. Антиоксиданты в мёде и его способность бороться с бактериями способствуют заживлению, снижают проблемы с дыханием, очищают кровь и уменьшают симптомы бронхита и астмы. Мёд также очень полезен для зубов и десен, помогает бороться с заболеваниями полости рта.
              </span>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'> Преимущества DR BeeZee King Bee Honey:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает кровообращение в малых сосудах мозга.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает сексуальное желание.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает эректильную активность.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Значительно повышает удободрение спермы.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Считается эффективным при импотенции.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Устраняет застойные процессы в мочевых и половых путях.</h3>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'>Состав: <span className='font-[400]'>
                Мёд, семена шафрана, корень женьшеня, корень имбиря, экстракт чёрного тмина, семена фенхеля, семена Тыквы, корень лакрицы, корень родиолы розовой, семена кунжута, корень ферулы мускатной, ягоды шелковицы, ягоды граната, лецитин, фруктоза.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Рекомендуемое использование: <span className='font-[400]'>
                Принимайте ежедневно одну чайную ложку утром натощак и одну чайную ложку, смешанную с теплой водой, перед сном.
              </span></h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open11}
          onOk={() => setOpen11(false)}
          onCancel={() => setOpen11(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between  py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[25px] font-[600]">DR.BEEZEE Queen Bee</h2>
              <div>
                <img className=' hidden lg:block' src={bor11A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor11} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%] flex flex-col  '>
              <span className='font-[400]'>
                Витамины в мёде улучшают работу сердца, укрепляют мышцы и снижают уровень холестерина. Антиоксиданты в мёде и его способность бороться с бактериями способствуют заживлению, снижают проблемы с дыханием, очищают кровь и уменьшают симптомы бронхита и астмы. Мёд также очень полезен для зубов и десен, помогает бороться с заболеваниями полости рта.
              </span>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'>Преимущества DR BeeZee Queen Bee Honey:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает бороться с грибками.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Очищает печень и желчный пузырь от токсинов.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Улучшает память и зрение, повышает концентрацию.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>•Укрепляет сердечно-сосудистую систему, нормализует кровяное давление. Снижает уровень холестерина низкой плотности.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Снижает уровень сахара в крови.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает при заболеваниях почек, нарушениях менструального цикла.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Препятствует развитию фиброидов матки, мастопатии и различных опухолей.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Повышает либидо.</h3>
              <br />
              <h3 className='text-[15px] font-[800] pt-[3px]'>Состав: <span className='font-[400]'>
                Мёд, шафран, омила, желтый и чёрный халила, корень имбиря, корень ревеня, семена иглиря (Айр Балотович), корица, ягоды граната, фрукты чотеоте, шалфей, лецитин, фруктоза.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>ORGANIC HOMEY</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>DR</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>BEE</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>ZEE</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>QUEEN BEE</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>NIMA</h3>

            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open12}
          onOk={() => setOpen12(false)}
          onCancel={() => setOpen12(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between  py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[25px] font-[600]">Beau Collagen</h2>
              <div>
                <img className=' hidden lg:block' src={bor12A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor12} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]   '>
              <span className='font-[400]'>
                Дефицит коллагена можно компенсировать с помощью коллагена из лососевой рыбы, основным ингредиентом которого является лиофилизованный тропоколлаген, полученный из кожи лососевых рыб, включающий альфа-1 и альфа-2 цепи, почти идентичные тем, что содержатся в организме человека. Он обеспечивает организм свободными
                аминокислотами и активно участвует в регенерации клеток
              </span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>BEAU UNIVERSE</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>BEAU</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>COLLAGEN</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Преимущества Вea Universe Collagen:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Коллаген из рыбы для здоровья кожи и суставов.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает снизить суставную боль, связанную с остеоартритом.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Укрепляет волосы и ногти.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Помогает сократить преждевременные признаки старения. </h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>•Не содержит антибиотиков, добавленных гормонов и ГМО-Ингредиентов.</h3>

              <h3 className='text-[15px] font-[800] pt-[3px]'>Состав: <span className='font-[400]'>
                коллаген из лососевой рыбы, пектина, витамин С, ламинария.Несмотря на то, что коллаген обычно ассоциируется со кожей и ее эластичностью, он является основным компонентом соединительной ткани. Коллаген формирует суставы, кости, связки, сухожилия, кровеносные сосуды, межпозвоночные диски, зубы, глазное яблоко, волосы, ногти и многое другое. После 25 лет производство молодого коллагена замедляется, что приводит к появлению первых морщин и линий. Организм начинает стареть, поскольку ему не хватает структурного компонента, необходимого для ремонта текущих повреждений. Благодаря своим ценным свойствам и крайне важной функции, коллаген непрерывно привлекает внимание врачей, биологов и
                косметологов.
              </span></h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>Рекомендуемое использование: <span className='font-[400]'>
                Принимайте 1 мармеладку 3 раза в день, если вам меньше 20 лет, или 2 мармеладки 3 раза в день, если вам больше 20 лет. Лучше всего перед едой. Используйте не менее 2 месяцев, чтобы увидеть благотворные эффекты.
              </span></h3>




            </div>
          </div>
        </Modal>
      </div>
      <div >
        <Modal
          title=""
          centered
          open={open13}
          onOk={() => setOpen13(false)}
          onCancel={() => setOpen13(false)}
          width={1300}
          footer={false}

        >
          <div className='lg:flex justify-between  py-[20px]'>
            <div className='lg:w-[44%] flex flex-col items-center '>
              <h2 class="text-[#26d984] items-center lg:text-[46px] text-[26px] lg:py-[25px] font-[600]">Anti-Age</h2>
              <div>
                <img className=' hidden lg:block' src={bor13A} alt="" />
                <img className='py-[20px] lg:hidden block' src={bor13} alt="" />
              </div>
            </div>

            <div className='lg:w-[56%]   '>
              <span className='font-[400]'>
                Теперь для достижения естественной красоты, которая становится все более редкой, не требуются иглы и болезненные процедуры. Уникальная серия кремов ANTI AGE MIRACLE обладает глубоким питательным и целебным свойствами для кожи лица и обеспечивает эффективные результаты в борьбе с морщинами и пигментацией.
              </span>
              <h3 className='text-[15px] font-[800] pt-[3px]'>
                Преимущества крема Anti-Age Miracle:</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Активные компоненты, способствующие повышению коллагена, увлажнению и упругости</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Борьба с морщинами, рубцами от акне.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Выравнивание тонуса кожи Подтягивание обвисшей кожи.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>• Увлажнение сухой кожи.</h3>
              <h3 className='text-[15px] font-[800] pt-[3px]'>BEAU UNIVERSE</h3>


              <h3 className='text-[15px] font-[800] pt-[3px]'>Состав: <span className='font-[400]'>
                Пантотеновая кислота - разглаживает мимические морщины
              </span></h3>
              <span className='text-[15px] font-[400]'>
                • Свободные жирные кислоты (15) - обеспечивают
                питание всех слоев кожи лица

              </span>
              <br />
              <span className='text-[15px] font-[400]'>
                • Молочная и пировиноградная кислоты - удаляют различные пигментные пятна на лице
              </span>
              <br />
              <span className='text-[15px] font-[400]'>
                Минеральные соли - обладают антибактериальными свойствами на лице и способствуют глубокой очистке
                кожи лица.Чистый и полностью натуральный продукт, без парабенов или формальдегидов, без пропиленгликоля или минеральных масел, без искусственных красителей или искусственных ароматизаторов. <br /> Все натуральные ингредиенты исключают негативные реакции кожи, одновременно естественно борясь с признаками старения. Формула обеспечивает глубокое увлажнение и быстрое впитывание без наполнителей или связующих веществ, не оставляя жирного блеска.

              </span>

              
              


            </div>
          </div>
        </Modal>
      </div>

    </>
  )
}

export default App
