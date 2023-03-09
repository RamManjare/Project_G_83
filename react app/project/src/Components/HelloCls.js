import React from 'react';
import { Button } from 'react-bootstrap';

class HelloCls extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello from Class Component </h1>
                <Button bsStyle="primary">Hello World Primary</Button>
                <Button bsStyle="success">Hello World Success</Button><Button bsStyle="danger">Hello World Danger</Button>
            </div>
        )
    }
}

export default HelloCls;