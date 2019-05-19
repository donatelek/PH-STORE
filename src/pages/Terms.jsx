import React, { Component } from 'react';
import '../components/MainSite.css';


class Terms extends Component {
    state = {}
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className='terms'>
                <h1 className='termsTitle'>Terms & Conditions</h1>
                <h2>AGREEMENT</h2>
                <section>This agreement exists between the customer (you) and Tluxe Clothing Company Pty Ltd. Registered office: Unit 2 9 Fletcher street, Tamarama, 2026, Australia, once Tluxe receives and accepts an order. The order may be accepted by Tluxe,  at our discretion. Each order is considered as a separate agreement.</section>



                <h2>DELIVERY</h2>
                <section>Anyone at the delivery address who receives and signs for the goods shall be presumed by Tluxe to be authorised to receive the goods on your behalf.</section>



                <h2>COST</h2>
                <section>The price you will pay is the price specified on the website. You also agree to pay the delivery fees and the GST (Australia only). International customers are responsible for their own countries duties and taxes.</section>



                <h2>SALE ITEMS</h2>
                <section>Previous purchases are not eligible for a discount.  Sale items can only be returned for an exchange or credit voucher.
               To exchange sale items simply return them to us in their original condition with the original invoice as proof of purchase.
               Once received we will issue you with a credit voucher. The voucher will be valid for 6 months for product purchase.
               Please use the enclosed returns form to tell us why you are returning the goods and quote your RA number.
                Return postage/shipping is at the expense of the purchaser.</section>


                <h2>PROMOTIONS</h2>
                <section>For any promotion that requires you to spend over a certain amount to obtain the promotion, your order must remain above this minimum spend even after returns are processed. If you are returning items that will drop your order total below the minimum spend you will normally forfeit your promotional discount or will be charged for any free items you have not returned.</section>



                <h2>LABELLING OF GOODS</h2>
                <section>Goods will be sent with tags indicating the full retail price of the garment and with care labels attached. All care instructions should be strictly adhered to as Tluxe declines all responsibility for damage caused to the garments by careless washing or mishandling.</section>



                <h2>COPYRIGHT</h2>
                <section>The entire content of this site, including but not limited to text, logo and images is the intellectual property of Tluxe Clothing Company Pty Ltd. You must not use or copy in any manner.</section>



                <h2>PRIVACY</h2>
                <section>Your privacy is important to us.
               Personal information is collected when an order is made or when you join our mailing list.
               Your information will only be used by Tluxe to process your order and to advise you of new products and special offers or events from time to time.
               We will not share any of your personal information with third parties other than intermediaries, for example courier companies.
                Should you wish to have your details removed from our database please click the unsubscribe link on any emails you receive from Tluxe.</section>


                <h2>SECURITY</h2>
                <section>All credit card transactions are handled by Paypal and are SSL encrypted and secure. Tluxe does not collect or record any credit card details that you use when purchasing.</section></div>
        );
    }
}
export default Terms;