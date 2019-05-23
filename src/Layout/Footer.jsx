import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <ul className='rules'>
                    <li><Link className='terms' to='/terms-and-conditions'>Terms & Conditions</Link></li>
                    <li><Link className='deliv' to='/delivery-returns'>Delivery & Returns</Link></li>
                </ul>
            <ul className='social'>
                <li><Link className='feed' to='/feedback'>Feedback</Link></li>
                <li><Link className='cont' to='/contact'>Contact Us</Link></li>
                <li className='language'>EN</li>
            </ul>
                {/* <div className="termsAndConditions"><Link className='terms' to='/terms-and-conditions'>Terms & Conditions</Link></div>
                <div className="delivery"><Link className='deliv' to='/delivery-returns'>Delivery & Returns</Link></div> */}

                {/* <div className="feedback"><Link className='feed' to='/feedback'>Feedback</Link></div>
                <div className="contact"><Link className='cont' to='/contact'>Contact Us</Link></div>
                <div className="language">EN</div> */}


            

            <div className="copyright">© 2019 PH-STORE</div>
            </footer>
        </>
    );
}

export default Footer;