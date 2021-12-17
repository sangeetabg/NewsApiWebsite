import React, { Component } from 'react'

export class ContactUs extends Component {
    state={
        passwordtype:"password"
    }
    handleclick=()=>{
        this.setState({passwordtype:"text"})

    }
    render() {
        return (
            <div>
                <div className='container '>
                    <div className='row '>
                        <div className='col-md-4 '>
                        <form>
                    <div className="mb-3">
                        <label >Email: </label>

                        <input type="email" className="form-control" placeholder='Enter your Email' />

                    </div>
                    <div className="mb-3">
                    <label >Password: </label>
                        <input type={this.state.passwordtype} className="form-control" /><i className="fas fa-eye" onClick={this.handleclick}></i>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"onClick={this.handleclick} />

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default ContactUs
