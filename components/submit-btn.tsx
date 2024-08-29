import React from 'react';
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {

    const { pending } = useFormStatus();

  return (
    <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 dark:bg-[#e0e0e0] dark:text-black dark:font-semibold text-white rounded-full outline-none hover:bg-[#141313] focus:scale-110 hover:scale-110 active:scale-105 transition-colors  mx-auto mt-4 disabled:scale-100"
            disabled={pending}
          >
            {
                pending? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) : (
                    <>
                    Submit {" "} <FaPaperPlane className='text-xs opacity-70  transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}
                    </>
                )
            }
             </button>
  )
}
