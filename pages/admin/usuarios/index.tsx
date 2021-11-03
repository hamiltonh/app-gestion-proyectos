import React from 'react'
import Link from 'next/dist/client/link'

const index = () => {
    return (
        <div>
            <h3>Ruta nueva dentro de admin/usuarios/</h3>
            <Link href="../">
                <a className="text-red-900">Back to home!</a>
            </Link>
        </div>
    )
}

export default index
