import React, { Component } from 'react';
import Header from './Components/Header/header';
import ImageCard from './Components/Image-Card/imageCard';
import data from './images.json';



class App extends Component {
    state = {
      data,
      score: 0,
      images: [],
      clicked: 0,
      message: "Click on a image to begin the game!"
}

handleClickEvent = (id) => {
    this.shuffle();
    this.clicked(id);
}

shuffle = () => {
    let shuffledImages = this.state.data;
    shuffledImages = shuffledImages.sort(() => Math.random() - 0.42);

    this.setState({
        images: shuffledImages
    })
}

clicked = (id) => {

    let clicked = this.state.clicked;

    this.setState({
        clicked: id
    })

    console.log(clicked)
    console.log(id)

    if(id === clicked) {
        alert("correct")
        let newscore = this.state.score
        newscore = newscore + 1
        this.setState({
            score: newscore,
            clicked: 0
        })

    }
     else if (clicked === 0) {
        console.log("do nothing")
    }
    else
    {
        alert("incorrect")
        this.setState({
            score: 0,
            clicked: 0
        })
    }
    
    if( this.state.score === 5) {
        alert("Nice... But don't get cocky kid!")
        this.setState({
            score: 0,
            clicked: 0
        })
    }
    
}

render () {
    return (
        <div>
            <Header score = {this.state.score}/>
            <div>
                {this.state.data.map(item => (
                    <ImageCard
                        key={item.id}
                        id={item.id}
                        clicked={this.handleClickEvent}
                        image= {item.image}
                    />
                ))
                }
            </div>
        </div>
    );
};


};

export default App;