import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
        <div>
            <h1>
            <Link to="/" className='link'>Sudoku App</Link>
            </h1>
            <h1>
            <Link to="/about" className='link'>about</Link>
            </h1>
        </div>
  )
}

export default Header
