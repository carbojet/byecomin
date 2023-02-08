import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div
            data-collapse='medium'
            data-animation='default'
            data-duration='400'
            data-w-id='0b6d58b7-c8f6-c4c2-5d56-04a30b2a6532'
            role='banner'
            className='navigation no-color w-nav'
        >
            <div className='container grid w-container'>
                <div id='w-node-04a30b2a6534-0b2a6532' className='flex-center'>
                    <Link
                        passHref
                        href='/'
                        className='brand left-margin w-nav-brand'
                    >
                        <Image width={150} height={45}  alt="byecom logo" src="/byecom-logo.png" />
                    </Link>

                    <nav role='navigation' className='nav-menu w-nav-menu'>
                        <Link href='/'>
                            <a className='nav-link w-nav-link'>Home</a>
                        </Link>
                        <Link href='/career'>
                            <a className='nav-link w-nav-link'>Careers</a>
                        </Link>
                        <Link href='/contact'>
                            <a className='nav-link w-nav-link'>Contact</a>
                        </Link>
                        {/* <Link href='/'>
                            <a className='nav-link w-nav-link'>About Us</a>
                        </Link> */}
                    </nav>
                </div>

                <div id='w-node-04a30b2a6592-0b2a6532' className='flex-center'>
                    <div className='menu-button w-nav-button'>
                        <div className='line-1'></div>
                        <div className='line-3'></div>
                        <div className='line-2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
