function Message() {
    const name = 'Michael';
    var message = 'Hello World';

    if(name){
        message = 'Hello ' + name;
    }

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Message;