import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router';

export const ActionAreaCard = ({ download }) => {
   const handleDownload = () => {
      window.open(
         download.archivo.url,
         '_blank',
         'noopener,resizable,scrollbars'
      )
   }
   return (
      <Card sx={{ width: '100%' }} onClick={handleDownload}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="140"
               image={`${download.imagen.url}`}
               alt="hola"
            />
         </CardActionArea>
      </Card>
   );
}