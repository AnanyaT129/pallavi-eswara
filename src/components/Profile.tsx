import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { description, profileItems } from '../content/home';
import { ProfileItemsType, ProfileItemTypes } from '../content/types/homeTypes';

const Item = styled(Container)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    flexGrow: 1,
  }));

export default function Profile() {
    const getContentFromSection = (section: ProfileItemsType) => {
        if(section.itemType === ProfileItemTypes.title) {
            const title: string = section.content as unknown as string
            return <Typography variant='h6'>{title}</Typography>
        } else if (section.itemType === ProfileItemTypes.heading) {
            const heading: string = section.content as unknown as string
            return <Typography variant='subtitle1'><b>{heading}</b></Typography>
        } else if (section.itemType === ProfileItemTypes.listWithHeading) {
            const listWithHeading = section.content as unknown as {heading: string, content: string}
            return <Typography variant='body1'><b>{listWithHeading.heading}</b> {listWithHeading.content}</Typography>
        } else if (section.itemType === ProfileItemTypes.image) {
            const imgSrc: string = section.content as unknown as string
            return <img src={imgSrc} style={{maxWidth: '50%'}}></img>
        } else if (section.itemType === ProfileItemTypes.link) {
            const link = section.content as unknown as {heading: string, content: string}
            return <Typography variant='body1'><a href={link.content} target="_blank">{link.heading}</a></Typography>
        }
    }

    return (
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ sm: "row", m: "column" }}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <Item>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="column"
                >
                    {profileItems.map((item, index) => (
                        <Item>{getContentFromSection(item)}</Item>
                    ))}
                </Stack> 
            </Item>
            <Item>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="column"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {description.map((paragraph, index) => (
                        <Typography variant='body1' key={index}>{paragraph}</Typography>
                    ))}
                </Stack>
            </Item>
        </Stack>
    );
}