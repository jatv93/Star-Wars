import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store } = useContext(Context);
	const { vehicles } = store;

	console.log(props);

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
				{!!vehicles.results ? (
					<>
						<h1>{vehicles.results[props.match.params.index].name}</h1>
						<div className="row">
							<div className="col-5">
								<img
									className="card-img-top7"
									src={"https://drive.google.com/uc?export=view&id=" + img[props.match.params.index]}
								/>
							</div>

							<div className="col-7">
								<p>
									<strong>Model:</strong> {vehicles.results[props.match.params.index].model} <br />
									<strong>Passengers:</strong> {vehicles.results[props.match.params.index].passengers}{" "}
									<br />
									<strong>Length:</strong> {vehicles.results[props.match.params.index].length} <br />
									<strong>Crew:</strong> {vehicles.results[props.match.params.index].crew} <br />
									<strong>Consumables:</strong>{" "}
									{vehicles.results[props.match.params.index].consumables} <br />
									<strong>Manufacturer:</strong> {vehicles.results[props.match.params.index].terrain}{" "}
									<br />
									<strong>Vehicle Class:</strong>{" "}
									{vehicles.results[props.match.params.index].vehicle_class} <br />
									<strong>Created:</strong>
									{vehicles.results[props.match.params.index].created} <br />
									<strong>Max Atmosphering Speed:</strong>{" "}
									{vehicles.results[props.match.params.index].max_atmosphering_speed} <br />
									<strong>Cost in Credits:</strong>{" "}
									{vehicles.results[props.match.params.index].cost_in_credits} <br />
									<strong>Edited:</strong> {vehicles.results[props.match.params.index].edited} <br />{" "}
									<br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat nisl, sagittis
									quis eleifend in, eleifend consequat diam.
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
