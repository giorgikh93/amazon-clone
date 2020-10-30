import React from 'react';
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className='checkout'>
            {/* <img
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OOC_Amazon1._CB423492668_.jpg'
                className='checkout__ad'
                alt='ad'
            /> */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping basket is empty</h2>
                </div>
            ) :

                <div style={{ height: '500px', width: '100%' }}>
                    <h2 className='checkout__title'>Your shopping basket</h2>
                    <hr />
                    {basket.map((item, index) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))
                    }
                    <div>

                    </div>

                </div>
            }
            {basket.length > 0 && (
                <div className='checkout__right'>
                        <SubTotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout;