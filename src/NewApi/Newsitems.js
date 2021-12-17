import React, { Component } from 'react'


 class Newsitems extends Component {
     
    


   render() {
    let { title, description ,imageurl,newurl} = this.props;
       return (
        <div className='my-3'>
            <div className="card" style={{width :"18rem"}}>
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{ description}...</p>
                    <a rel='noreferrer' href={newurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Newsitems
