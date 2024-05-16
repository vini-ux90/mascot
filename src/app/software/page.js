import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaLaptop, FaMobileAlt, FaLaptopCode,FaChartPie,FaEye } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import { list } from 'postcss';


const page = () => {
  return (
    <div>

      <Header />
      <div class="container">
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <div className='p-6 my-6'>
              <div className='p-4'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <FaMobileAlt className='text-orange-500' size='30' />
                  <p className='text-2xl text-black font-medium'>Responsive Design</p>
                </span>
                <p className='italic'>
                  MIS a highly innovative software & technology solutions provider, established in the form of a hardware solution provider in 2002 with the aim of providing a leading edge intelligent technical solutions on the hardware & software aspects of a business's enterprise.<br>
                  </br>
                  "Using attractive, effective design and marketing techniques, we create websites that work. Our solutions satisfy legal requirements for universal design and are usable on mobile devices.<br />
                  MIS delivers user-friendly CMS platforms with high performance, stability and security. Our solutions rely on tried and tested open source software, and we combine the most suitable technologies in collaboration with the customer. We also assist with migration and adaptation of content from existing websites.<br />
                  We deliver solutions ranging from simple sites for SMB to complex, highly structured enterprise-level sites. Every business is unique and we deploy a carefully selected combination of software for each delivery. We have expertise on html/ css / bootsrap /php / CI / larvael / nodejs Platform."
                </p>

              </div>
            </div>
          </div>
          <div class="lg:col-6">
            <img src="assests\images\resp-design.png" />
          </div>
        </div>
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <img src="assests\images\web-dev.jpg" />
          </div>
          <div class="lg:col-6">
            <div className='p-4 mt-2'>
              <span className='flex justify-center items-center gap-x-3 pb-3'>
                <FaLaptopCode className='text-orange-500' size='30' />
                <p className='text-2xl text-black font-medium'>Web Applications</p>
              </span>
              <p className='italic'>
                "Using attractive, effective design and reporting techniques & tools, we create web application like warehouse management,Transport Management, Invoicing & Inventory Managemnt etc. It can be usable on mobile devices.<br />
                The Online software industry is growing and making forward strides rapidly, mainly based on the cloud software systems because it make our life very easy & simple . Mascot has launched online software based upon the cloud system which is very easy to handle and use. It has been designed for the use of one and all and if need be we can make changes and developments specifically for your requirement based upon your suggestion. No technicality expertise is required to use these software and no technically qualified person is required. It is very useful to all segment . Using this anyone can save time and money and their client can also save time and money."
              </p>

            </div>
          </div>

        </div>
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <div className='p-4 mt-2'>
              <span className='flex justify-center items-center gap-x-3 pb-3'>
                <TfiAndroid className='text-orange-500' size='30' />
                <p className='text-2xl text-black font-medium'>Andriod Applications</p>
              </span>
              <p className='italic'>
                "Android is touted as the right choice for startups and emerging companies. Our Android development services ensure that it is fully capable of supporting established companies and their SME counterparts. We are an android development company that guarantees scalability with expertise in everything related to what is android app development.<br />
                We design and develop Hybrid cross platform Android and IOS app, which will meet your unique requirement. We have highly experienced engineers who have built a range of secured and pliable apps for our clients. The delivered app is exactly what the client expects. The full-cycle custom Android app development process that we follow has helped us to delve deep into the Android world. And we have explored all possible solutions - Smartphones, Android tablets, Android Wear, and Android TV. We use time-tested android app development software as our primary tech stack to deliver easy-to-use, intuitive apps.<br />
                Our highly skilled Android app developers know the secret formula to develop apps that witness more than a million downloads on the Google Play Store."
              </p>

            </div>
          </div>
          <div class="lg:col-6">
            <img src="assests\images\and-app.png" />
          </div>
        </div>
        <div class="row items-center border-b">
          <div class="lg:col-6">
            <img src="assests\images\vision.jpg" />
          </div>
          <div class="lg:col-6" >
            <div className='p-4 mt-2' style={{margin: "-184px 0px 0px 0px"}}>
            <span className='flex justify-center items-center gap-x-3 pb-3'>
              <FaEye className='text-orange-500' size='30' />
                <p className='text-2xl text-black font-medium'>Vision</p>
              </span>
              <p className='italic'>
                Infinite Solutions is a leading IT company for Consulting Services and Deployment of best of breed Business Solutions to top tier domestic and international customers.
              </p>
            </div>
          </div>          
        </div>
        <div class="row items-center border-b">
        <div class="lg:col-6">
            <div className='p-4 mt-2'>
              <span className='flex justify-center items-center gap-x-3 pb-3'>
              <FaChartPie className='text-orange-500' size='30' />
                <p className='text-2xl text-black font-medium'>Mission</p>
              </span>
              <p className='italic'>
                MIS mission is to enhance the business operation of its clients by developing and/or implementing premium IT products and services.
                MIS mission includes:
              </p>
                <ul>
                  <li>Providing high quality software development services, professional consulting and development outsourcing that would improve our customers' operations  </li>
                  <li>Making access to information easier and securer (Enterprise Business)</li>
                  <li>Improving communication and data exchange (Business to Business)</li>
                  <li>Providing our customers with a Value for Money and</li>
                  <li>Providing our employees with meaningful work and advancement opportunities.</li>
                </ul>              
            </div>
          </div>
          <div class="lg:col-6">
            <img src="assests\images\mission.jpg" />
          </div>
          
        </div>
        
      </div>
      <Footer />


    </div>
  )
}

export default page