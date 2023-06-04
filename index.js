function Navbar() {
    return (<ul><li>my first item</li><li>My second item</li><li>My third item</li></ul>)
}

function MainContent() {
    return (<p>My first day learning React, ReactDOM and Babel</p>)
}
ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById("root"))