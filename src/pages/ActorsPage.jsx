import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";

const hardCodedResults = ["Item1","Item2","Item3"];


export default function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText) {
      setSearchResults(hardCodedResults);
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
        results={searchResults}
        onResultClicked={addActor}
      />
      {actors.map((actor, index) => <div key={index}>{actor}</div>)}
    </Container>
  );
}
