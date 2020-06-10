import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store } = useContext(Context);
	const { planets } = store;

	const img = [
		"12hn92bGTVKamqj95QQH5nT8zcJmNp0tz",
		"1FrqNMv-BXmqqKFO9g3_iu01BWkl1ZZx3",
		"1uR-ct-JAqexmzUsCnVwSPn6KqNjZa971",
		"1n-DQ-j8KViii2MyD5OeZ9uf1ecTxYTOd",
		"1bU4-n9papdO1FIa7zFlCyx56WBvL9ElH",
		"1UZ8kfrvQFT-g1y-j89rf0P30NN4OawDM",
		"1f4FajZSUm5SUNBEZTC-aeVdOubYfkulx",
		"1076umECDrQ7fmliEGVPSbpppg89JK6vF",
		"1HBFMTvA1tspg2RfXSOv0OqfmvLNjpIzA",
		"114ywQ9eapPMOHkGuJ5xkZwFAtiiDmoog"
	];

	return (
		<>
			<div className="container">
				{!!planets.results ? (
					<>
						<h1>{planets.results[props.match.params.index].name}</h1>
						<div className="row">
							<div className="col-6">
								<img
									className="card-img-top5"
									src={"https://drive.google.com/uc?export=view&id=" + img[props.match.params.index]}
								/>
							</div>

							<div className="col-6">
								<p>
									<strong>Climate:</strong> {planets.results[props.match.params.index].climate} <br />
									<strong>Created:</strong> {planets.results[props.match.params.index].created} <br />
									<strong>Diameter:</strong> {planets.results[props.match.params.index].diameter}{" "}
									<br />
									<strong>Gravity:</strong> {planets.results[props.match.params.index].gravity} <br />
									<strong>Population:</strong> {planets.results[props.match.params.index].population}{" "}
									<br />
									<strong>Terrain:</strong> {planets.results[props.match.params.index].terrain} <br />
									<strong>Rotation Period:</strong>{" "}
									{planets.results[props.match.params.index].rotation_period} <br />
									<strong>Orbital Period:</strong>{" "}
									{planets.results[props.match.params.index].orbital_period} <br />
									<strong>Surface Water:</strong>{" "}
									{planets.results[props.match.params.index].surface_water} <br />
									<br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat nisl, sagittis
									quis eleifend in, eleifend consequat diam. Integer egestas lorem at consequat
									placerat. Vivamus tristique dapibus mi, non facilisis leo vestibulum eget. Aenean
									vitae sem nec nulla malesuada facilisis. Nam ut risus vitae nulla hendrerit
									placerat. Praesent tristique turpis sed lacus feugiat vehicula.
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
