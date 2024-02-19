import Chai from "./chai"
function App() {
   const userName = "chai aur code"
  return (
    //  <h1>chai aur react with vite | shiwani </h1>
    // <Chai/>
    // <h1>chai aur react </h1> -only having one element.
    // so sholud have use div inside div we can use more element.
    //  <div>
    <>
     <Chai/>
     <h1>chai aur code{userName}</h1>
     <p>this is first fle to add in react and talk about fregment and other stuff. i can use <></> instead of div element.</p>

    {/* </div> */}
    </>
  )
}

export default App
