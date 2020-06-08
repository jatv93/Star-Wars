import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store } = useContext(Context);
	const { characters } = store;
	console.log(props);

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
				{!!characters.results ? (
					<>
						<h1>{characters.results[props.match.params.index].name}</h1>
						<div className="row">
							<div className="col-3">
								<img
									className="card-img-top3"
									src={"https://drive.google.com/uc?export=view&id=" + img[props.match.params.index]}
								/>
							</div>

							<div className="col-9">
								<p>
									<strong>Height:</strong> {characters.results[props.match.params.index].height}{" "}
									<br />
									<strong>Mass:</strong> {characters.results[props.match.params.index].mass} <br />
									<strong>Hair Color:</strong>{" "}
									{characters.results[props.match.params.index].hair_color} <br />
									<strong>Skin Color:</strong>{" "}
									{characters.results[props.match.params.index].skin_color} <br />
									<strong>Eye Color:</strong> {characters.results[props.match.params.index].eye_color}{" "}
									<br />
									<strong>Birth Year:</strong>{" "}
									{characters.results[props.match.params.index].birth_year} <br />
									<strong>Gender:</strong> {characters.results[props.match.params.index].gender}
									<br />
									<br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat nisl, sagittis
									quis eleifend in, eleifend consequat diam. Integer egestas lorem at consequat
									placerat. Vivamus tristique dapibus mi, non facilisis leo vestibulum eget. Aenean
									vitae sem nec nulla malesuada facilisis. Nam ut risus vitae nulla hendrerit
									placerat. Praesent tristique turpis sed lacus feugiat vehicula. Aenean vitae sem nec
									nulla malesuada facilisis. Nam ut risus vitae nulla hendrerit placerat.
								</p>
							</div>
						</div>
					</>
				) : (
					<div />
				)}
			</div>
		</>
	);
};
