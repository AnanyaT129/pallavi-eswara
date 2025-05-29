import Typography from "@mui/material/Typography";
import { Timeline } from "../../content/types/layouts";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import theme from "../../theme";
  
export default function TimelineLayout(props: Timeline) {
    const minWidth = (90 / props.numberDisplayed).toString() + "%"

    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        position: 'relative',
        minWidth: minWidth
      }));
    
    return (<Container>
        <Typography variant="h5">
            {props.title}
        </Typography>
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ sm: "row", m: "column" }}
            sx={{marginTop: 3, marginBottm: 3}}
        >
            {props.items.map((item, index) => (
                <Item>
                    {/* Circle */}
                    <Box
                        sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        margin: '0 auto',
                        mb: 1,
                        }}
                    />
                    {/* Line below circle */}
                    <Box
                        sx={{
                        height: 2,
                        width: '100%',
                        backgroundColor: theme.palette.primary.light,
                        position: 'absolute',
                        top: 8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: -1,
                        }}
                    />
                    <Paper sx={{backgroundColor: '#ffffff'}}>
                        <Accordion expanded={true}>
                            <AccordionSummary
                                // expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" variant="subtitle1">{item.date}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.list.map((i, _) => (
                                    <Typography component='span' variant='body1'>
                                        <b>{i.title}:</b> {i.description} <br></br><br></br>
                                    </Typography>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Item>
            )).slice(0, props.numberDisplayed)}
        </Stack>
    </Container>);
}