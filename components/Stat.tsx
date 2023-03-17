import React from 'react'
import { useCountUp } from 'react-countup';

type StatProps = {
    label: string;
    end: number,
    duration: number
};

const Stat = ({ label, end, duration }: StatProps) => {

    const id = label.split(" ").join("");
    useCountUp({ ref: id, end, duration });

    return (
        <div className='w-48 flex items-center uppercase'>
            <div className='text-6xl'>
                +
            </div>
            <div className='text-6xl' id={id}>
            </div>
            <div className='text-sm text-left pl-4 text-slate-300'>
                {label}
            </div>
        </div>
    )
}

export default Stat
