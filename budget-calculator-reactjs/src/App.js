import React, { useState, useEffect } from 'react';
import './App.css';
import { Alert } from './components/Alert';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import uuid from 'uuid/v4'

// const initialExpensive = [
//   { id: uuid(), charge: "buy book", amount: 200 },
//   { id: uuid(), charge: "buy phone", amount: 300 },
//   { id: uuid(), charge: "buy headphone", amount: 400 },
//   { id: uuid(), charge: "buy candy", amount: 500 }
// ]

const initialExpensive = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []


function App() {

  const [expenses, setExpenses] = useState(initialExpensive)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState()



  const handleCharge = e => {
    setCharge(e.target.value)
  }


  const handleAmount = e => {
    setAmount(e.target.value)
  }
  

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 2000);
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {

      if (id) {
        let tempExpense = expenses.map(item => item.id === id ? { ...item, charge, amount: Number(amount) } : item)
        setExpenses(tempExpense)
        setCharge('')
        setAmount('')
      } else {
        const singleExpense = { id: uuid(), charge, amount: Number(amount) }
        // clone lại cái cũ rồi thêm cái mới vô nữa trong 1 mảng
        setExpenses([...expenses, singleExpense])
        setCharge('')
        setAmount('')
        handleAlert({ type: 'success', text: 'Đã thêm thành công rồi đó 😂😂😂' })
      }

    } else {
      handleAlert({
        type: 'danger', text: 'Chi tiêu không được để rỗng và phải lớn hơn 0 nhén 😒😒😒'
      })
    }
  }




  const clearItems = () => {
    setExpenses([])
    handleAlert({ type: 'danger', text: 'Xoá sạch trơn rồi íiii 😎😎😎' })
  }




  const handleDelete = id => {
    let filterItem = [...expenses].filter(expense => expense.id !== id)
    setExpenses(filterItem)
    handleAlert({ type: 'danger', text: 'Xoá thành công rồi nhén 👌👌👌' })
  }




  const handleEdit = id => {
    setEdit(true)
    let expense = [...expenses].find(item => item.id === id)
    let { charge, amount } = expense
    setCharge(charge)
    setAmount(amount)
    setId(id)
  }




  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])



  return (

    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Sổ tay chi tiêu</h1>
      <main className='App'>
        <ExpenseForm

          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}

        />

        <ExpenseList

          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}

        />
      </main>
      <h1>Tổng cộng:
        <span className='total'>

          {/* accumulator ===> Biến tích luỹ */}
          {/* currentValue ===> Phần tử trong mảng hiện tại đang được xử lý */}
          {/* Số 0 ở cuối cùng là khởi điểm nó bằng 0 rồi cộng từ từ vào */}


          {expenses.reduce((total, expense) => (
            total += expense.amount
          ), 0)}


        </span>
      </h1>
    </>
  );
}

export default App;
