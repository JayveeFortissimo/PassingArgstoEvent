const Descripts = {

components:{
    title:"Components",
    description:"Components are the building blocks of React applications. A components is a self contained module (HTML + optional CSS + JS) that renders some output.",
    code:"function Welcome(){ return <h1>Hello, World</h1>;}"
},

JSX:{
    title:"JSX",
    description:"JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full poer of JavaScript (e.g, it may output dynamic content).",
    code:"<div> <h1>Welcome {userName}>/h1><p>Time to learn React!</p></div>"
},

Props:{
    title:"Props",
    description:"Components accept arbitaryy inputs called props. They are like function arguments.",
    code:"function Welcome(props){ return <h1>Hello, {props.name}</h1>;}"
},
State:{
    title:"State",
    description:"State allows React components to change their output over time in response, and anything else.",
    code:"function Counter(){ const [isVisible,setVisible] = useState(false); function handleClick(){setVisble(true);}"
}



}

export default Descripts