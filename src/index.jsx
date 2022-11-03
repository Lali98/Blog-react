function ListaKomponens({elemek}) {
    /*let elemekTombje = [];
    for (let elem of elemek) {
        elemekTombje.push(<li className='list-group-item'>{elem.body}</li>);
    }*/
    return (
        <ul className='list-group'>{elemek.map((elem) => (
            <li key={elem.id} className='list-group-item'>{elem.body}</li>
        ))}</ul>
    );
}

function FormKomponens({setTipus}) {
    return (
        <form className='w-100' onSubmit={(event) => {
            event.preventDefault();
            setTipus(event.target.elements.contentType.value);
        }}>
            <select name='contentType' className='form-control mb-2'>
                <option value="comments">Kommentek</option>
                <option value="posts">Posztok</option>
            </select>
            <button className='btn btn-primary mb-2' type="submit">Kiválaszt</button>
        </form>
    );
}

function App() {
    const [items, setItems] = React.useState([]);
    const [tipus, setTipus] = React.useState("comments");
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + tipus)
            .then((res) => (res.ok ? res.json() : []))
            .then((tartalom) => {
                setItems(tartalom);
            })
    }, [tipus]);

    return (
        <div className='container'>
            <div className='row m-5 border p-5'>
                <FormKomponens setTipus={setTipus}/>
                <ListaKomponens elemek={items}/>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));