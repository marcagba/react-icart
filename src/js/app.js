import React from 'react'
import ReactDOM from 'react-dom'

import '../css/style.css' // Import CSS

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello from React
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
