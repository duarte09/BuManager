import { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    let Links = [
        { name: "INICIO", link: "/" },
        { name: "SERVIÇOS", link: "/serviços" },
        { name: "SOBRE NÓS", link: "/sobre" },
        { name: "CONTATO", link: "/contato" },
        { name: "LOJA", link: "/loja" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-[9999]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span>BuManager</span>
                </div>

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                        </li>
                    ))}
                    <a href="/login">
                        <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
                            Faça login ou registre-se
                        </button>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Header;
