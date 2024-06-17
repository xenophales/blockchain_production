import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

class App extends Component {
    state = { walletInfo: {} };

    componentDidMount() {
        fetch('http://localhost:3000/api/wallet-info')
        .then(response => response.json())
        .then(json => this.setState({ walletInfo: json }));;
    }

    render() {
        const { address, balance } = this.state.walletInfo;

        return (
            <div className='App'>
                <img className='logo' src={logo}></img>
                <br />
                <div><h3>Welcome to the blockchain...</h3></div>
                <br />
                <div><Link to='/blocks'>Blocks</Link></div>
                <br />
                <div><Link to='/conduct-transaction'>Conduct Transaction</Link></div>
                <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
                <div><h3>Wallet Info</h3></div>
                <br />
                <div className='WalletInfo'>
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                </div>
            </div>
        )
    };
}

export default App;