import React from "react"
import { Switch, Route, Link } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'

import { Navbar, NavItem, DropDown, DropDownItem } from './components'
import { Home, Contact, About, Login, PageNotFound, Projects, ProjectPage } from './pages'

const App = () => {

    const loginButton = (
        <button className="btn primaryButtonOutlined login-btn">Log In</button>
    )

    return (
        <div className="container">
            <Navbar>
                <NavItem itemContent="Conscapa" />
                <div className="nav-right-items">
                    <Link to="/login" className="login-btn">
                        <NavItem itemContent={loginButton} />
                    </Link>
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
                </div>
            </Navbar>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/project/:projectId">
                        <ProjectPage />
                    </Route>
                    <Route exact path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App