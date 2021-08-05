import React from 'react';

const footer = (props) => (
    <footer className="footer">
        ©   {new Date().getFullYear() - 1} -   {new Date().getFullYear()} Brokod <span className="text-muted d-none d-sm-inline-block float-right">Crafted with <i className="mdi mdi-heart text-danger"></i> by Brokod</span>
    </footer>
);

export default footer;
