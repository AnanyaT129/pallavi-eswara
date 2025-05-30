import { AboutContentType, AboutLayouts } from "./types/aboutTypes";

const education = {
    layout: AboutLayouts.textwithtitle,
    content: {
        title: "Education",
        body: [
            {
                heading: "Motto",
                paragraphs: ["I am a life long learner: from articles, books, stories, talking to people on various topics and backgrounds, I have, am and will be learning forever."]
            },
            {
                heading: "Formal Training",
                paragraphs: [
                    "In the formal sense, my education started in Hyderabad, India, where I followed my passion of understanding the genetic basis of human disease by doing a 3-year undergraduate degree in genetics, botany, and chemistry. Following that, I was selected for a competitive fellowship through the Department of Biotechnology to pursue a Masters degree. I was also selected through competitive tests and interviews conducted by the Council of Scientific and Industrial Research for their scholarships to pursue a Ph.D.",
                    "I continued graduate studies in the United States and became an alumni of the University of Michigan with a Masters in Human Genetics in 2001."
                ]
            }
        ]
    }
}

const leadership = {
    layout: AboutLayouts.textwithtitle,
    content: {
        title: "Leadership",
        body: [
            {
                heading: "Secretary, Executive Committee, Graduate Career Consortium",
                paragraphs: [
                    "I was elected to serve as the Secretary of the Graduate Career Consortium from 2021-2023. This role was significant in increasing membership, liaise with members and work with the executive committee to build the strategic plan for 2022-2026.",
                ]
            },
            {
                heading: "Inaugural co-chair, Professional Development Committee, Graduate Career Consortium",
                paragraphs: [
                    "In this role from 2019-2021, I led over 20 volunteers in defining the scope of the committee, creating goals, timelines, and groundwork for establishing the committee. Working with my colleagues, we created a competency framework for career and professional development staff serving graduate students and postdocs. The framework continues to be in use and has become the bedrock for new projects, such as creating an Individual Development Plan, and functions as a mentoring and self-analysis tool.",
                    "I also initiated a new project that would map advertised positions at any level/rank in the field of graduate and postdoc professional and career development to core competency framework that was developed. The goal for the project was to make the process of applying, advancing in the field more transparent, data driven and informed.",
                ]
            },
            {
                heading: "Chair, Mid-Atlantic Regional Conference, Graduate Career Consortium",
                paragraphs: [
                    "In this role, I collaborated with colleagues to initiate the first online conference for the organization, and created an engaging and interactive conference with a timely program at a time of isolation and uncertainty in January 2021."
                ]
            },
            {
                heading: "Chair, Resource Development Committee",
                paragraphs: ["As a believer in giving back to the professional communities that support our work, I was involved with the National Postdoc Association in various capacities, including as Chair, Resource Development Committee (2008-2009). In this role, I was leading a group of volunteers from several different organizations to build resources that would inform and assist postdocs in U.S. universities."]
            }
        ]
    }
}

const awards = {
    layout: AboutLayouts.textwithtitle,
    content: {
        title: "Awards",
        body: [
            {
                heading: "Distinguished Service Award Finalist",
                paragraphs: [
                    "My philosophy has been service leadership. It was an honor to be nominated by postdocs and peers for the Distinguished Service Award for 2024 and 2025 and be recognized as a finalist. It was heartening to learn of the nominating statements:"
                ],
                quotations: [
                    "Her dedicated mentorship and unwavering commitment to our professional and personal development have made her a truly exceptional advocate for postdoctoral scholars.",
                    "Through her monthly workshops and events, I have gained essential skills and insights that would have been hard to access otherwise. Her introductory sessions made me feel welcomed and oriented at BU, while her targeted workshops provided the tools to build my career path with confidence. Particularly impactful were her sessions on job applications, where she covered a range of career paths across academia and industry, giving clear guidance on the steps needed for each. This comprehensive support helped me recognize my options and understand the preparation required for each pathway.",
                    "Pallavi’s commitment to transparency shines in everything she does, from organizing competitions to fostering an inclusive, collaborative setting. Her approachable, polite nature creates a safe and encouraging space, even for one-on-one discussions, where she offers tailored guidance for skill development and career planning. Her warmth and willingness to ease the stress of critical transitions, such as preparing for job applications, have profoundly impacted my confidence and readiness. I sincerely believe Pallavi’s genuine interest in the success of postdocs has not only elevated the quality of our work but also strengthened our resilience, making her an invaluable mentor in our journeys.",
                    "I have had the utmost pleasure to meet, learn from, and work with Pallavi. When I first got to Boston University as a postdoc, I did not know anyone, and I felt incredibly isolated as a postdoc. I stumbled upon PDPA, met Pallavi, and from that moment forward, she has been intentional about including me in a variety of professional and personal growth opportunities. As an early career scholar and postdoc at BU, I knew I could always reach out to Pallavi when it came to finding resources and cultivating spaces of support, and community. As the Director, Pallavi takes a collaborative-first approach when it comes to creating, building and offering events or programming for postdocs (at any and every stage) that can address the needs of our postdocs as we discovered the gaps & opportunities for growth. Through Pallavi’s encouragement and mentorship, I have the privilege of working in a career where I feel fulfilled and competent in the work that I do and how I do it. I truly believe that the conversations, events, and engagements organized and mindfully designed by Pallavi led me to the role I serve and the life I live today",
                ]
            }
        ]
    }
}

// DO NOT DELETE THIS ITEM
// Adding additional variables to this item will add new layouts to the content
// Deleting them will delete that section
// To edit the sections text, do it in their respective spots below
export const AboutContent: AboutContentType[] = [
    education,
    leadership,
    awards,
]