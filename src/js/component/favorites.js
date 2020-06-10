import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{!!store.favorites ? (
						store.favorites.map((elem, index) => {
							return (
								<li className="dropdown-item" key={index}>
									{elem}
									{""}
									<span
										className="fas fa-trash-alt"
										onClick={() => {
											actions.deleteFav(index);
										}}
									/>
								</li>
							);
						})
					) : (
						<div className="col md-12" />
					)}
				</div>
			</div>
		</>
	);
};
