import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReactPlayer from "react-player";

export const SingleFilm = props => {
	const { store } = useContext(Context);
	const { films } = store;
	const videos = [
		"https://www.youtube.com/watch?v=1g3_CFmnU7k",
		"https://www.youtube.com/watch?v=JNwNXF9Y6kY",
		"https://www.youtube.com/watch?v=5UfA_aKBGMc",
		"https://www.youtube.com/watch?v=bD7bpG-zDJQ",
		"https://www.youtube.com/watch?v=gYbW1F_c9eM",
		"https://www.youtube.com/watch?v=5UnjrG_N8hU"
	];

	console.log(props);
	console.log(videos);

	return (
		<>
			<div className="container">
				{!!films.results ? (
					<>
						<div className="row pt-4">
							<div className="col-md-6">
								<ReactPlayer width="100%" autoPlay playsInline url={videos[props.match.params.index]} />
							</div>

							<div className="col-md-6">
								<h1>{films.results[props.match.params.index].title}</h1>
								<p>
									<strong>Director:</strong> {films.results[props.match.params.index].director} <br />
									<strong>Episode:</strong> {films.results[props.match.params.index].episode_id}{" "}
									<br />
									<strong>Release Date:</strong>{" "}
									{films.results[props.match.params.index].release_date} <br />
									<br />
									{films.results[props.match.params.index].opening_crawl}
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
