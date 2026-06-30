import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";

const hardCodedResults = ["Item1","Item2","Item3"];


export default function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchActors(searchText) {
      const searchURL = `https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${searchText}`;
      const response = await axios.get(searchURL);
      setSearchResults(response.data.results);
    }

    if (searchText) {
      fetchActors(searchText);
    } else {
      setSearchResults([]);
    }
  }, [searchText])

  function addActor(index) {
    setActors([...actors, searchResults[index]]);
    setSearchText("");
  }

  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search actors..."
        searchText={searchText}
        onSearchChange={setSearchText}
        results={searchResults.map(result => result.name)}
        onResultClicked={addActor}
      />
      {actors.map((actor, index) => <div key={index}>{actor.name}</div>)}
    </Container>
  );
}
