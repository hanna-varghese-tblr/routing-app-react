import React, { Component } from 'react';
import axios from 'axios';
import ListPost from './ListPost';
import './App.css';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import ReactPaginate from 'react-paginate';
loadProgressBar();

export default class CategoryComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            posts:[],
            offset:0,
            perPage:5
        };
    }
    handlePageClick = data => {
        let selected = data.selected; //gives selected page number
        let offset = Math.ceil(selected * this.state.perPage); //Offset id the starting data key in each click.eg 5,10,15..
        this.setState({ offset: offset }, () => {
          this.loadDataCall();
        });
    };
    loadDataCall()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            var endIndex = this.state.offset + this.state.perPage;
            var posts_trimmed=res.data.slice(this.state.offset, endIndex);

            var page_count=res.data.length / this.state.perPage;
            this.setState({
                posts:posts_trimmed,
                pageCount:page_count
            })
          },(error) => {
            console.log(error);
          });
    }
    componentDidMount()
    {
        this.loadDataCall();
    }
    render()
    {
        return(
            <div className="padding_cls">
                <p className="page-title">Fetching Data Using Axios</p>
                <ListPost disp={this.state.posts} ></ListPost>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}



