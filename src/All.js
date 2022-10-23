import React from 'react'
import items from './data'

function Allfood() {
    
  return <>
    <article className="col-12 col-lg-9 p-5 d-flex flex-row flex-wrap align-items-start justify-content-between">
    {
        items.map(item => {
            const {id, title, price, img, desc} = item
            return <>
                <div key={id} className='card p-0 mb-5' style={{width:'22rem', height:'30rem'}}>
                    <img className='card-img-top h-50' src={img} alt={title} />
                    <div className="card-body item-details">
                        <h3 className='card-title'>{title}</h3>
                        <h3 className='card-subtitle badge bg-warning bg-opacity-75 fs-5'>${price}</h3>
                        <hr />
                        <p className='card-text'>{desc}</p>
                    </div>
                </div>
            </>
        })
    }
    </article>
  </>
}

export default Allfood