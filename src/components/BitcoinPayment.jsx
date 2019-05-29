import React, { Component } from 'react';
import './BitcoinPayment.css';

class BitcoinPayment extends Component {
    state = { 
        showSuccessPayment:false,
     }
    handleShowSuccessPayment=()=>{
        console.log('33333333')
        this.setState({
            showSuccessPayment:true
        })
        setTimeout(()=>{
            this.setState({
                showSuccessPayment:false
                
            })
        },5000)
    }
    render() { 
        return ( 

            <div className="btcPayment">
            <h1>Bitcoin Payment</h1>
            <h2>Send {this.props.Subtotal()} BTC to address shown below</h2>
            <h3 className='btcAddress'>i84mf893jmf89jz89sfjq98jf8924jf89g54</h3>
            <h3>You have 60 minutes to send BTC after that your payment will be cancelled</h3>
            <h4>Transaction status will change after 3 confirmations from bitcoin network</h4>
            <button className='cancelBTC' onClick={()=>{
                this.props.handleShowBitcoinPayment()
                
            }
                }>Cancel transaction</button>
            <button className='sentBTC' onClick={()=>{
                return(
                    this.handleShowSuccessPayment(),
                    this.props.handleShowBitcoinPayment('yes')
                )
                
                }}>I've sent Bitcoins</button>
            {this.state.showSuccessPayment&&<h3>Thank you for payment</h3>}
        </div>
         );
    }
}
 
export default BitcoinPayment;


// const BitcoinPayment = (props) => {
//     return ( 
//         <div className="btcPayment">
//             <h1>Bitcoin Payment</h1>
//             <h2>Send {props.Subtotal()} BTC to address shown below</h2>
//             <h3 className='btcAddress'>i84mf893jmf89jz89sfjq98jf8924jf89g54</h3>
//             <h3>You have 60 minutes to send BTC after that your payment will be cancelled</h3>
//             <h4>Transaction status will change after 3 confirmations from bitcoin network</h4>
//             <button className='cancelBTC' onClick={()=>{
//                 props.handleShowBitcoinPayment()
//                 props.handleShowSuccessPayment()
//             }
//                 }>Cancel transaction</button>
//             <button className='sentBTC'>I've sent Bitcoins</button>
//             {props.showSuccessPayment&&<h3>Thank you for payment</h3>}
//         </div>
//      );
// }
 
// export default BitcoinPayment;