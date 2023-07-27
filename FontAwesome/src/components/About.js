import React from 'react'
import image from '../img1.jpg'

export default function About() {
    return (
        <div className='container d-flex justify-content-center' style={{ position: 'relative', top: '100px' }} >
            <div className="card text-bg-dark" style={{ width: '1000px', borderRadius:'30px' }} >
                <img src={image} style={{ width: '100%',filter: 'brightness(80%)', borderRadius:'30px' }} className="card-img" alt="..." />
                <div className="card-img-overlay" style={{padding: '55px'}}>
                    <h5 className="card-title" style={{
                        fontSize: '100px',
                        fontWeight: 'bold',
                        color: 'white',
                        border: '2px solid',
                        
                        
                    }} >About Us</h5>
                    <p className="card-text" style={{fontSize:'20px',color: '#fff0c3'}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text" style={{fontSize:'20px',color: '#fff0c3'}}><small>Thank you!</small></p>
                </div>
            </div>
        </div >
    )
}
