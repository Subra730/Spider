import React, { Component } from "react"

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            suburb: ""
            // or fname: 'Subramaniam', initialise values
            // suburb: 'Dandenong' initialise values
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //const data = this.state
        //to check on console
        //const data = this.state
        //console.log("Final data is", data) & send to back end
    }

    handleInputChange = (event) => {
        event.preventDefault()
        //to check on console
        //console.log(event)
        //console.log(event.trget.fname)
        //console.log(event.target.suburb)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //initialise input values to some values b4 input
    // or fname: 'Subramaniam', initialise values
    // suburb: 'Dandenong' initialise values
    componentDidMount() {
        this.setState({
            fname: "Subra",
            suburb: "Dandenong"
        })
    }

    render() {
        const { fname } = this.state
        const { suburb } = this.state
        return (
            <div>
                <h1>Registration</h1>
                <p>First name is: {fname}</p>
                <p>Suburb is {suburb}</p>
                <form onSubmit={this.handleSubmit}>
                    <p>input Name="text" placehoder="Your Name" value={fname} name="fname" onChange={this.handleInputChange} /></p>
                    <p>input Suburb="text" placehoder="Your Suburb" value={suburb} suburb="suburb" onChange={this.handleInputChange} /></p>
                    <p><button>Confirm</button></p>
                </form>
            </div>
        )
    }

}

export default Register;