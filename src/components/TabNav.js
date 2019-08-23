import React from "react";
import { Tab } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    {
        menuItem: { key: 'home', icon: 'home', content: <NavLink to="/">Home</NavLink> }
    },
    {
        menuItem: { key: 'characters', icon: 'users', content: <NavLink to="/characters">Characters</NavLink> }
    },
    {
        menuItem: { key: 'locations', icon: 'map', content: <NavLink to="/locations">Locations</NavLink> }
    },
    {
        menuItem: { key: 'episodes', icon: 'film', content: <NavLink to="/episodes">Episodes</NavLink> }
    },
]

export default function TabNav() {

    return (
        <div>
            <Tab panes={panes}/>
        </div>
    );

};

