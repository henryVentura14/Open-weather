import React from 'react';
import Proptypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <nav>
            <div className="nav teal lighten-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    );
};
Header.protTypes = {
    title: Proptypes.string.isRequired
}
export default Header;
