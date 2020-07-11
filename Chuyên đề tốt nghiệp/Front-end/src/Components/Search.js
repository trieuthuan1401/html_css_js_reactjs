import React, { Component } from 'react'


function handleScroll() {
    let html = document.querySelector('html')
    html.scrollTop = 713.3333740234375
}
export default class Search extends Component {
    getContent = (event) => {
        const value = event.target.value
        this.props.getContentSearch(value)
    }

    render() {
        return (
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control timkiemmm" placeholder=" Nhập tên khoá học..." aria-describedby="helpId" onChange={(event) => this.getContent(event)} ref='contentClick'
                        onClick={() => handleScroll()}
                    />
                    <i className='fa fa-search'></i>
                </div>
            </div>

        )
    }
}