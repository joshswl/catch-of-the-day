import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // first grab the text from the box
        console.log(this);
        // second transition from / to /store/:storeId
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* this is how to comment */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"
                    defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;