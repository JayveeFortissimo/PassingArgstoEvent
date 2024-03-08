import Btn from './Components/Buttons';
import { useState } from 'react';
import style from './Style/style.module.css'
import data from './Datas/Data'

function App() {

const [components,setcomponents] = useState("components");

const colors = {
     color:"aqua"
}

function handleClicks(type){
    setcomponents(type)
}

  return (
    <>


<div className={style.parent}>

<div className={style.child}>


<div className={style.react}>
       <h1><span style={{color:"aqua"}}>React.js </span><span style={{ color:"aliceblue" }}>Example</span></h1>
       <p style={{ color:'aliceblue' }}>(Components, JSX, Props, State)</p>
</div>

<div className={style.btn}>


<div className={style.BTN}>
<div><Btn onValues={()=> handleClicks("components")}>Components</Btn></div>
  <div><Btn onValues={()=> handleClicks("JSX")}>JSX</Btn></div>
  <div><Btn onValues={()=> handleClicks("Props")}>Props</Btn></div>
  <div><Btn onValues={()=> handleClicks("State")}>State</Btn></div>
</div>

<div className={style.content}>
<h3>{data[components].title}</h3>
<h5>{data[components].description}</h5>
<h5>{data[components].code}</h5>
</div>
  

</div>


</div>

</div>



    </>
  )
}

export default App
