import React, {useState} from 'react';

function Testp (props) {

    const products = props.products;

    let fruitsData = [
        {id: 0, title: 'apple', price: 2},
        {id: 1, title: 'banana', price: 4}
    ];

    const [fruits, setFruits] = useState([...fruitsData]);
    const [hello, setHello] = useState('hello');

    console.log('refresh');
/*
    const listP = products.map((p) =>
        <li key={p._id}>{p.title}</li>
    );
*/

    let sayHello = <p>{hello}</p>;

    let listFruits = fruits.map((f) =>
        <p key={f.id}>
            {f.title}
        </p>
    );

    const onChangeFruits = () => {
        setHello('hi');
        fruitsData[0].title = 'peach';
        setFruits(fruitsData);
        //console.log(fruits);

        listFruits = fruits.map((f) =>
            <p key={f.id}>
                {f.title}
            </p>
        );
    };
    

    const listP = products.map((p) =>
        <li key={p._id}>
            <div className='product'>
                <a href={'#' + p._id}>
                    <img src={p.image} alt={p.title} />
                    <p>{p.title}</p>
                </a>
                <div className='product-price'>
                    <div>
                        {p.price}
                    </div>
                    <button className='button primary'>Add to cart</button>
                </div>
            </div>
        </li>
    );


    return(   
        <div>
            <button onClick={onChangeFruits}>change fruit</button>   
            <ul>{listFruits}</ul>
            {sayHello}
      </div>
    );
} 
export default Testp;
