import React, {useState} from 'react';
import formatCurrency from '../util';

export default function Cart (props) {
    const {cartItems} = props;

    const [showCheckout, setShowCheckout] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const onShowCheckout = () => {
        setShowCheckout(true);
        
    };

    const handleInput = (e) => {
        let inputType = e.target.name;
        let inputValue = e.target.value;

        switch (inputType){
            case 'name':
                setName(inputValue);
                break;
            case 'email':
                setEmail(inputValue);
                break;
            case 'address':
                setAddress(inputValue);
                break;
                default:
        }// switch

    };

    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: name,
            email: email,
            address: address,
            cartItems: props.cartItems
        };
        props.createOrder(order);
    };

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
                    <div>
                        <div className='cart'>
                            <div className='total'>
                                <div>
                                    Total : {' '}{formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                                </div>
                                <button onClick={onShowCheckout} className='button button-primary'>Proceed</button>
                            </div>
                        </div>
                      
                        { showCheckout && ( 
                            <div className='cart'>
                                <form onSubmit={createOrder}>
                                    <ul className='form-container'>
                                        <li>
                                            <label>Email</label>
                                            <input type='email' required name='email' onChange={handleInput} />
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input type='text' required name='name' onChange={handleInput} />
                                        </li>
                                        <li>
                                            <label>Address</label>
                                            <input type='text' required name='address' onChange={handleInput} />
                                        </li>
                                        <li>
                                            <button className='button button-primary' type='submit'>Checkout</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        )}               
                  </div>
                )}
                       
            </div>
        </div>
    );
}; 
