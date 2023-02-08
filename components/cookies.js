import Link from 'next/link';

export default function Cookies() {
    return (
        <div className='cookies-wrapper'>
            <p className='cookies-font'>
                By navigating this website, you agree to our
                <Link href='#'>Cookie Policy</Link>.
            </p>
            <div className='remove-icon'></div>
        </div>
    );
}
