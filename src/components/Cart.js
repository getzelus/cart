import React from 'react';
import formatCurrency from '../util';

export default function Cart (props) {
    const {cartItems} = props;

    return( 
        <div> 
            <div className='cart cart-header'>
                { props.cartItems.length === 0 ? 
                    <span>Cart is empty</span>
                :
                    <span>You have {props.cartItems.length} products in the cart</span>
                }
            </div>
            <div>
                <div className='cart'>
                    <ul className='cart-items'>
                        { 
                            props.cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                      <div> {item.title}</div> 
                                      <div className='right'>
                                          {formatCurrency(item.price)} x {item.count} {' '}
                                        <button className='button' onClick={() => props.removeFromCart(item)}>Remove</button>
                                      </div>     
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                { cartItems.length !== 0 && (
                    <div className='cart'>
                        <div className='total'>
                            <div>
                                Total : {' '}{formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                            </div>
                            <button className='button button-primary'>Proceed</button>
                        </div>
                    </div>
                ) }
               
            </div>
        </div>
    );
}; 
