import React from 'react'
import { ReactComponent as Icon } from '../icons/icon-restaurant.svg'
import Signup from './Signup';

const backgroundURL = "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=975&q=80";

export default function Main(props) {
    return (
        <div className="h-screen md:flex"> 
            {/* Background image */}  
            <div
                style={
                    {
                        backgroundImage: `url(${backgroundURL})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 'cover',
                        zIndex: -2
                    }
                } className="absolute md:static left-0 top-0 w-full md:w-1/2 h-full" >
                    
                {/* Darken the background */}
                <div className="visible md:hidden bg-black h-full w-full bg-opacity-25"
                    style={{
                        zIndex: -1
                    }}>
                </div>
            </div>
            
            <div className="flex flex-col justify-between h-full md:space-y-10 md:w-1/2 md:justify-center md:bg-black md:bg-opacity-50">
                <div className="pt-8 mx-auto my-auto md:flex-none md:my-0">
                    {/* This is the Header section */}
                    <Icon className="h-20 w-20 text-orange-500 bg-white rounded-lg p-1 fill-current mx-auto"/>
                    <span className="block mt-2 text-white text-center text-2xl font-semibold leading-none">
                        Welcome all
                        <br/>
                        Foodies!
                    </span>    
                </div>

                {/* These are the buttons */}
                <div className="flex flex-col w-full items-center space-y-3 pb-10 px-5 max-w-sm mx-auto md:flex-none">
                    <button className="px-3 py-2 w-full rounded-full bg-orange-500 text-white">Sign Up</button>
                    <button className="px-3 py-2 w-full rounded-full bg-white text-orange-500">Sign In</button>
                </div>
            </div>
            {/* <Signup /> */}
        </div>
    )
}
