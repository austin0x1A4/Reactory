

/* const h1 = document.createElement("h1")
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

const Navbar = (<nav>
        <h1>My website</h1>
        <ul><li>Pricing</li><li>About</li><li>Contacts</li></ul>
</nav>)

ReactDOM.render(Navbar, document.querySelector("#root"))


function MainContent() {
    return (<div><p>My first day learning React, ReactDOM and Babel</p>
    <h1>my header man</h1></div>)
}
ReactDOM.render(<MainContent />, document.getElementById("root"))

const PageXar = ()  => {
    return (<div>
                <img src="./downloadbing.jpg" width="60px" />
                <h1>Fun facts about React</h1>
                <ul >
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jnathan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers 1000s of mobile apps</li>
                </ul>
                </div>);
};

ReactDOM.render(<PageXar />,document.querySelector("#root")) */

const MotiFex = () => {
    return (<div>
            <header> <nav><img src="./downloadbing.jpg" width="60px"/> </nav> </header>
                <h1>my motivations for learning React</h1>
                    <ol>
                        <li> Seems exciting </li>
                        <li> Practical </li>
                        <li> Declarative </li>
                        <li>regularly maintained by fb</li>
                    </ol>
                    <footer>@Austin Muriuki development. All rights reserved</footer>
             </div>);
};

ReactDOM.render(<MotiFex />,document.querySelector("#root"))