import { Box, Paper, TextInput } from "@mantine/core";
import "./SearchBox.css";

export default function SearchBox({
  placeholder,
  searchText,
  onSearchChange,
  results,
  onResultClicked,
}) {
  return (
    <Box pos="relative">
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {results && results.length > 0 && (
        <Paper
          withBorder
          shadow="sm"
          className="results"
          pos="absolute"
          w="100%"
        >
          {results.map((result, index) => (
            <Box
              key={index}
              className="result-item"
              p="xs"
              onClick={() => onResultClicked(index)}
            >
              {result}
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}
