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
import background from '../glassesImage/background.jpg' 



export default class GlassesComponent extends Component {

    state = {
        imgSrc:'',
        brand: '',
        display: 'none',
    }

    changeColor = (color,name) => {
        this.setState({
            imgSrc: `${color}`,
            brand: `${name}`,
            detail:  `Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. `,
            display: 'initial',
        })

    }

    render() {
        return (
            <div class="background" style={{  backgroundImage: `url(${background})` }} >
                <div className="header" >
                    <h1> TRY GLASSES APP ONLINE</h1>
                </div>
                <div className="content__container container">
                    <div className="content__list">
                        <div className="content__item">
                            <img src={model} alt="model" />
                            <img  className="glasses" src={v7} alt="glasses"/>
                            <div className="content__detail">
                                <h1> FENDI F8750 </h1>
                                <p> Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="content__list">
                        <div className="content__item">
                            <img src={model} alt="model" />
                            <img className="glasses" style={{display: `${this.state.display}`}} src={this.state.imgSrc} alt="glasses"/>
                            <div className="content__detail" style={{display: `${this.state.display}`}}>
                                <h1 > {this.state.brand} </h1>
                                <p> {this.state.detail} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button__container container">
                    <button onClick = {()=>{this.changeColor(v1,'GUCCI G8850U')}}>
                        <img src={v1}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v2,'GUCCI G8759H')}}>
                        <img src={v2}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v3,'DIOR D6700HQ')}}>
                        <img src={v3}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v4,'DIOR D6005U')}}>
                        <img src={v4}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v5,'PRADA P8750')}}>
                        <img src={v5}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v6,'PRADA P9700')}}>
                        <img src={v6}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v7,'FENDI F8750')}}>
                        <img src={v7}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v8,'FENDI F8500')}}>
                        <img src={v8}/>
                    </button>
                    <button onClick = {()=>{this.changeColor(v9,'FENDI F4300')}}>
                        <img src={v9}/>
                    </button>
                </div>
            </div>
        )
    }
}
