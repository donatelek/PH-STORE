import React from 'react';
import Pagination from './Pagination'
import Search from './Search';
const SecondSection = (props) => {
   
    return (
        <section className='promotionSection'>
            <div className="nav search">
                <Search products={props.products} handleSearching={props.handleSearching} products1={props.products1} checkIfWeSearching={props.checkIfWeSearching} />

            </div>
            <h1 className='products'>Products</h1>
            <div onClick={() => {
                console.log(props.match.path.replace('/', ' '))
            }} className="wrapper">
                {/* {products} */}
                <Pagination checkIfWeSearching={props.checkIfWeSearching} products={props.products} checkIfWeSearchingBoolean={props.checkIfWeSearchingBoolean} currency={props.currency} bogus={props.bogus} pageid={props.match.params.id} path={props.match.path.replace('/', ' ')} />
            </div>

        </section>

    );
}

export default SecondSection;