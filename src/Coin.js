import React, {Component} from 'react';
import './Coin.css';
import HeadsImg from './assets/images/heads.jpg';
import TailsImg from './assets/images/tails.jpg';

export default class Coin extends Component {
    static defaultProps = {
        head: HeadsImg,
        tail: TailsImg,
        isHead: true
    }

    render() {
        const {head, tail, isHead} = this.props;
        return (<div>
            {isHead 
                ? <img src={head} alt='head side of a U.S. coin' />
                : <img src={tail} alt='tail side of a U.S. coin' />
            }
        </div>);
    }   
}