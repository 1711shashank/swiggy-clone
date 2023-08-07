import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    { id: "head1" },
    "This is a header1"
);
const heading2 = React.createElement(
    "h2",
    { id: "head2" },
    "This is a header2"
);
const container = React.createElement(
    "div",
    { id: "container" },
    [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(container);