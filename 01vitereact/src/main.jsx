import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

/*
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click here to visit Google!'
}
*/
const anotherUser="Sabir"
const anotherElement=(
    <a href="https://google.com" target="_blank">
        Click here to visit Google!
    </a>
)
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click here to visit Google!',
    anotherElement
)


ReactDom.createRoot(document.getElementById('root')).render(

    reactElement
)
