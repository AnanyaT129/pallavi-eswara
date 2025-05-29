import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextWithPic } from '../../content/types/layouts';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    maxWidth: '50%'
}));

export default function TextWithPicLayout(props: TextWithPic) {
    return (
        <Stack
            direction={{sm: "row", m: "column"}}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            >
            <Item>
                <img src={props.picture} style={{maxWidth: '50%'}}></img>
            </Item>
            <Item>
                <Box>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    <Typography>{props.paragraph}</Typography>
                </Box>
            </Item>
        </Stack>
      );
}