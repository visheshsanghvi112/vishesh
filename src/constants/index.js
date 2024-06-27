import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    dsa,
    ydb,
    gotosioc,
    doubtnut,
    fusion,
    sql,
    cpp,
    python,
    java,
    postman,
    trenders,
    price,
    safar,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [

    {
        title: "Leetcode",
        icon: web,
        source_code_link: "https://leetcode.com/u/visheshsanghvi112/",
    },
    {
        title: "GitHub",
        icon: mobile,
        source_code_link: "https://github.com/visheshsanghvi112",

    },
    {
        title: "LinkedIn",
        icon: backend,
        source_code_link: "https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/",
    },
    {
        title: "Resume",
        icon: creator,
        source_code_link: "https://drive.google.com/file/d/14YAyKomgvD51MTi1tSqbTlR8hz2zGr3J/view",
    },
];

const technologies = [
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "TailwindCSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "Freelance",
        icon: doubtnut,
        iconBg: "#383E56",
        date: "April 2022 - Oct 2022",
        points: [
            "Produced 300+ physics educational videos, enhancing student understanding.",
            "Demonstrated strong communication and teaching abilities in physics content creation.",
            "Showcased strong subject matter expertise and effective communication skills in conveying complex concepts.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Alka Metal Industries",
        icon: ydb,
        iconBg: "#E6DEDD",
        date: "Nov 2022 - Dec 2022",
        points: [
            "Developed user-friendly websites with HTML, CSS, JavaScript, ReactJS, and NextJS, resulting in a 4% conversion rate boost.",
            "Improved mobile responsiveness by 40% through collaboration with cross-functional teams, ensuring project success.",
            "Contributed to project success by effectively utilizing frontend technologies and collaborating seamlessly with teams.",
            "Participating in code reviews and providing constructive feedback to other developers."

        ],
    },
    {
        title: "Full stack Developer",
        company_name: "GP & Johnlee",
        icon: gotosioc,
        iconBg: "#383E56",
        date: "June 2024 - Present",
        points: [
            "Led frontend and backend development at Johnlee, improving user experience and data optimization.",
            "Excelled in tackling intricate technical hurdles, showcasing adaptability and problem-solving acumen.",
            "Committed to ongoing learning and growth, enhancing technical skills and project success at Johnlee & GP.",
            
        ],
    },
];

const testimonials = [
    {
        testimonial: "Kishinchand Chellaram College",
        name: "BSCIT HSNC University",
        designation: "2021-2024",
    },,
    {
        testimonial:
            "St Sebastian Goan High School, Mumbai",
        name: "SSC. Board.",
        designation: "2017",
    },
];

const projects = [
    {
        name: "Finanza",
        description:
            "Finanza is a fully functional  web application. It is a one stop shop to fulfill all your finance needs.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Node",
                color: "pink-text-gradient",
            },
        ],
        image: trenders,
        source_code_link: "https://github.com/visheshsanghvi112/Finanza",
    },
    {
        name: "Mexant",
        description:
            "A Software as a service website . It is a one stop shop to fulfill all your software needs.",
        tags: [
            {
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: "Bright Data Scraping",
                color: "green-text-gradient",
            },
            {
                name: "Cronjob",
                color: "pink-text-gradient",
            },
        ],
        image: price,
        source_code_link: "http://saasbyvishesh.netlify.app",
    },
    {
        name: "Food Appp Flutter",
        description:
            "Flutter representation of a Restaurant app UI i found in Uplabs.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Map",
                color: "green-text-gradient",
            },
            {
                name: "Filters",
                color: "pink-text-gradient",
            },
        ],
        image: safar,
        source_code_link: "https://github.com/visheshsanghvi112/FoodApp_flutter?tab=readme-ov-file",
    },
];

export { services, technologies, experiences, testimonials, projects };