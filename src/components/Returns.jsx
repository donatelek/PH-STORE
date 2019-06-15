import React, { Component } from 'react';
import '../Styles/MainSite.css';


class Returns extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='returns'>
                <h1  className='returnsTitle'>Delivery & Returns</h1>
                <h2>DELIVERY</h2>
                <section>Deliveries within Australia are made by Star track Express, Sendle, or Australia Express Post, and will arrive within a week from the date of your order (not including public holidays or weekends). Generally most orders arrive within 3 working days.

                Please indicate your daytime address for delivery, as a request for a second delivery will require an additional fee. Any incorrect address details will often result in the parcel being returned to the sender, in which case you will be charged for re-delivery.

                All deliveries are traceable and require a signature, unless you the customer, selects the Standard Shipping - Authority to Leave option. Selecting this option gives the courier authority to leave the parcel unattended at your chosen address if they believe there is a safe place to leave it, and ph-store will not be responsible for any misplaced or unclaimed parcels.

                We charge the following shipping rates within Australia for order below $200, varying by location:

                $8.00-$10.00 for Standard Shipping - Authority to Leave (2-4 days)
                $10.00-$12.00 for Standard Shipping - Signature Required (2-4 days)
                $15.00 for Express Shipping (1-2 days).
                Free shipping is provided for orders above $200.
                International deliveries will be sent using international courier and are charged at a flat fee of $30.00 for orders below $300, and free shipping for orders above $300. Please allow 6-13 business days for delivery.

                All prices on our website are in AUS Dollars and are inclusive of 10% GST. If your order is being delivered outside of Australia then we will not charge you GST, but you will need to pay your country’s custom fees and import duties when you receive your package.

All orders are subject to availability. From time to time we may be waiting for a new delivery. We apologise if your items are unavailable and will contact you to offer a refund or to suggest placing your items on back order, which will ensure you receive them as priority once stock has been delivered to ph-store.</section>
                <h2>RETURNS</h2>
                <section>If you are not happy with our products, please return them and we will either exchange them or give you your money back excluding postage costs. We will do our best to exchange items depending on stock availability.

               Garments must be unworn and unwashed in their original packaging with all tags attached.

               Please notify us within 7 days of receipt of goods if you would like to return your order. Send an email to donatelek92@gmail.com and request an RA number. Include your order number in this email and notify us which goods you would like to exchange or return.

               Then return goods by registered or express post, postmarked within 7 days of receipt of the RA number to :

               PH-STORE
               PO Box 3472, Tamarama, NSW 2026, AUSTRALIA
               We recommend that all returns and exchanges be sent using a traceable carrier. ph-store will not be held responsible for packages not received by us that were returned without a tracking number.

               Goods returned without a requested RA number will not be approved for exchange or refund.

Garments will not be eligible for exchange/return if we consider them used or if they are without tags attached.</section>
                <h2>SALE ITEMS & DISCOUNTS</h2>
                <section>Previous purchases are not eligible for a discount. Sale or discounted items are final sale, and can only be returned for a credit voucher.

               To exchange sale items simply return them to us in their original condition with the original invoice as proof of purchase.

               Once received we will issue you with a credit voucher.

               The voucher will be valid for 6 months for product purchase.

               Please use the enclosed returns form to tell us why you are returning the goods and quote your RA number.

Return postage/shipping is at the expense of the purchaser.</section>
                <h2>PROMOTIONS</h2>
                <section>For any promotion that requires you to spend over a certain amount to obtain the promotion, your order must remain above this minimum spend even after returns are processed. If you are returning items that will drop your order total below the minimum spend you will normally forfeit your promotional discount or will be charged for any free items you have not returned.</section>
            </div>
        );
    }
}

export default Returns;