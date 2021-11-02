import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GETNEWSBYID } from '../../Graphql/Queries';

// Convert text to html format
import showdown from 'showdown';
// Convert html to jsx because XSS (Cross Site Scripting)
import { Markup } from 'interweave';
import { Box, Container } from '@material-ui/core';

const converter = new showdown.Converter();

export const NewsById = () => {
   const { id } = useParams();
   /**
    * Database query.
    * @param loading indicates if data are still being downloaded.
    * @param error indicates if any error occurred.
    * @param data the data returned by the database.
    */
   const { loading, error, data } = useQuery(GETNEWSBYID(id));
   let datos = "";

   if (data) {
      if (data.new != null) {
         datos = converter.makeHtml(data.new.cuerpo);
         console.log(<Markup content={datos} />);
      }
   }

   return (
      <Container fixed>
         <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
         }}>
            <Markup content={datos} />
         </Box >
      </Container>

   )
}