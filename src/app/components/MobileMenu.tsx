import React from 'react'
import Navitems from './NavItems'
import TabButtons from './TabButtons'
import styles from './Mobilemenu.module.css'

const Mobilemenu = ({ links }: { links: any[] }) => {
    return (
        <div>
            <ul className='flex flex-col py-4 items-center'>
                {
                    links.map((item, index) => (
                        <li key={index}>
                            <Navitems href={item.href} title={item.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Mobilemenu
