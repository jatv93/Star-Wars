import React from "react";
import "../../styles/home.scss";
import ReactPlayer from "react-player";
import { Films } from "../component/films";

export const Home = () => {
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<ReactPlayer
								width="100%"
								autoPlay
								playsInline
								url="https://www.youtube.com/watch?v=auvqgeoTEH0"
							/>
						</div>

						<div className="col-md-6">
							<h1>Star Wars: The Rise of Skywalker</h1>
							<p>
								The surviving members of the resistance face the First Order once again, and the
								legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker
								saga to its end.
							</p>
							<h4>Director: J.J. Abrams</h4>
							<h4>Stars: Daisy Ridley, John Boyega, Oscar Isaac </h4>

							<h4>Release date: December 20, 2019 (United States)</h4>
						</div>
					</div>
				</div>
			</div>

			<Films />
		</>
	);
};
