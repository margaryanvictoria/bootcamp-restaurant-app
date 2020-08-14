import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../components/InputField'
import Button from '../components/Button'

const genericPhoto = "https://images.unsplash.com/photo-1568197260846-5e4e2aa3e9af"
const propTypes = {
    onDismissed: PropTypes.func
}

export default function SignIn(props) {
    const { onDismissed = undefined } = props;

    return (
        <div 
            style={{
                zIndex: 0
            }}
            className="absolute left-0 bottom-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-end md:justify-center md:bg-white">
            {/* To dismiss SignIn */}
            <div 
                style={{
                    zIndex: -1
                }}
                className="absolute h-full w-full md:hidden"
                onClick={() => {
                    onDismissed && onDismissed();
                }} />     

            <div 
                style={{
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px'
                }}
                className="signup-form bg-white max-w-xs mx-auto px-5 py-5 space-y-5">
                {/* Header sections */}
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        Welcome back!
                    </span>
                    <div className="h-10 w-10 rounded-full bg-gray-500 border border-none overflow-hidden">
                        <img className="h-full object-cover"
                            src={`${genericPhoto}`}/>
                    </div>
                </div>
                {/* Body section */}
                <div className="flex flex-col space-y-2">
                    <InputField label="Username" />
                    <InputField isPassword={true} label="Password" />
                    <a href="#" className="text-right px-3 text-purple-500">Forgot password?</a>
                </div>
                <div>
                    <Button className="w-full" buttonStyle={`${Button.styles.contained}`} text="Sign In"/>
                    <Button
                        className="w-full hidden md:inline-block"
                        buttonStyle={`${Button.styles.contained}`}
                        text="Cancel"
                        onClick={ () => {
                            onDismissed && onDismissed();
                        }} />
                </div>
                
            </div>
        </div>
    )
}

SignIn.propTypes = propTypes;