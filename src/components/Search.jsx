import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        searchInput: '',
        products: '',
        filteredProducts: []
    }

    componentDidMount() {
        this.props.handleSearching(this.props.products1)
    }

    handleSearchInput = (e) => {
        const searchInput = e.target.value;
        this.props.checkIfWeSearching(searchInput)
        this.setState({
            searchInput
        })
        var obj = {
            'homes': this.props.products1
        };
        var newArray = obj.homes.filter(function (el) {
            return el.devicename.toLowerCase().includes(searchInput.toLowerCase());
        });
        this.setState({
            filteredProducts: newArray
        })
        this.props.handleSearching(newArray)
    }

    render() {
        return (
            <>
                <div className="search">
                    <input data-test='searchInput' className="searchInput" onChange={this.handleSearchInput} value={this.state.searchInput} type="text" placeholder="Search" />
                    <i className="fas fa-search"></i>
                </div>
            </>
        );
    }
}

Search.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    handleSearching: PropTypes.func,
    products1: PropTypes.arrayOf(PropTypes.object),
    checkIfWeSearching: PropTypes.func
};

export default Search;