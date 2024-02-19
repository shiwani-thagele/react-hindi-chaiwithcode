import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visist google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visite google</a>
)


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target : '_blank'},
  'clic me to visite google'

)
ReactDOM.createRoot(document.getElementById('root')).
render(

 
  <App/>
)
