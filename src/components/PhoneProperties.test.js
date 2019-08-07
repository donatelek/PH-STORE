import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneProperties from './PhoneProperties'

configure({ adapter: new Adapter() });

const defaultProps = {
    location: {
        pathname: '/properties/17'
    },
    Products: [{
        condition: "new",
        description: "Selling new Xiaomi mi6 with 12 months warranty.",
        devicename: "Xiaomi MI5",
        email: "Johndoe@gmail.com",
        id: 16,
        photo: "https://gsm.magazyn.pl/pic/b/xiaomi-mi5.jpg",
        priceusd: "339",
        quantity: "1"
    },
    {
        condition: "new",
        description: "Selling new Xiaomi mi6 with 12 months warranty.",
        devicename: "Xiaomi MI6",
        email: "Johndoe@gmail.com",
        id: 17,
        photo: "https://gsm.magazyn.pl/pic/b/xiaomi-mi6.jpg",
        priceusd: "339",
        quantity: "1"
    }, {
        condition: "new",
        description: "Selling new Xiaomi mi6 with 12 months warranty.",
        devicename: "Xiaomi MI7",
        email: "Johndoe@gmail.com",
        id: 1,
        photo: "https://gsm.magazyn.pl/pic/b/xiaomi-mi7.jpg",
        priceusd: "339",
        quantity: "1"
    }, {
        condition: "new",
        description: "Selling new Xiaomi mi6 with 12 months warranty.",
        devicename: "Xiaomi MI8",
        email: "Johndoe@gmail.com",
        id: 2,
        photo: "https://gsm.magazyn.pl/pic/b/xiaomi-mi8.jpg",
        priceusd: "339",
        quantity: "1"
    }, {
        condition: "new",
        description: "Selling new Xiaomi mi6 with 12 months warranty.",
        devicename: "Xiaomi MI9",
        email: "Johndoe@gmail.com",
        id: 3,
        photo: "https://gsm.magazyn.pl/pic/b/xiaomi-mi9.jpg",
        priceusd: "339",
        quantity: "1"
    }],

    Cart: [{
        id: 17,
        email: 'asdasd@wp.pl'
    }],
    shuffle: [1, 2, 3, 0],
    currency: 'USD'

};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<PhoneProperties {...setupProps} />)
};

describe('<PhoneProperties/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(PhoneProperties, defaultProps);
    });
    it('display proper product img', () => {
        const productImg = findByTestAttr(wrapper, 'productImg');
        expect(productImg.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi6.jpg')
    })
    it('display proper product img mobile', () => {
        const productImgMobile = findByTestAttr(wrapper, 'productImgMobile');
        expect(productImgMobile.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi6.jpg')
    })
    it('display proper device name', () => {
        const deviceName = findByTestAttr(wrapper, 'deviceName');
        expect(deviceName.text()).toEqual('Xiaomi MI6')
    })
    it('display proper device price', () => {
        const devicePrice = findByTestAttr(wrapper, 'devicePrice');
        expect(devicePrice.text()).toEqual('Price: 339 USD')
    })
    it('display proper seller name', () => {
        const sellerName = findByTestAttr(wrapper, 'sellerName');
        expect(sellerName.text()).toEqual('Seller: Johndoe')
    })
    it('display proper product condition', () => {
        const conditionProduct = findByTestAttr(wrapper, 'conditionProduct');
        expect(conditionProduct.text()).toEqual('Condition: new')
    })
    it('display proper user contact', () => {
        const userContact = findByTestAttr(wrapper, 'userContact');
        expect(userContact.text()).toEqual('Contact to seller: Johndoe@gmail.com')
    })
    it('display proper item description', () => {
        const itemDescription = findByTestAttr(wrapper, 'itemDescription');
        expect(itemDescription.text()).toEqual('Description: Selling new Xiaomi mi6 with 12 months warranty.')
    })
    it('display In Cart text on add to cart button', () => {
        const addToCartButton = findByTestAttr(wrapper, 'addToCartButton');
        expect(addToCartButton.text()).toEqual('In Cart')
    })
    it('display add to cart text on add to cart button', () => {
        wrapper.setProps({
            Cart: [{
                id: 1,
                email: 'asdasd@wp.pl'
            }],
        })
        const addToCartButton = findByTestAttr(wrapper, 'addToCartButton');
        expect(addToCartButton.text()).toEqual('Add to cart')
    })
    it('display proper device name in shuffled product1', () => {
        const shuffledProductName1 = findByTestAttr(wrapper, 'shuffledProductName1');
        expect(shuffledProductName1.text()).toEqual('Xiaomi MI6')
    })
    it('display proper device name in shuffled product2', () => {
        const shuffledProductName2 = findByTestAttr(wrapper, 'shuffledProductName2');
        expect(shuffledProductName2.text()).toEqual('Xiaomi MI7')
    })
    it('display proper device name in shuffled product3', () => {
        const shuffledProductName3 = findByTestAttr(wrapper, 'shuffledProductName3');
        expect(shuffledProductName3.text()).toEqual('Xiaomi MI8')
    })
    it('display proper device name in shuffled product4', () => {
        const shuffledProductName4 = findByTestAttr(wrapper, 'shuffledProductName4');
        expect(shuffledProductName4.text()).toEqual('Xiaomi MI5')
    })
    it('display proper img in shuffled product1', () => {
        const shuffledProductImg1 = findByTestAttr(wrapper, 'shuffledProductImg1');
        expect(shuffledProductImg1.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi6.jpg')
    })
    it('display proper img in shuffled product2', () => {
        const shuffledProductImg2 = findByTestAttr(wrapper, 'shuffledProductImg2');
        expect(shuffledProductImg2.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi7.jpg')
    })
    it('display proper img in shuffled product3', () => {
        const shuffledProductImg3 = findByTestAttr(wrapper, 'shuffledProductImg3');
        expect(shuffledProductImg3.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi8.jpg')
    })
    it('display proper img in shuffled product4', () => {
        const shuffledProductImg4 = findByTestAttr(wrapper, 'shuffledProductImg4');
        expect(shuffledProductImg4.prop('src')).toEqual('https://gsm.magazyn.pl/pic/b/xiaomi-mi5.jpg')
    })

})