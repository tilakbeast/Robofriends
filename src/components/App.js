import CardList from '../components/CardList';
import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
// const state = {
//     robots: robots,
//     searchfield: " "
// }; 

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""

        }

    }


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => this.setState({robots: users}));
    };
   
    // console.log('didmount');

    onSearchChange =  (e) => {
        this.setState({searchfield: e.target.value});
        // console.log('dynamic list',this.state.robots);
        // const sr = robots.map((user, i) => 
        // {
        //     var k = '';
        //     for(var j = 0; j < e.target.value.length; j++) {
        //         if(robots[i].name[j].toLowerCase() !== e.target.value[j].toLowerCase()) {
        //             break;
        //         }
        //         else {
        //             k += e.target.value[j];
        //         }
        //     }
        //     if(k === e.target.value) {
        //         return robots[i];
        //     }
        //     return null;

        // }); 

        // console.log(sr);

    //     this.setState({robots: sr.filter(i => {
    //         return i !== null;
    // })});
    // this.setState({robots: filteredrobots});
    // console.log(this.state.robots);
        
    }

    render() {
        const { robots, searchfield}  = this.state;
        const filteredrobots = robots.filter(i => {
            
            return i.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ?
             <h1>Loading...</h1> :
            (
                <div className = "tc"> 
                    <h1 className = "f2"> Robofriends </h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredrobots} Card = {Card}/>
                    </Scroll>
                </div>
            );
   }
}

export default App;