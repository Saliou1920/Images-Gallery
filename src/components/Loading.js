import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                {<Spinner animation="border" variant="danger" />}
            </div>
        </div>
    )
}
