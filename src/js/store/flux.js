import { Link } from "react-router-dom";
import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: {},
			planets: {},
			vehicles: {},
			films: {},
			favorites: []
		},
		actions: {
			addFavorites: (newFavorite, link) => {
				const store = getStore();
				if (store.favorites.map(element => element.newFavorite).indexOf(newFavorite) == -1) {
					setStore({ favorites: store.favorites.concat({ newFavorite: newFavorite, link: link }) });
				} else {
					alert("This element already exists in favorites");
				}
			},
			deleteFav: favElem => {
				const store = getStore();
				store.favorites.splice(favElem, 1);
				setStore({ favorites: store.favorites });
			},

			getCharacters() {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data =>
						setStore({
							characters: data
						})
					);
			},
			getPlanets() {
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data =>
						setStore({
							planets: data
						})
					);
			},

			getVehicles() {
				fetch("https://swapi.dev/api/vehicles/")
					.then(response => response.json())
					.then(data =>
						setStore({
							vehicles: data
						})
					);
			},

			getFilms() {
				fetch("https://swapi.dev/api/films/")
					.then(response => response.json())
					.then(data =>
						setStore({
							films: data
						})
					);
			}
		}
	};
};

export default getState;
