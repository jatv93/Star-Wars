import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Films = () => {
	const { store, actions } = useContext(Context);
	const { films } = store;

	const img = [
		"1PCPvLKXnMmUeKDuMbQnvVeoSqiI2eMGM",
		"1lwCYY3ENlCNg3TfGrc97uGxRVaq6IAAO",
		"1WvBAn_AURiwBSEABtoaoKjsE71pOlM0S",
		"1PzE5v--mNOTX9qZtp7U1peIg48-fy5qO",
		"1IociYkOX9lU3B6QFFsjRkfEI6i_kHO32",
		"1NLiW3f6xKmMPLWoqmA1zl8BCBuAsMUL1"
	];

	return (
		<>
			<div className="container">
				<h1>Films</h1>
				<div className="row">
					{!!films.results ? (
						films.results.map((elem, index) => {
							return (
								<div className="col-md-4" key={index}>
									<div className="card mb-4">
										<img
											className="card-img-top1"
											src={"https://drive.google.com/uc?export=view&id=" + img[index]}
										/>
										<div className="card-body">
											<h5 className="card-title">{elem.title}</h5>
											<p className="card-text">
												Episode: {elem.episode_id} <br />
												Release Date: {elem.release_date}
											</p>
											<div className="card-bottom align-middle">
												<button className="btn btn-outline-dark">
													<Link to={"/films/" + index}>Learn More!</Link>
												</button>

												<button
													className="fav btn btn-outline-danger"
													onClick={() => actions.addFavorites(elem.title, "/films/" + index)}>
													&hearts;
												</button>
											</div>
										</div>
									</div>
								</div>
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
