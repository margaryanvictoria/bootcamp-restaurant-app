import React from 'react'
import { ReactComponent as Camera } from '../icons/icon-add-photo.svg'

export default function Signup(props) {
    return (
        <div style= {
                {
                    borderTopLeftRadius: '2.75rem',
                    borderTopRightRadius: '2.75rem',
                    height: '32rem'
                }
            } className="bg-white px-10 py-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <span className="font-extrabold text-xl">New <br/> Account</span>
                    <Camera className="h-8 w-8" />
                </div>
            
        </div>
    )
}
