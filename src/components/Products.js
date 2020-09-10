import React, {useState} from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

export default function Products (props) {
    const [currentProduct, setCurrentProduct] = useState(null);

    const openModal = (p) => {
        setCurrentProduct(p);
    };

    const closeModal = () => {
        setCurrentProduct(null);
    };


    return( 
        <div> 
            <Fade bottom cascade>
                <ul className='products'>
                    {
                        props.products.map(product => ( 
                            <li key={product._id}>
                                <div className='product'>
                                    <a href={'#' + product._id} onClick={() => openModal(product)}>
                                        <img src={product.image} alt={product.title} />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className='product-price'>
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className='button button-primary' onClick={() => props.addToCart(product)} >Add to cart</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Fade>
            { currentProduct && (
                <Modal isOpen onRequestClose={closeModal}>
                    <Zoom>
                        <button className='close-modal' onClick={closeModal}>x</button> 
                        <div className='product-details'>
                            <img src={currentProduct.image} alt={currentProduct.title} />
                            <div className='product-details-description'>
                                <p><strong>{currentProduct.title}</strong>  </p>
                                <p>{currentProduct.description}</p>
                                <p>Available sizes : {' '}
                                    {currentProduct.availableSizes.map(x =>(
                                        <span>
                                            {' '}
                                            <button className='button'>{x}</button>
                                        </span>
                                    )) }
                                </p>
                                <div className='product-price'>
                                    <div>{formatCurrency(currentProduct.price)}</div>
                                    <button className='button button-primary' 
                                        onClick={()=> {
                                            props.addToCart(currentProduct);
                                            closeModal();
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            )}
        </div>
    );
}; 
