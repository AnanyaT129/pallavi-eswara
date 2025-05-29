import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Cards } from '../../content/types/layouts';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.primary,
    flexGrow: 1,
}));

export default function CardsLayout(props: Cards) {
    const [open, setOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(0)

    const handleClickOpen = (index: number) => {
        setOpen(true);
        setCurrentCard(index)
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Box>
            <Typography variant="h6">
                {props.title}
            </Typography>
            <Stack
                direction={{sm: "row", m: "column"}}
                spacing={2}
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                {props.cards.map((card, index) => (
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={card.image}
                            title={card.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {card.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleClickOpen(index)}>{card.buttonToPopoverTitle}</Button>
                        </CardActions>
                        </Card>
                    </Item>
                ))}
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.cards[currentCard].title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='subtitle1'><i>{props.cards[currentCard].subtitle}</i><br /><br /></Typography>
                        {props.cards[currentCard].body.map((paragraph, index) => (
                            <Typography variant='body1' key={index}>{paragraph}<br /><br /></Typography>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
