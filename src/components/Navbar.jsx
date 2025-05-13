import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container justify-content-end">
				
				<div className="ml-auto ">
					<Link to="/nuevo_contacto">
						<button className="btn btn-success">Crea un nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};