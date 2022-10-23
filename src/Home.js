import React from 'react'

const Home = () => {
    const data = {
        name: 'Williams Ajayi Balogun',
        image: './image/avatar.png',
        profile: 'Aspiring Frontend Developer with extensive knowledge in design and web development. Organized and reliably successful at managing priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.',
        business: 'Frontend Developer',
    }
  return <>
    <article className="col-10 col-lg-9 d-flex align-items-center justify-content-around">
        <div className="info w-75 text-center">
            <div className="img-fluid mb-5 rounded-circle mx-auto" style={{width:'15rem', height:'15rem'}}>
                <img className=' rounded-circle rounded img-fluid w-100 h-100' src={data.image} alt={data.name}/>
            </div>
            <h1 className='fw-bolder'>{data.name}</h1>
            <h2>{data.business}</h2>
            <p>{data.profile}</p>
        </div>
        
    </article>
  </>
}

export default Home