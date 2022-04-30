import React from 'react';
import ProductCard from '../productCard/ProductCard';
import watch from '../../imges/watch1.png';
import bracelet1 from '../../imges/bracelet1.png';
import bracelet2 from '../../imges/bracelet2.png';
import Checkout from '../chekout/Checkout';
import SearchBar from '../searchBar/SearchBar';
import HeaderBar from '../header/HeaderBar';
import './shopping.cart.css';

const ShoppingCart = () => {
  const [subTotal, setSubTotal] = React.useState(0);
  const [noOfItems, setNoOfItems] = React.useState(0);
  const [products, setProducts] = React.useState([
    {
      pid: 1,
      name: 'Sample product 1',
      price: 899,
      img: bracelet1,
      quantity: 1,
    },
    {
      pid: 2,
      name: 'Sample product 2',
      price: 599,
      img: watch,
      quantity: 1,
    },
    {
      pid: 3,
      name: 'Sample product 3',
      price: 99,
      img: bracelet2,
      quantity: 1,
    },
  ]);

  const deleteProd = (id) => {
    const filterdProd = products.filter((prod) => prod.pid !== id);
    setProducts(filterdProd);
  };

  const incrProd = (id) => {
    const newProducts = products.map((prod) => {
      if (prod.pid === id) {
        prod.quantity = prod.quantity + 1;
      }
      return prod;
    });

    setProducts(newProducts);
  };

  const decrProd = (id) => {
    const newProducts = products.map((prod) => {
      if (prod.pid === id) {
        prod.quantity = prod.quantity - 1;
      }
      return prod;
    });
    setProducts(newProducts);
  };

  React.useEffect(() => {
    let itemCount = 0;
    const total = products.reduce((acc, curr) => {
      itemCount += curr.quantity;
      return acc + curr.price * curr.quantity;
    }, 0);
    setSubTotal(total);
    setNoOfItems(itemCount);
  }, [products, subTotal]);

  return (
    <div className="shopping-cart-container">
      <HeaderBar />
      <SearchBar />
      {products.length > 0 ? (
        products.map((prod) => {
          return (
            <ProductCard
              product={prod}
              key={prod.pid}
              deleteProd={deleteProd}
              incrProd={incrProd}
              decrProd={decrProd}
            />
          );
        })
      ) : (
        <div className="cart-empty-msg">Your cart is empty</div>
      )}

      {products.length > 0 && (
        <Checkout subTotal={subTotal} items={noOfItems} />
      )}
    </div>
  );
};

export default ShoppingCart;
