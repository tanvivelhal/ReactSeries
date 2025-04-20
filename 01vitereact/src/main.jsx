import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom React App !</h1>
        </div>

    )
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: "http://google.com",
//         target: '__blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com"  target='_blank'>Visit google</a>
)

const reactElement = (
    'a',
    {href: 'http//google.com',  target: '__blank'}, 'Click me to visit google'
)

createRoot(document.getElementById('root')).render(
 
   reactElement

)
