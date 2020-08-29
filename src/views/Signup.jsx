import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Camera } from '../icons/icon-add-photo.svg'
import InputField from '../components/InputField'
import Button from '../components/Button'

const backgroundURL = "https://images.unsplash.com/photo-1568197260846-5e4e2aa3e9af"
const propTypes = {
    onDismiss: PropTypes.func,
    onSignUpResult: PropTypes.func
}

export default function Signup(props) {
    const {
        onDismiss = undefined,
        onSignUpResult = undefined
    } = props;
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const doSignUp = () => {
        console.log("Signing up...")
        fetch(
            'http://localhost:9000/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname: firstName,
                    lname: lastName,
                    email,
                    username,
                    password
                })
            }
        )
        .then(response => response.json())
        .then(json => {
            if(json.code !== 200) {
                onSignUpResult && onSignUpResult(false);
                return console.log(json.message)
            }
            onSignUpResult && onSignUpResult(true);
            console.log("User added: " + JSON.stringify(json.user))
        })
        .catch(err => {
            onSignUpResult && onSignUpResult(false);
            console.log(err)
        })
    }

    return (
        <div 
            style = {{
                zIndex: 0
            }} className="absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-50 md:bg-white md:bg-opacity-100 flex flex-col justify-end">
            <div 
                style={{
                   zIndex: -1 
                }}
                className="absolute left-0 bottom-0 w-full h-full visible md:hidden"
                onClick={() => {
                    onDismiss && onDismiss();
                }} />
            
            {/* Actual form section */}
            <div
                style={{
                    minHeight: '300px',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px'
                }} 
                className="signup-form overflow-auto bg-white max-w-xs w-full h-3/4 mx-auto py-8 px-8 space-y-5
                md:flex md:flex-col md:justify-center md:h-full md:my-auto">
                <div className="flex justify-between items-end">
                    <span className="text-xl font-bold ">
                        New<br/>Account
                    </span>
                    <div className="flex flex-col">
                        <div className="inline-block mx-auto md:my-auto border border-orange-500 rounded-full p-3">
                            <Camera className="h-6 w-6"/>
                        </div>
                        <span className="text-xs font-hairline">Upload picture</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <InputField label="First Name" onChange={(ev) => setFirstName(ev.target.value)} />
                    <InputField label="Last Name" onChange={(ev) => setLastName(ev.target.value)} />
                    <InputField label="Email" onChange={(ev) => setEmail(ev.target.value)} />
                    <InputField label="Username" onChange={(ev) => setUsername(ev.target.value)} />
                    <InputField label="Password" isPassword={true} onChange={(ev) => setPassword(ev.target.value)} />
                </div>
                <div className="flex space-x-2">
                    <Button 
                        className="mx-auto w-full text-center" 
                        buttonStyle={`${Button.styles.contained}`} 
                        text="Create"
                        onClick={() => doSignUp()} />
                    <Button 
                        className="hidden md:inline-block mx-auto w-full text-center"
                        buttonStyle={`${Button.styles.text}`}
                        text="Cancel"
                        onClick={ () => {
                            onDismiss && onDismiss();
                        }} />
                </div>
            </div>
        </div>
    )
}

Signup.propTypes = propTypes;

/* <div style= {
                {
                    borderTopLeftRadius: '2.75rem',
                    borderTopRightRadius: '2.75rem',
                    height: '32rem'
                }
            } className="bg-white px-10 py-10">
                {/* Header *//*}
                <div className="flex justify-between items-center">
                    <span className="font-extrabold text-xl">New <br/> Account</span>
                    <Camera className="h-8 w-8" />
                </div>
            
        </div>
    
 */

 /*
 <div className="relative flex flex-col md:flex-row justify-end md:justify-between h-screen">
            {// This section has the background image logic. }
            <div
                style={{
                    backgroundImage: `url("${backgroundURL}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                    zIndex: -1
                }}
                className="absolute md:static w-full h-full">
                {// Tint the background image. }
                <div className="bg-black bg-opacity-25 w-full h-full" />
            </div>
*/