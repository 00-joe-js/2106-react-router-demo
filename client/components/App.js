import React from "react";

import {Link, Route, Switch} from "react-router-dom";

class Fire extends React.Component {
    render() {
        return (
            <ul>
                <li>Charmander</li>
                <li>Firedude</li>
                <li>Vulpix</li>
            </ul>
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

const Water = () => {
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
                        <Link to="/fire"><li>Fire</li></Link>
                        <Link to="/water"><li>Water</li></Link>
                        <Link to="/grass"><li>Grass</li></Link>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route path="/fire" component={Fire} />
                        <Route path="/water" component={Water} />
                        <Route path="/grass" component={Grass} />
                        {/* <Route component={FourOhFour}></Route> */}
                    </Switch>
                </main>
            </div>
        );
    }
}