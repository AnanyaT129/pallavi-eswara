import React from 'react';
import Header from '../components/Header';
import CardsLayout from '../components/layouts/CardsLayout';
import TextWithPicLayout from '../components/layouts/TextWithPicLayout';
import TextWithTitleLayout from '../components/layouts/TextWIthTitleLayout';
import { AboutContentType, AboutLayouts } from '../content/types/aboutTypes';
import { Cards, TextWithPic, TextWithTitle } from '../content/types/layouts';
import { ArtsContent } from '../content/arts';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export default function ArtsCommunity() {
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
        <Header active={3}></Header>
        <Container sx={{marginTop: 3}}>
            {ArtsContent.map((section, _) => (
                <div>
                    {getContentFromSection(section)}
                    <Divider orientation="horizontal" flexItem sx={{marginBottom: 3}}/>
                </div>
            ))}
        </Container>
    </div>
}