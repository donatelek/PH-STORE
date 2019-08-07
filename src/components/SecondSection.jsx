import React from 'react';
import Pagination from './Pagination'
import Search from './Search';
import PropTypes from 'prop-types';

const SecondSection = (props) => {
    return (
        <section className='promotionSection' id='promotionSection'>
            <div className="nav search">
                <Search products={props.products} handleSearching={props.handleSearching} products1={props.products1} checkIfWeSearching={props.checkIfWeSearching} />
            </div>
            <h1 className='products'>Products</h1>
            <div className="wrapper">
                <Pagination checkIfWeSearching={props.checkIfWeSearching} products={props.products} checkIfWeSearchingBoolean={props.checkIfWeSearchingBoolean} currency={props.currency} />
            </div>
        </section>
    );
}

SecondSection.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    currency: PropTypes.string,
    checkIfWeSearching: PropTypes.func,
    checkIfWeSearchingBoolean: PropTypes.bool,
    handleSearching: PropTypes.func,
    products1: PropTypes.arrayOf(PropTypes.object)
};

export default SecondSection;