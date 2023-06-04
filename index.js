/* function Navbar() {
    return (<ul><li>my first item</li><li>My second item</li><li>My third item</li></ul>)
}

function MainContent() {
    return (<p>My first day learning React, ReactDOM and Babel</p>)
}
ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById("root"))
*/
const h1 = document.createElement("h1")
h1.textContent = "Hello World!"
h1.className = "header"
console.log(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(element, document.getElementById("root"))

const page = (<div>
                <h1>My first day jsexing</h1>
                <p> Awesome day coming to terms</p>
                </div>)

ReactDOM.render(page, document.querySelector("#root"))