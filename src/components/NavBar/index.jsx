import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const Component = () => {
    return (
        <div>
            <Nav pills className="bg-dark navbar-dark p-1">
                <NavItem className="mx-auto">
                    <NavLink className="bg-danger text-light" href="#" disabled>Robot Simulation</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Component;