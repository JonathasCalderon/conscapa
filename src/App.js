import React from "react"
import { Switch, Route } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'

import { Navbar, NavItem, DropDown, DropDownItem } from './components'
import { Home } from './pages'

const App = () => {
    return (
        <div className="container">
            <Navbar>
                <NavItem itemContent="Conscapa" />
                <NavItem itemContent={<VscMenu />}>
                    <DropDown>
                        <div className="menuBox">
                            <DropDownItem to="/contact">
                                Contacto
                            </DropDownItem>
                            <DropDownItem to="/projects">
                                Proyectos
                            </DropDownItem>
                            <DropDownItem to="/about">
                                Sobre la empresa
                            </DropDownItem>
                        </div>
                    </DropDown>
                </NavItem>
            </Navbar>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App