
import { useState } from "react";
//include images into your bundle





//create your first component
const Home = () => {


	const [count, setCount] = useState(0);
 
	function updateCount(parametro) {
	
		setCount(new Function(`return ${count} ${parametro} 1`))
	}

	return (
		<div className="text-center bg-danger">
            
			<button className="btn btn-light" onClick={() => updateCount('+')} >Suma</button>
			<button className="btn btn-light" onClick={() => updateCount('-')} >Resta</button>
			<h1 className="text-center mt-5">{count}</h1>
			
		</div>
	);
};

export default Home;