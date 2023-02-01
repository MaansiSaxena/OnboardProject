import bgImage from '../images/bg.jpg'

const Main = () => {

return(


<div style={{ backgroundImage: `url(${bgImage})`}}>
    
<h1>Hello!!
</h1>

<button onClick={() => localStorage.setItem("isAdmin","true") }>Admin</button>
<button onClick={() => localStorage.setItem("isAdmin","false") }>Normal</button>
</div>
);
}

export default Main;

{/* <div style={{ backgroundImage: "url(/bg.jpg)"}}> */}