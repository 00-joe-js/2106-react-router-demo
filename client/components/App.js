import React from "react";

import {Link, Route, Switch} from "react-router-dom";

const firePokemon = [
    { id: 1, name: "Charmander" },
    { id: 2, name: "Firedude" },
    { id: 3, name: "Vulpix" },
];

class Fire extends React.Component {
    // async componentDidMount() {
    //     let theIdOfThePokemonWeWant = this.props.match.params.pokemonId;
    //     const res = await axios.get("/api/pokemon/" + theIdOfThePokemonWeWant);
    //     this.setState({selectedPokemon: res.data});
    // }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/water");
    //     }, 5000);
    // }
    render() {
        let theIdOfThePokemonWeWant = this.props.match.params.pokemonId;
        theIdOfThePokemonWeWant = parseInt(theIdOfThePokemonWeWant, 10);
        const thePokemon = firePokemon.find(eachPokemon => eachPokemon.id === theIdOfThePokemonWeWant);


        console.log(this.props.location);
        if (!thePokemon) {
            return <h3>No pokemon with that ID :(</h3>;
        }

        console.log(this.props.backgroundWhite);

        return (
            <div style={{
                background: this.props.backgroundWhite === true ? "white" : "transparent"
            }}>
                <h4>Welcome! You are here: {this.props.location.pathname}</h4>
                <h1>{thePokemon.name} is a fire pokemon!</h1>
                <h3 onClick={() => {
                    this.props.history.goBack();
                }}>Nice, I like that. Okay, I'm ready to go back.</h3>
            </div>
        );
    }
}

const Grass = () => {
    return (
        <ul>
            <li>Bulbasaur</li>
            <li>Oddish</li>
            <li>Torterra</li>
            <li>Grassdude</li>
            <li>Spivy</li>
        </ul>
    );
};

const Water = (props) => {
    // setTimeout(() => {
    //     props.history.push("/grass");
    // }, 3000);
    return (
        <ul>
            <li>Squirtle</li>
            <li>Volcanion</li>
            <li>Bibarel</li>
            <li>Piplup</li>
            <li>Magicarp</li>
            <li>Waterdude</li>
        </ul>
    );
};

class FourOhFour extends React.Component {
    render() {
        return <h1>I dunno what you want!</h1>;
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <Link to="/fire/1"><li>Charmander</li></Link>
                        <Link to="/water"><li>Water</li></Link>
                        <Link to="/grass"><li>Grass</li></Link>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route path="/fire/:pokemonId" render={(routerProps) => {
                            return <Fire backgroundWhite={true} {...routerProps}  />
                        }} />
                        <Route path="/water" component={Water} />
                        <Route path="/grass" component={Grass} />
                        {/* <Route component={FourOhFour}></Route> */}
                    </Switch>
                </main>
            </div>
        );
    }
}