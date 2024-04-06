import React from 'react'

const TabButtons = ({active, selectTab, children}: {active: boolean, selectTab: () => void, children: React.ReactNode}) => {
        const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#f4f8fa]'
    return (
        <button onClick={selectTab}>
                <p className='mr-3 font-semibold hover:text-green-300 text-[#f4f8fa] border-b border-green-200 ${buttonClasses}'>
                        {children}
                </p>
        </button>
                
    )
}

export default TabButtons
