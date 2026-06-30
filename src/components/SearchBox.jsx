import { Box, Paper, TextInput } from "@mantine/core";
import "./SearchBox.css";

export default function SearchBox({
  placeholder,
  searchText,
  onSearchChange,
  results,
}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {results && results.length > 0 && (
        <Paper withBorder shadow="sm" className="results">
          {results.map((result, index) => (
            <Box key={index} className="result-item" p="xs">
              {result}
            </Box>
          ))}
        </Paper>
      )}
    </>
  );
}
