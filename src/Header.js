import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function Header() {
  const [items, setItems] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = items.length - 1
    if(index < 0) {
      setIndex(lastIndex )
    }
    if(index > lastIndex) {
      setIndex(0)
    }
  }, [index, items])

  useEffect(() => {
    let slider = setInterval(()=>{
      setIndex(index+1)
    },4000)
    return () => clearInterval(slider)
  },[index])

  return <section className='section row py-5 mx-0 bg-warning'>
    
    <div className="section-center col-6 px-0 py-0 shadow-lg my-0 mx-auto d-flex position-relative overflow-hidden text-center" style={{width:'22rem', height:'30rem'}}>
    {items.map((item, itemIndex) => {
        const {id, img, name, title, category,desc} = item
        let position = 'nextSlide'
        if(itemIndex === index) {
        position = 'activeSlide'
        }
        if(itemIndex === index - 1 || (index === 0 && itemIndex === items.length-1)) {
        position = 'lastSlide'
        }
        return <article className={`review card position-absolute top-0 left-0 w-100 h-100 flex-shrink-0 ${position}`} key={id}>
        <img src={img} alt={name} className='card-img-top  px-0 img-fluid' />
        {/* <h4 className='card-title'>{name}</h4>
        <p className="title card-subtitle">{title}</p>
        <p className="text card-text">{desc}</p> */}
        </article>
    })}
    </div>
    <div className="col-6 my-0 mx-auto bg-warning bg-opacity-25 rounded-5 shadow-lg">
        <p className='brand text-light text-opacity-75'>Only here can you get the best dishes</p>
        <p className='fs-4 text-light opacity-75 fw-bolder'>Look below for personal profile...check catalog below to make your choice...</p>
    </div>
  </section>;
}

export default Header;
