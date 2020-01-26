import React, { Component} from 'react';
import Header from '../../header/Header';
import NavigationLeft from '../../nav/NavigationLeft';
//import Card from '../../card/Card';
import Hero from '../../hero/Hero';

class Analyics extends Component{
    state={
     
    }

    componentDidMount(){
        // const isLoaded = this.state.isLoaded;
        
        // if(isLoaded){
        //     this.load();
        // }else{
        //     console.log("error");
        // }
    }
    
    // async load(){
    //     await this.randomCards()
    //     .then(array=>array.map(card=>({
    //         name:`${card.name}`,
    //         price:`${card.price}`,
    //         img:`${card.image_uris.small}`,
    //     }))).then(cards=>this.setState({
    //         cards,isLoaded:false
    //     })).catch(err=>{
    //         console.log(err);
    //     })
    // }

    // async randomCards(){
    //     return Promise.all([this.random(), this.random(), this.random(),this.random()]).then(array=>{

    //         array.forEach(card=>{
    //             let price = 0.01+Math.floor(Math.random()*(100-0.01));
    //             card.price=price;
    //         })
    //         return array;
    //     })
    // }

    // async random(){
    //     return await fetch(`https://api.scryfall.com/cards/random`).then(res=>{
    //         if(res.ok){
    //             return res.json();
    //         }
    //         throw new Error(res);
    //     }).then(card=>{
    //         return card;
    //     })
    // }

    render(){
        // const{isLoaded,cards} =this.state;
        return(
            <div style={styles.container}>
                <Header/>
                <div style={styles.innerContainer}>
                    <NavigationLeft />
                    <div style={styles.mainContent}>
                        <div><Hero style={styles.hero} /></div>
                        <h2>Analyics</h2>
                        <div style={styles.cardList}>
                        Stuff here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Analyics;


const styles={
    container:{
        backgroundColor:'whitesmoke',
        color:'black',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row',
        height: '100vh'
    },
    hero:{
        display: 'flex',
        width:'90%',
        margin:'auto'
    },
    mainContent:{
        display: 'flex',
        flexDirection: 'column',
        padding: '2%'
    },
    cardList: {
        display: 'flex',
        flexDirection: 'row',
        //overflow: 'scroll'
    }
}