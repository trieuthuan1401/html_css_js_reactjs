/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Menu from './components/Menu'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ProductList />
          </div>
        </div>
        <button className="btn btn-outline-success float-right">Thêm sản phẩm </button>
      </div>
    </div>

  )
}
