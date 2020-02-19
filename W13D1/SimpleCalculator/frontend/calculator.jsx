import React from 'react';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = { num1: "", num2: "", result: 0 };
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.clear = this.clear.bind(this);
        this.addNumbers = this.addNumbers.bind(this);
        this.subtractNumbers = this.subtractNumbers.bind(this);
        this.multiplyNumbers = this.multiplyNumbers.bind(this);
        this.divideNumbers = this.divideNumbers.bind(this);
    }

    setNum1(e){
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num1 });
    }

    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num2 });
    }

    addNumbers(e){
        e.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }

    multiplyNumbers(e){
        e.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }

    divideNumbers(e){
        e.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }

    subtractNumbers(e){
        e.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState({ result });
    }

    clear(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 });
    }

    render(){
        const { num1, num2, result } = this.state;
        return (
            <div>
                <h1>{ result }</h1>
                <input onChange={this.setNum1} value={num1} />
                <input onChange={this.setNum2} value={num2} />
                <button onClick={this.clear}>Clear</button>
                <br/>
                <button onClick={this.addNumbers} > + </button>
                <button onClick={this.subtractNumbers} > - </button>
                <button onClick={this.multiplyNumbers} > * </button>
                <button onClick={this.divideNumbers} > / </button>
            </div>
        );
    }
}

export default Calculator;