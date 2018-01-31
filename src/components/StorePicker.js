import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // first grab the text from the box
        // second transition from / to /store/:storeId
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* this is how to comment */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"
                    defaultValue={getFunName()} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;