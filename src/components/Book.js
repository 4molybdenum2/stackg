import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Book = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Author:</b> {data.author}
          </Typography>
		  <Typography variant="body2" color="text.secondary">
		  	<b>Release Year:</b> {data.release_year}
			</Typography>
		  <Typography variant="body2" color="text.secondary">
		  	<b>ISBN:</b> {data.isbn}
		  </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Book;