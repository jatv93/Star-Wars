import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store } = useContext(Context);
	const { vehicles } = store;

	console.log(vehicles.results);

	const img = [
		"12eefGd7wFI6bse96XGzdZe0EeJmNEl4X",
		"14T57vqJg6p63snuugdXZbB3U5bxPPgdV",
		"1QseQa4sbSO02eu9jurCpfRdlwObHBKt7",
		"1o3mEi8UkYmB9JO7ei-PT7uTK9uDAT4Fm",
		"1__8qKm3v2lUVskamUV2nEmfggkvj7Bbj",
		"1hrIt21VxlVwxPdsAt4TCQvGIynNCFU8z",
		"14hCFd60v9xtmSQlqcqFhwdyu0apaYUxt",
		"1ULqLUY4nDW9Vh6tfT-m-OlPPF4nwqYoz",
		"1DvvZxFwVKznLl2I5WNjKYH6C69BcGYxq",
		"1qDZipMwVnjQtzVw0JsHRnwwsYgeXyMHW"
	];

	return (
		<>
			<div className="container">
				<h1>Vehicles</h1>
				<div className="row">
					{!!vehicles.results ? (
						vehicles.results.map((elem, index) => {
							return (
								<div className="col-md-4" key={index}>
									<div className="card mb-4">
										<img
											className="card-img-top6"
											src={"https://drive.google.com/uc?export=view&id=" + img[index]}
										/>
										<div className="card-body">
											<h5 className="card-title">{elem.name}</h5>
											<p className="card-text">
												Model: {elem.model} <br /> Crew: {elem.crew}
											</p>

											<button type="button" className="btn btn-dark">
												<Link to={"/vehicles/" + index}>Learn More!</Link>
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
