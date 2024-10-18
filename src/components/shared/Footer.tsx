import React from 'react'

const Footer: React.FC = () => {
  return (
    <section className='bg-white w-full h-24 mt-auto px-12 md:px-32 flex flex-col md:flex-row md:justify-between justify-center md:items-center text-black border-t-2 font-bold'>
      <h1 className=''>Автор: Кузнецов Юрий</h1>
      <a href="https://github.com/UVKUZNETSOV/icecream-shop" className='flex items-center'>Исходный код →</a>
    </section>
  )
}

export default Footer