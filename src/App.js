import * as React from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import Book from "./components/Book";
import books from "./data/books";

function App() {
  return (
    <Container className="App" style={{ marginTop: "20vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(books).map((book, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Book data={book}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
