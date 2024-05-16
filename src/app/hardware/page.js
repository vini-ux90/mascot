import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaMouse, FaBattleNet  } from "react-icons/fa";


const page = () => {
  return (
    <div>
        <Header/>
        <div class="container">
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <div className='p-6 my-6'>
              <div className=' p-5'>
              <div className='p-4 '>
                  <span className='flex justify-center items-center gap-x-3 pb-3'>
                    <FaMouse  className='text-orange-500' size='30'/>
                    <p className='text-2xl text-black font-medium'>IT Sales and Services</p>
                  </span>
                  <p className='italic'>
                    "IT Hardware Solution for corporate houses( Desktop/ Laptop/ Printers/ Scanners/ etc).<br/>
                    Through our negotiating power and industry contacts, We can supply all your computer infrastructure service needs, from a custom computer to full network implementation, at prices you will find hard to beat. Save yourself the hassle of shopping around; just ask us to quote on your requirements. We can supply built-to-order solutions or assemble branded products from the industry's leading names. Supply of all types of parts and computer peripherals (Printer/UPS/Scanner etc.) Annual Maintenance Contract (Comprehensive and Non –Comprehensives.) Up gradation of Computers."
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-6">
            <img src="assests\images\it-sales-serv.jpg" />
          </div>
        </div>
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <img src="assests\images\net-serv.jpg" />
          </div>
            <div class="lg:col-6">
            <div className='p-6 my-6'>
              <div className=' p-5'>
              <div className='p-4  mt-2'>
                  <span className='flex justify-center items-center gap-x-3 pb-3'>
                    <FaBattleNet   className='text-orange-500' size='30'/>
                    <p className='text-2xl text-black font-medium'>Networking Solutions</p>
                  </span>
                  <p className='italic'>
                    "Networking Solution for corporate houses( Cabling/Crimping Punching Wiring).<br/>
                    As your network services and solution provider, Mascot can supply you with specific services that include design, procurement, installation, upgrading, troubleshooting and maintenance, or if you wish, complete turnkey solutions, where we build your network from the ground up. <br/>These cable networks designed by Mascot Solutions can handle the latest gigabit Ethernet and voice technology. Mascot Solutions can design and install a cabling infrastructure to meet your requirements today, with the flexibility to accommodate future growth and demands."
                  </p>

                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>

    </div>
  )
}

export default page