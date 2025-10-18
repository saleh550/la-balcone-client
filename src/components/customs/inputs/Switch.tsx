import { Switch } from '@headlessui/react'
import React from 'react'
import { FcCheckmark } from "react-icons/fc";
interface props {
    onClick: () => void
    isChecked: boolean
}
export const SwitchButton: React.FC<props> = ({ onClick, isChecked }) => {
    return (
        <div dir='ltr'>

            <Switch
                checked={isChecked}
                // onChange={setEnabled}
                onClick={onClick}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-500 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-green-600 data-focus:outline data-focus:outline-white"
            >
                <span
                    aria-hidden="false"
                    className=" flex justify-center items-center pointer-events-none  size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
                >{isChecked && <FcCheckmark className='font-semibold' />}</span>
            </Switch>
        </div>
    )
}