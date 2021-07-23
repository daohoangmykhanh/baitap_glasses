import React, { Component } from 'react'
import model from '../glassesImage/model.jpg'
import v1 from '../glassesImage/v1.png'
import v2 from '../glassesImage/v2.png'
import v3 from '../glassesImage/v3.png'
import v4 from '../glassesImage/v4.png'
import v5 from '../glassesImage/v5.png'
import v6 from '../glassesImage/v6.png'
import v7 from '../glassesImage/v7.png'
import v8 from '../glassesImage/v8.png'
import v9 from '../glassesImage/v9.png'



export default class GlassesComponent extends Component {

    state = {
        imgSrc: ``,
    }

    changeColor = (color) => {
        this.setState({
            imgSrc: `${color}`
        })

    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1> TRY GLASSES APP ONLINE</h1>
                </div>
                <div className="content__container container">
                    <div className="content__list">
                        <div className="content__item">
                            <img src={model} />
                            <img className="glasses" src={v7}/>
                            <div className="content__detail">
                                <h1> FENDI F8750 </h1>
                                <p> Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="content__list">
                        <div className="content__item">
                            <img src={model} />
                            <img className="glasses" src={this.state.imgSrc}/>
                            <div className="content__detail">
                                <h1 > FENDI F8750 </h1>
                                <p> Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button__container container">
                    <button onClick = {()=>{this.changeColor(v1)}}>
                        <img src={v1}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v2)}}>
                        <img src={v2}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v3)}}>
                        <img src={v3}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v4)}}>
                        <img src={v4}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v5)}}>
                        <img src={v5}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v6)}}>
                        <img src={v6}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v7)}}>
                        <img src={v7}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v8)}}>
                        <img src={v8}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v9)}}>
                        <img src={v9}/>
                    </button>
                </div>
            </div>
        )
    }
}
