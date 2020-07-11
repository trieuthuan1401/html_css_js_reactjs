import React, { Component } from 'react'

export default class Search extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         dataSearch : ' '
    //     }
    // }
    getContent = (event) => {
        const value = event.target.value
        this.props.getContentSearch(value)
        this.setState = ({
            dataSearch: value,
        })
    }
    getContentClick() {
        this.props.getContentSearch(this.refs.contentClick.value)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control timkiem" placeholder="Nhập tên cần tìm kiếm..." aria-describedby="helpId" onChange={(event) => this.getContent(event)} ref='contentClick' />
                            {/* <button href="#top" className="btn btn-outline-success" onClick = {() => this.getContentClick()} ><span>Tìm kiếm </span></button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
