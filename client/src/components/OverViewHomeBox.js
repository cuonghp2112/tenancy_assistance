import React, { Component } from 'react';



export default class OverViewHomeBox extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="course-block mx-auto">
                    <a href="index.ejs">
                        <main className="bg-light">
                            {/* <img src="/image/room5.jpg" width="258" height="172" alt=""/> */}
                            <img alt={this.props.name} src={this.props.img} style = {{width: 258, height:172}}/>
                                <div className="col-md-12">
                                    <h6 className="course-title">{this.props.name}</h6></div>
                                <div className="instructor-clist">
                                    <div className="col-md-12">
                                        <i className="fa fa-chalkboard-teacher"></i>&nbsp;
                                {/* <span>Created by <b>Anh Dung</b></span> */}
                                <span>Address: <b>{this.props.address}</b></span>
                                    </div>
                                </div>
                        </main>
                            <footer>
                                <div className="c-row">
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <h5 className="course-price">{this.props.price} Đ <s/></h5>
                                    </div>
                                <div className="col-md-5 offset-md-1 col-sm-5 offset-sm-1 col-5 offset-1">
                                    <star className="course-rating">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </star>
                                </div>
                        </div>
                    </footer>
                    </a>
                </div>
            </div>
        );
    }
}