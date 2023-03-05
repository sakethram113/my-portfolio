import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Sociallinks = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:rampodicheti1234@gmail.com',
        },
        {
            id:3,
            child: (
                <>
                Resume<BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: './resume.pdf',
            download:true,
            style:'rounded-br-md'
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
        <ul>
            {links.map(({id,style,download,href,child})=>(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + style}>
                <a href={href} download={download} target="_blank" rel='noreferrer' className="flex justify-between items-center w-full text-white">
                {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Sociallinks

