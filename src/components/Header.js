import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="py-7 bg-gray-900 text-white">
                <ul className="flex text-2xl justify-between px-10">
                    <span className="flex">
                        <li className="mx-5">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-5">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </span>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
