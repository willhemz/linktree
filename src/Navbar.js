import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import items from './data'

const Navbar = () => {
    const allCategories = ['all', ...new Set(items.map(item => item.category))]

    const [categories, setCategories] = useState(allCategories)

    return <nav class="navbar navbar-expand-lg bg-body bg-opacity-25 shadow-lg rounded h-100">
        <ul className="navbar-nav me-auto mb-2 p-2 mb-lg-0 d-flex flex-row flex-md-column justify-content-around w-100">
            <li className="nav-item lh-lg">
                <Link to='/' className="nav-link active text-primary fs-5" aria-current="page">Home</Link>
            </li>
            {
                categories.map((category, index) => {
                    return <>
                        <li key={index} className='nav-item lh-lg'>
                            <Link className="nav-link active text-primary fs-5" aria-current="page" style={{textTransform: 'capitalize'}} to={category}>{category}</Link>
                        </li>
                    </>
                })
            }
        </ul>
    </nav>
}

export default Navbar
