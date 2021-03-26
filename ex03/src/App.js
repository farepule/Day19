class app extends React.Component{
    rander(){
        return(
            <div className="App">
                <h1>Hello, Padawans "</h1>
            </div>
        )
    }
}

// add the following code below this line

ReactDOM.rander(<App />, document.getElementById('root'));