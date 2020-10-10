import React from 'react'

export default function ProductItem() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>Ip6</td>
      <td>Iphone 6 Plus</td>
      <td>
        <span className="badge badge-success">Còn hàng</span>
      </td>
      <td>
        <span className="btn btn-warning">Sửa</span>
        <span className="btn btn-danger ml-2">Xóa</span>
      </td>
    </tr>
  )
}
