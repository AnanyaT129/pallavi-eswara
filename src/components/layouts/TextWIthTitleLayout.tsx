import React from 'react';
import Typography from "@mui/material/Typography";
import { TextWithTitle } from '../../content/types/layouts';
import Container from '@mui/material/Container';

export default function TextWithTitleLayout(props: TextWithTitle) {
    return (<Container>
        <Typography variant="h6">
            {props.title}<br /><br />
        </Typography>
        {props.body.map((section, index) => (
           <Typography variant='body1' key={index}>
                <b>{section.heading}</b>
                <br />
                {section.paragraphs.map((paragraph, i) => (
                    <Typography variant='body1' key={i}>{paragraph}<br /></Typography>
                ))}
                <br />
                {section.quotations?.map((quote, i) => (
                    <Typography variant='body1' key={i}><i>{quote}</i><br /><br /></Typography>
                ))}
           </Typography>
        ))}
    </Container>);
}