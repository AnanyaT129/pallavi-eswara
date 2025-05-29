export type CardContent = {
    image: string,
    title: string,
    buttonToPopoverTitle: string,
    subtitle: string,
    body: string[]
}

export type Cards = {
    title: string,
    cards: CardContent[]
}

export type TextWithTitle = {
    title: string,
    body: {
        heading: string,
        paragraphs: string[]
        quotations?: string[]
    }[]
}

export type TextWithPic = {
    title: string,
    paragraph: string
    picture: string
}

export type TimelineItem = {
    date: string,
    list: {
        title: string,
        description: string,
    }[]
}

export type Timeline = {
    title: string,
    items: TimelineItem[]
    numberDisplayed: number
}