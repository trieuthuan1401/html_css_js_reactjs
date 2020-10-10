import React from 'react'
import ProductItem from '../ProductItem'

export default function ProductList() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Mã</th>
          <th scope="col">Tên</th>
          <th scope="col">Giá</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <ProductItem />
      </tbody>
    </table>
  )
}
