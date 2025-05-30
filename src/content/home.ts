import { Timeline, TimelineItem } from "./types/layouts";
import { ProfileItemsType, ProfileItemTypes } from "./types/homeTypes"

export const description = [
    "Welcome to my corner on the World Wide Web. I created this site as a landing page to capture my experience, training, and interests.",
    "I am a scientist, trained to do research with cells, microbes, plants, silkworms, and mice. Given that background, I pivoted to bioinformatics in the research group of Dr. Webb Miller and Dr. Ross Haridson at Penn State at a very interesting and critical time of annotating the newly sequenced mouse, rat, and chicken genomes. The time spent in their research groups introduced me to research in biology accelerated through computer science, interdisciplinary research, team science, and a fabulous mentoring environment.",
    "Throughout my research training, I was mentored by postdocs. And several friends and family members went through postdoc training. Listening to their struggles, successes, and life stories gave me insight into the gaps for training postdocs and fueled my interest and love for working in higher ed and training scientists to be successful. Since 2007, I have been in the field of training postdocs to succeed in their research and science, and to educate and empower the next generation of researchers, scientists, and engineers. During this time, I have also worked with offices that support graduate students and their careers.",
    "Additionally, I have been involved in community-building efforts, leading nonprofit executive boards and committees. Another dimension that balances, nourishes me is the pursuit of the arts. I practice traditional Indian art called Kolam/Rangoli, and share it through demonstrations and classes. I also teach cooking vegan and vegetarian food.",
    "Click on the tabs to learn more and connect to discuss projects, programs, and/or speaking invitations. Thank you for stopping by."
]

export const profileItems: ProfileItemsType[] = [
    {
        itemType: ProfileItemTypes.image,
        content: "images/headshot.jpg"
    },
    {
        itemType: ProfileItemTypes.title,
        content: "Pallavi Eswara"
    },
    {
        itemType: ProfileItemTypes.heading,
        content: "Scientist, Educator, Community builder, Artist"
    },
    {
        itemType: ProfileItemTypes.listWithHeading,
        content: {
            heading: "Current Position:",
            content: "Director, Postdoctoral Affairs, Boston University"
        }
    },
    {
        itemType: ProfileItemTypes.link,
        content: {
            heading: "LinkedIn",
            content: "https://www.linkedin.com/in/pallavi-eswara-86b59a11/"
        }
    }
]

const timelineItems: TimelineItem[] = [
    {
        date: "June 2025",
        list: [
            {
                title: "National Postdoc Association",
                description: "Invited talk to postdoc office representatives on creating annual reports ( co-presenter)"
            },
            {
                title: "Meharry Medical College",
                description: "Individual Development Plan and creating a roadmap for PhD students"
            }
        ]
    },
    {
        date: "March 2025",
        list: [
            {
                title: "National Postdoc Association, Annual Meeting",
                description: "Developed and showcased a creative collaboration between Postdoc Offices and Postdoc-led Associations"
            }
        ]
    },
    {
        date: "February 2025",
        list: [
            {
                title: "American Association for the Advancement of Science Annual Meeting",
                description: "Created a new session track to empower early career researchers in science communication as lightning talks."
            },
            {
                title: "American Association for the Advancement of Science Annual Meeting",
                description: "Interactive presentation on career roadmap for scientists to include becoming interdisciplinary"
            }
        ]
    },
    {
        date: "January 2025",
        list: [
            {
                title: "IEEE Applied Sensing Conference (APSCON)",
                description: "Keynote for Young Professionals in Sensors"
            }
        ]
    }
];

export const timelineData: Timeline = {
    title: "Recent & Upcoming Presentations",
    items: timelineItems,
    numberDisplayed: 4
}