import React from 'react';
import Header from '../components/Header';
import { AboutContent } from '../content/about';
import { AboutContentType, AboutLayouts } from '../content/types/aboutTypes';
import TextWithTitleLayout from '../components/layouts/TextWIthTitleLayout';
import CardsLayout from '../components/layouts/CardsLayout';
import TextWithPicLayout from '../components/layouts/TextWithPicLayout';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Cards, TextWithPic, TextWithTitle } from '../content/types/layouts';
import Footer from '../components/Footer';

export default function About() {
    const getContentFromSection = (section: AboutContentType) => {
        if(section.layout === AboutLayouts.cards) {
            const cardSection: Cards = section.content as unknown as Cards
            return <CardsLayout {...cardSection}></CardsLayout>
        } else if (section.layout === AboutLayouts.textwithpic) {
            const picSection: TextWithPic = section.content as unknown as TextWithPic
            return <TextWithPicLayout {...picSection}></TextWithPicLayout>
        } else if (section.layout === AboutLayouts.textwithtitle) {
            const textSection: TextWithTitle = section.content as unknown as TextWithTitle
            return <TextWithTitleLayout {...textSection}></TextWithTitleLayout>
        }
    }

    return <div>
        <Header active={1}></Header>
        <Container sx={{marginTop: 3}}>
            {AboutContent.map((section, _) => (
                <div>
                    {getContentFromSection(section)}
                    <Divider orientation="horizontal" flexItem sx={{marginBottom: 3}}/>
                </div>
            ))}
        </Container>
        <Footer></Footer>
    </div>
}