
import { useState } from "react";
//include images into your bundle





//create your first component
const Home = () => {


	const [activo, setActivo] = useState('');

return (
	<div className="w-100 vh-100 bg-dark d-flex justify-content-center align-items-center border" style={{ borderRadius: "100px" }}>
		<div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center gap-3">
			<button
				className={`btn btn-danger w-50 h-50 rounded-circle mt-5 ${activo === "Red" ? "shadow-white" : ""}`}
				onClick={() => setActivo('Red')}></button>
			<button
				className={`btn btn-warning w-50 h-50 rounded-circle mt-2 ${activo === "Yellow" ? "shadow-white" : ""}`}
				onClick={() => setActivo('Yellow')} ></button>
			<button
				className={`btn btn-success w-50 h-50 rounded-circle mt-2 mb-5 ${activo === "Green" ? "shadow-white" : ""}`}
				onClick={() => setActivo('Green')} ></button>

		</div>
	</div>
);
};

export default Home;