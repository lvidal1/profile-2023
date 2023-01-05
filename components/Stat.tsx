import React from 'react'

type StatProps = {
    label: string;
    number: number
};

const Stat = ({ label, number }: StatProps) => {
    return (
        <div className='w-48 flex items-center uppercase'>
            <div className='text-6xl'>
                {number}
            </div>
            <div className='text-sm text-left pl-4 text-slate-300'>
                {label}
            </div>
        </div>
    )
}

export default Stat
