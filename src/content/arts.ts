import { AboutContentType, AboutLayouts } from "./types/aboutTypes"

const Art = {
    title: "Art",
    cards: [
        {
            image: "images/rangoli.jpg",
            title: "Transient Art",
            buttonToPopoverTitle: "See More",
            subtitle: "Meditative, mathematical, transient art",
            body: [
                "Rangoli is a traditional Indian art created through an arrangement of dots, lines and curves, leading to patterns that represent the world around us. It is both art and math! Many mathematicians, computer scientists study and research traditional South Indian Rangoli/kolam.",
                "Originating in India, it is a transient art, traditionally created on the ground or floor with rice flour. These patterns are to make that space sacred, invite prosperity, and feed the tiny creatures crawling on the ground. The traditional art form of deftly picking and pouring rice flour or paste, chalk powder or sometimes flower petals to make patterns takes practice, spatial understanding and creativity. The medium of rangoli has evolved in recent times to lend itself to being more practical and relevant by using paint, chalk, pens and on surfaces beyond the ground and floors, such as paper, fabric, wooden boards etc.",
                "This art form is practiced in several parts of India and is known by different names based on the regional language and traditions. The patterns that are drawn can represent flowers, leaves, fruits, lamps, birds, animals, objects associated with festivities and also geometric patterns. These designs can range from simple patterns to complex designs taking days to complete.",
                "I grew up in Hyderabad, India, watching my family members and neighbors drawing rangoli every morning at the threshold of their homes, at weddings, to sanctify altars and places of worship, and on the floors of hallways in their homes to invite guests. I would draw rangoli designs from magazines on scrap paper, and later use chalk to copy the designs on concrete floors and tiles. As I got older, I began making rangolis with rice flour as a medium and am still learning. I practice this art form daily, for special occasions and to share.",
            ]
        },
        {
            image: "images/cowl.jpg",
            title: "Fiber Art",
            buttonToPopoverTitle: "See More",
            subtitle: "",
            body: []
        }
    ]
}

export const ArtsContent: AboutContentType[] = [
    {
        layout: AboutLayouts.cards,
        content: Art
    }
]