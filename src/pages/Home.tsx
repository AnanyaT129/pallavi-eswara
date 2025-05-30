import React from 'react';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import Profile from '../components/Profile';
import Box from '@mui/material/Box';
import TimelineLayout from '../components/layouts/TimelineLayout';
import { timelineData } from '../content/home';

export default function Home() {
    return <div>
        <Header active={0}></Header>
        <Container sx={{marginTop: 3}}>
            <Profile></Profile>
            <Box sx={{marginTop: 3, marginBottom: 3}}>
                <TimelineLayout {...timelineData}></TimelineLayout>
            </Box>
        </Container>
    </div>
}