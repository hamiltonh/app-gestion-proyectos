import React from 'react'
import Link from 'next/dist/client/link'

const nuevaRuta = () => {
    return (
        <div>
            <h4>Probando una nueva ruta!</h4>
            <Link href="./">
                <a >Back to home!</a>
            </Link>
        </div>
    )
}

export default nuevaRuta
