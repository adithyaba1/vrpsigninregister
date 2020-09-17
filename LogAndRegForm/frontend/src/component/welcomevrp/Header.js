import React from "react";
import Station from "./Station";
import Map from './Map';
import Trip from "./Trip";
import Vehicle from "./Vehicle";
import Result from "./Result";
import './css/header.css'
import '../css/bootstrap.min.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deps: [],
            show: true,
            tabType: ' '
        };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    handlerSimpleCall = () => {
        //Calling a function of other class (without arguments)
        new Map().renderIcon();
    };

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: show })
    }

    callApi() {
        fetch('http://localhost:5000/calculateRoute')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            })

    }

    toggleMe = (value) => {
        this.setState({
            tabType: value
        })
    }

    render() {
        return (
            <div className="left-side">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><button type="submit" className="btn btn-primary" style={{ "borderRadius": "5px" }} onClick={this.callApi}>Calculate Routes</button>&nbsp;
                                        <button type="submit" className="btn btn-primary" style={{ "borderRadius": "5px" }} onClick={() => this.toggleMe('result')}>Result</button>&nbsp;
                                        <button type="submit" className="btn btn-success" style={{ "borderRadius": "5px" }} onClick={() => this.toggleMe('stat')}>stations</button>&nbsp;
                                        <button type="submit" className="btn btn-danger" style={{ "borderRadius": "5px" }} onClick={() => this.toggleMe('order')}>trip</button>&nbsp;
                                        <button type="submit" className="btn btn-warning" style={{ "borderRadius": "5px" }} onClick={() => this.toggleMe('flet')}>Fleet</button>&nbsp;
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {this.state.tabType === 'stat' && <Station></Station>}
                    {this.state.tabType === 'order' && <Trip></Trip>}
                    {this.state.tabType === 'flet' && <Vehicle></Vehicle>}
                    {this.state.tabType === 'result' && <Result></Result>}
                </div>
            </div>
        )
    }
}

export default Header;