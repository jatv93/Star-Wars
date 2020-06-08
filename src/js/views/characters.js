import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.scss";

export const Characters = () => {
	const { store } = useContext(Context);
	const { characters } = store;

	console.log(characters.results);

	const img = [
		"17ntIKwGjrC9mLVbde9xa_e_7SoH-Uv2V",
		"1yvJoeDSGwDACOvWlXU2u4-XoH092ncln",
		"1X-Mre1sguuqrvTASHOgKQL_09oZPq163",
		"1XlAKxvwjIUCsg5CwoJgYBrPReJOPg6DF",
		"1-Mw5jVTevA-cj6pTtUkvowGxEJOkmM_y",
		"1F6GTfcLSQgon6fCvhLfrZ1F-HTOL-ZYS",
		"1A4mfGlUQFvD0HNswsASMFyAGXiksdOB5",
		"1flzSawGjnkrWV9bkPst0DNvPncYFl6Z6",
		"1NOTrt3p9ngXSXXWUSD1Mzlp5psg6fNtb",
		"13yDzWEfU836XBhwKig3s_gjNcETi2K5Q"
	];

	return (
		<>
			<div className="container">
				<h1>Characters</h1>
				<div className="row">
					{!!characters.results ? (
						characters.results.map((elem, index) => {
							return (
								<div className="col-md-3" key={index}>
									<div className="card mb-4">
										<img
											className="card-img-top2"
											src={"https://drive.google.com/uc?export=view&id=" + img[index]}
										/>
										<div className="card-body">
											<h5 className="card-title">{elem.name}</h5>
											<p className="card-text">
												Birth Year: {elem.birth_year} <br /> Gender: {elem.gender}
											</p>

											<button type="button" className="btn btn-dark">
												<Link to={"/characters/" + index}>Learn More!</Link>
											</button>

											<span>
												<i className="far fa-heart" />
											</span>
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
