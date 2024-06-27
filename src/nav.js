import React from 'react'
import { useState, useEffect } from 'react'
import './nav.css'
import {useNavigate} from 'react-router-dom'

function Nav() {
    //for scrolling and removing background while scroll
    const [show, setshow] = useState(false)
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setshow(true)
        }
        else {
            setshow(false)
        }
    }

    //code only runs when component match
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        //clean up function
        return () => {
            window.removeEventListener('scroll', transitionNavBar)

        }
    }, [])





    return (
        <div className={`nav ${show && 'nav-black'}`}>

            <div className='nav_contain'>
                <img
                onClick={()=>{
                    navigate('/')
                }}
                className='nav_logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />

                <img
                onClick={()=>
                    navigate('/profile')
                }
                className='nav_avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav