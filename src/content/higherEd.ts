import { AboutContentType, AboutLayouts } from "./types/aboutTypes";

const higherEdCards = {
    title: "Areas of Impact in Higher Education",
    cards: [
        {
            image: "images/careerDev.jpg",
            title: "Professional and Career Development",
            buttonToPopoverTitle: "See More",
            subtitle: "Supporting science, scientists, and addressing the needs of workforce development",
            body: [
                "In my career as a practitioner of professional development, I have created a training environment and curriculum to support the advancement of science and research by empowering and educating scientists and researchers.",
                "I have executed the creation of these presentations, courses and modules, independently, in pairs with colleagues and senior leadership, and in groups of 3-20 members of varying ranks and backgrounds."
            ]
        },
        {
            image: "images/research.jpg",
            title: "Policy",
            buttonToPopoverTitle: "See More",
            subtitle: "Developing policies, guidelines, best practices, and processes",
            body: [
                "I have worked on postdoc policy extensively at Penn State University, Boston University, and as a member of the Governance Committee in the non-profit, Graduate Career Consortium.",
                "These changes to existing policy, creation of new guidelines and policy have had an institutional impact and led to a better training environment and operations."
            ]
        },
    ]
}

const higherEdCards2 = {
    title: "",
    cards: [
        {
            image: "images/oldMain.png",
            title: "Administration",
            buttonToPopoverTitle: "See More",
            subtitle: "Creating organizational excellence",
            body: [
                "Throughout my career, I have managed and worked on various levels of administrative operations, from simple tasks to complex issues that required working with cross-functional teams."
            ]
        },
        {
            image: "images/connections.jpg",
            title: "Building Connections",
            buttonToPopoverTitle: "See More",
            subtitle: "Core to my values is building connections between individuals, groups and enhancing impact.",
            body: [
                "I have demonstrated this through creating conferences, meetings, competitions, and research showcases. Examples include the inaugural Professional Development and Grant writing conference in November 2015, as a part of the National Research Mentoring Network’s Supplement Awards to the Committee on Institutional Cooperation Academic Network, comprising of the then Big Ten institutions."
            ]
        }
    ]
}

export const higherEdContent: AboutContentType[] = [
    {
        layout: AboutLayouts.cards,
        content: higherEdCards
    },
    {
        layout: AboutLayouts.cards,
        content: higherEdCards2
    }
]