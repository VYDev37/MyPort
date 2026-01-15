const appConfig = {
    // Home page
    ownerName: "Vincent",
    ownerDescription: "I am a full-stack developer who usually uses TypeScript for both Frontend and Backend Development.",

    // 'Contact' page
    linkedinUrl: "https://www.linkedin.com/in/vincent-yu-4048b7363/",

    // 'About' page
    role: "A self-taught full-stack developer",
    journey: {
        cards: [
            { id: 1, title: "Frontend Journey", desc: "Started with HTML5 and CSS3, then moved to React and exploring new frameworks and libraries." },
            { id: 2, title: "Backend Journey", desc: "My backend journey began with Express.js (Node.js), focusing on traditional APIs. I then migrated to the Hono framework (API server) powered by the Bun.js runtime for superior speed and Type Safety with TypeScript. Currently expanding expertise with Go for high-performance microservices." },
            { id: 3, title: "Other Skills Journey", desc: "Currently learning server-side development with Bun.js and TypeScript." }
        ],
        description: [
            "I began to learn Programming about 5 years ago and Website Development recently, completely self-taught from online resources and lots of tests. I started with C++ and Python as I was curious about Game and Discord Bot Development, but then switched to website development since I also curious on how websites and apps integrated.",
            "I'm still learning every day, but I've got used with TypeScript and used it for both frontend and backend things. I love the problem-solving aspect of coding and the satisfaction of realizing an idea to something real in the browser."
        ]
    },

    // 'Skills' page
    skills: {
        cards: [
            { id: 1, icon: "cpp-icon text-blue-py", title: "C/C++", desc: "My first programming language learned. I used C++ for Growtopia Private Server development, competitive programming, game development test, and other learning." },
            { id: 2, icon: "fab fa-python text-blue-py", title: "Python", desc: "I used to use Python for discord bot development purpose, but now I use it for college projects." },
            { id: 3, icon: "fab fa-js text-warning", title: "JavaScript & TypeScript", desc: "I used to use JavaScript to develop discord bot, but then switched to the development of client-side and server-side of website." },
            { id: 4, icon: "fab fa-html5 text-orange-html", title: "HTML5", desc: "The first language I used to learn website for the first time as it is the core of website development." },
            { id: 5, icon: "fab fa-css text-blue-css", title: "CSS3", desc: "I used this to design my HTML page of course, this is also the core of website development." },
            { id: 6, icon: "fab fa-react text-blue-py", title: "React", desc: "Currently the library that I used to build my frontend SPA (Single Page Application) projects and this portofolio." },
            { id: 7, icon: "fab fa-bootstrap text-primary", title: "Bootstrap", desc: "A CSS Framework that I learned and found to be helpful in boosting my website development progress." },
            { id: 8, icon: "fas fa-database text-warning", title: "Database", desc: "For database, I have used MongoDB and PostgreSQL. However, I decided to fully use PostgreSQL for the simplicity." },
            { id: 9, icon: "express-icon bg-warning", title: "Express.js", desc: "A high-performance, minimal Node.js framework utilized for developing secure and scalable backend APIs. Experienced in custom middleware development and efficient server-side routing." },
            { id: 10, icon: "fab fa-git text-warning", title: "Git", desc: "I usually distribute my code to Github with this tool." },
            { id: 11, icon: "vscode-icon", title: "Visual Studio Code", desc: "IDE (Integrated Development Environment) of my projects." },
            { id: 12, icon: "fab fa-golang text-blue-py", title: "Go", desc: "Currently learning Go to leverage its high performance and concurrency features. I intend to use it as the main backend language for my upcoming projects." },
        ]
    },

    // Navbar settings
    navLinks: [
        { id: 1, label: "Home", ref: "#home" },
        { id: 2, label: "About", ref: "#about" },
        { id: 3, label: "Skills", ref: "#skills" },
        { id: 4, label: "Works", ref: "#works" },
        { id: 5, label: "Contact", ref: "#contact" }
    ]
}

export default appConfig;