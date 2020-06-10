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
			addFavorites: newFavorite => {
				const store = getStore();
				if (store.favorites.includes(newFavorite)) {
					alert("This element already exists in favorites");
				} else {
					setStore({ favorites: store.favorites.concat(newFavorite) });
				}
			},
			deleteFav: favIndex => {
				const store = getStore();
				const newFav = store.favorites.filter(index => index !== favIndex);
				setStore(newFav);
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
