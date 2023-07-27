import React from 'react'
import '../static/stylesheets/homepage.css'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function HomePage() {
    const color = useContext(ThemeContext)
    return (
        <div style={{color:color}} >This is Dhruv & it's our Context API</div>
    )
}

export default HomePage