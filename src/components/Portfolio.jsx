import React from 'react';
import MovieTicketBooking from '../assets/portfolio/MovieTicketBooking.png';
import Multimart from '../assets/portfolio/Screenshot 2023-09-15 135814.png';
import Medipro from '../assets/portfolio/Screenshot 2023-09-15 140032.png';
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

  const portfolios= [
    {
      id: 1,
      title: 'Multimart-All at one place',
      src: Multimart,
      repoUrl: "https://github.com/sakethram113/Multimart"

    },
    {
      id: 2,
      title: 'Medipro-Enhancing patient care',
      src: Medipro,
      repoUrl: "https://github.com/sakethram113/MedPro-Enhancing-Patient-Care"

    },
    {
      id: 3,
      title: 'Weather Forecast-Stay ahead of Nature',
      src: reactWeather,
      repoUrl: "https://github.com/sakethram113/Movie-ticket-booking"
      

    },
    {
      id: 4,
      title: 'ReserveFine-For your Finest Days',
      src: MovieTicketBooking,
      repoUrl: "https://github.com/sakethram113/Movie-ticket-booking"

    },
     
   
]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md: h-fit'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
          portfolios.map(({id,title,src,repoUrl}) =>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
               <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <button className='width-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <button className='width-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </a>
              </div>
              <p className="text-center text-lg font-semibold">{title}</p>
              </div>
          ))
        } 
        </div>

      </div>

    </div>
  )
}


       





export default Portfolio