import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;

	const img = [
		"1FHC6SdobIGqnUIe90P8oNqD2OZWxiEnP",
		"17fVP6CaRIjXEIGBONPZ_vrTt8MblBnNv",
		"1aV0WJlNYXuvUIQASIiEqoCbxOgoELjpr",
		"1lLDqSwwyuy78ZyHSD4nXsJwbyuEvGO-a",
		"1-x1sukM1SFMZtGg10lszjPnvPfjSoY_C",
		"1jbqVs-SCTXKFPwGuAPjjbMCijHIftWo5",
		"10q-7DpEQhFL8fQNmJhMG8nEqko2RamJq",
		"1rDX_9w_XAwfpWeQmpnwzHcLc8jxnj6lo",
		"1gPFlQW-oyWdJU0P8O8mU-JIVB835kvuF",
		"1t54TErltVtj5gGU5HqHpEHg5DaNTaFxI"
	];

	return (
		<>
			<div className="container">
				<h1>Planets</h1>
				<div className="row">
					{!!planets.results ? (
						planets.results.map((elem, index) => {
							return (
								<div className="col-md-3" key={index}>
									<div className="card mb-4">
										<img
											className="card-img-top4"
											src={"https://drive.google.com/uc?export=view&id=" + img[index]}
										/>
										<div className="card-body">
											<h5 className="card-title">{elem.name}</h5>
											<p className="card-text">
												Climate: {elem.climate} <br /> Population: {elem.population}
											</p>

											<button type="button" className="btn btn-dark">
												<Link to={"/planets/" + index}>Learn More!</Link>
											</button>

											<button
												className="fav btn btn-outline-warning"
												onClick={() => actions.addFavorites(elem.name, "/planets/" + index)}>
												&hearts;
											</button>
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
