function Button({ operador, setOperador, clickCount, setClickCount, buttonStyle }){
    return (
        <button 
            type='button'
            className={'btn ' + buttonStyle + ' w-100'}
            value={ operador }
            onClick = { () =>  {
                setOperador( operador );
                setClickCount( clickCount + 1 );
            }}
        >{ operador }</button>
    );
}

export default Button