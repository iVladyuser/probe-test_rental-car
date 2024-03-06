import {
	SearchbarHeader,
	SearchForm,
	SearchFormButton,
	SearchFormButtonLabel,
	SearchFormInput,
} from "./SearchBar.styled";

const Searchbar = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<SearchbarHeader>
			<SearchForm onSubmit={handleSubmit}>
				<SearchFormButton type="submit">
					<SearchFormButtonLabel>Search</SearchFormButtonLabel>
				</SearchFormButton>

				<SearchFormInput
					type="text"
					name="search"
					autoComplete="off"
					autoFocus
					placeholder="Search images
          and photos"></SearchFormInput>
			</SearchForm>
		</SearchbarHeader>
	);
};

export default Searchbar;
