import React, {Component} from "react";
import Coin from "./Coin";
import './CoinFlip.css';

export default class CoinFlip extends Component {
    state = {
        isHead: true,
        flips: 0,
        heads: 0,
        tails: 0
    }

    _flip(curSt) {
        return {
            isHead: Math.random() > 0.5,
            flips: curSt.flips + 1
        }
    }

    _incrementHeads(curSt) {
        return {
            heads: curSt.heads + 1
        }
    }

    _incrementTails(curSt) {
        return {
            tails: curSt.tails + 1
        }
    }

    flip = () => {
        this.setState(this._flip, () => {
            if(this.state.isHead) {
                this.setState(this._incrementHeads);
                return;
            }
            this.setState(this._incrementTails);
        });
    }

    render() {
        const {isHead, flips, heads, tails} = this.state;
        return (<div className="CoinFlip">
            <h1>Let's flip a coin!</h1>
            {flips > 0 && <Coin isHead={isHead}/>}
            <button onClick={this.flip}>FLIP MEEE</button>
            <p>Out of {flips} flips, there have been {heads} heads and {tails} tails.</p>
        </div>);
    }
}