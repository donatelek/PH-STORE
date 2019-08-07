import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <ul className='rules'>
                    <li><Link data-test='terms' className='terms' to='/terms-and-conditions'>Terms & Conditions</Link></li>
                    <li><Link data-test='deliv' className='deliv' to='/delivery-returns'>Delivery & Returns</Link></li>
                </ul>
                <ul className='social'>
                    <li><Link data-test='feed' className='feed' to='/feedback'>Feedback</Link></li>
                    <li><Link data-test='contact' className='cont' to='/contact'>Contact Us</Link></li>
                    <li className='language'>EN</li>
                </ul>
                <div className="copyright">© 2019 PH-STORE</div>
            </footer>
        </>
    );
}

export default Footer;