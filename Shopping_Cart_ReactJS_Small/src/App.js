import React, { useState } from 'react';
import './App.css';


const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'
function App() {


  const [cart, setcart] = useState([])
  const [total, settotal] = useState()
  const [page, setpage] = useState(PAGE_PRODUCTS)
  const [products, setproducts] = useState([

    {
      name: "Budweiser",
      cost: 2,
      image: "https://khohangtot.vn/wp-content/uploads/2019/10/bia-budweiser-5-chai-nhom-475ml-thung-24-chai.png",
    },

    {
      name: "Coca Cola",
      cost: 3,
      image: "https://bizweb.dktcdn.net/100/361/259/products/1-05e22bc2-69e2-4779-b36f-9b593ed9c893.jpg?v=1565688353947",
    },

    {
      name: "Pepsi",
      cost: 4,
      image: "https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/0/0/00012000030284_a1a3_900_900.jpg",
    },

    {
      name: "Tiger",
      cost: 5,
      image: "https://sc01.alicdn.com/kf/Ucf24fc9f515646108d6845abf06c1737S.jpg",
    },

  ])


  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className='product_list'>
        {
          products.map((product, idx) =>
            <div key={idx} className='product_item'>
              <h3>{product.name}</h3>
              <h4>{product.cost}</h4>
              <img src={product.image} alt="" />
              <button onClick={() => { addToCart(product) }}>Add to Cart</button>
            </div>
          )
        }
      </div>
    </>
  )


  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className='product_list'>
        {
          cart.map((product, idx) =>
            <div key={idx} className='product_item'>
              <h4>{product.name}</h4>
              <h4>{product.cost}</h4>
              <img src={product.image} alt="" />
              <button
                onClick={() => { removeFromCart(idx) }}>Remove</button>
            </div>
          )
        }
      </div>

      <p>{total}</p>
      <button onClick={totalCost}>Thanh toán</button>
    </>
  )


  const totalCost = () => {
    let totalCost = 0
    cart.map(product => totalCost += product.cost)
    settotal(totalCost)
  }



  const addToCart = (product) => {
    setcart([...cart, product])
    settotal("Bạn có muốn thanh toán hay không ?")
  }

  const removeFromCart = (idx) => {
    let newCart = cart.filter((product, index) => index !== idx);
    setcart(newCart)

    let totall = 0
    newCart.map(product => totall += product.cost)
    settotal(totall);
  }


  const navigateTo = (nextPage) => {
    setpage(nextPage)
  }

  return (
    <div className="App">
      <header>
        <button
          className='cart'
          onClick={() => { navigateTo(PAGE_CART) }}>
          Go to cart ( {cart.length} )
        </button>

        <button
          className='cart'
          onClick={() => { navigateTo(PAGE_PRODUCTS) }}>

          View products
        </button>


      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}

    </div>
  );
}

export default App;
