import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class Newsapi extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1
    }
  }
  async componentDidMount() {
     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4677f8ee7f064d75828ccb4a45aea420&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles , toltalArticles:parseData.toltalResults})
  }
  handleprevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4677f8ee7f064d75828ccb4a45aea420&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({page:this.state.page - 1 ,articles:parseData.articles })
  }
  handlenextClick= async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.toltalResults/20)){

    } 
    else{ 
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4677f8ee7f064d75828ccb4a45aea420&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({page:this.state.page + 1 ,articles:parseData.articles})
  }
  
 }


  render() {
    return (
      <div className='container my-3'>
        <h2>News -Top Headlines</h2>
        <div className='row '>
          {this.state.articles.map((element,i) => (

             <div className='col-md-4'key={element.url} >
              <Newsitems  title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newurl={element.url}  />
            </div>
          )
          )}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handleprevClick}>&larr; Previous</button>
          <button   className='btn btn-dark' onClick={this.handlenextClick}>Next &rarr;</button>
        </div>





      </div>
    )
  }
}

export default Newsapi
