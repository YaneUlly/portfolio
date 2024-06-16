const projectsDataWebDev = [
  {
    id: 1,
    title: 'VolleyBomb Game',
    overview:
      'For this project, I needed to create a browser-based game using HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP). We could choose any game idea we wanted at the time, but it haded to meet the technical requirements.',
    pitch:
      'We wanted something dynamic and competitive that combines characteristics from other games. So we created **Volleybomb**, witch is an exciting local-multiplayer game built with JavaScript, CSS and HTML, with a Retro Christmas style. Main idea: Players will be kicking a "bomb” to each other that will explode if touches the ground or if its timer is over. The first player to score 5 points wins. Our main inspiration for this game was the classic Slime-Volley, and we want it to mix it with something related to avoid the explosion of a bomb.',
    techChallenge:
      'The most important technical challenge we faced was to control the ball in therms of logic: The movement; Direction; Interaction;',
    overcameChallenge:
      'We overcame this looking into a lot of repos and videos that helped us to manage the control of the ball.',
    mistakes:
      'The biggest mistake we made was the way we approached to the logic of the ball, witch led us to more confusion and mistakes with the code. Also, another mistakes that we made was to work on an unnecessary class, but soon as we realized we could manage and rearrange the code.',
    learnings:
      'After some redundant code that we made, we understood the importance of discover what we want to achieve first, planning it and then start the code.',
    repoLink: 'https://github.com/JuanRassa/Ironhack-Module-1-VolleyBomb-Game',
    websiteLink: 'https://volleybomb.netlify.app/',
    image: '',
  },
  {
    id: 2,
    title: 'Ágora React Application',
    overview:
      'For this study case we needed to create a Single Page Application (SPA), using React, consisting of multiple views. The React application should be integrated with a mock backend(created by ourselves)and an external API. It also should perform all CRUD (Create, Read, Update, Delete) operations on that API.',
    pitch:
      'For our application, we aimed to establish **a central hub for users to effortlessly discover concerts and events, both locally and globally. We also envisioned a dedicated space for emerging artists to showcase and promote their concerts or new festivals. To achieve this, we utilized an external database for renowned artists and festivals worldwide and developed a mock database specifically for independent artists, enabling CRUD operations. This led to the creation of the Trendy space**, where users can easily search for events around them and apply filters such as location, artist, date, event type, and musical genre. Additionally, we introduced the Independent space**, empowering users and new artists to create, edit, and delete their events, providing a dynamic platform for emerging talent.',
    techChallenge:
      'Our primary technical challenge revolved around effectively managing numerous states within our code, particularly the dynamic states within forms.',
    overcameChallenge:
      'To address these challenges, we made the decision to utilize Context, even though it wasnt covered in our coursework at the moment.',
    mistakes:
      'In this project, we encountered a couple of challenges. Initially, we unintentionally created **redundant components** when establishing the context for event creation and editing. Despite both functionalities sharing the same underlying code with minor variations, we opted to separate them into distinct components. In hindsight, consolidating them into a single component would have been more efficient. Another lesson learned was our initial use of Material UI. We began with this framework but later decided to defer styling until a later stage. We found that the learning curve for Material UI was relatively long given our tight project timeline, prompting us to seek a more straightforward styling solution.',
    learnings:
      'To address a technical challenge, we proactively learned how to work with **Context**, significantly improving code organization and streamlining the passage of values across components and pages. In managing user login status without a backend implementation, we utilized **window session storage**. This decision ensured essential user information was readily available for operations within our application. Additionally, we adopted the **Chakra library to expedite styling. Given the projects relatively short timeframe, leveraging Chakra proved invaluable in achieving aesthetically pleasing and efficient design.',
    repoLink: 'https://github.com/JuanRassa/Gig-Hub-Groove',
    websiteLink: 'https://agoragigs.netlify.app/',
    image: '',
  },
  {
    id: 3,
    title: 'Acervo Coffee Community',
    overview:
      'For this study case I needed to have a SPA frontend, built with React, consisting of multiple views and implementing all CRUD actions. Have a REST API backend built with ExpressJS, MongoDB and Mongoose, that our React app will communicate with. Have a REST API backend with routes that perform all CRUD actions for at least one model (excluding the user model). Have 3 database models or more. Having one model for users is the first step. The other two (or more) models should represent the main functionality of the app.',

    pitch:
      'Its an educational place designed for coffee enthusiasts eager to learn more about the world of coffee. It serves as a collaborative platform where individuals can share their favorite recipes, coffee discoveries, and innovative ideas. Moreover, users have the capability to track their learning progress, save cherished recipes, and curate a personalized coffee wishlist.',
    techChallenge:
      'Initially, I struggled to find an API related to coffee that would truly provide meaningful content for my application. I also found confusing to determine the structure of my data. I spent a significant amount of time grappling with this issue before realizing that I needed to move forward with building a basic structure. When creating the Quiz feature, I encountered an obstacle. I wanted to recommend coffee blends created by my community, but these were stored in a private database while the Quiz was accessible to the public.',
    overcameChallenge:
      'To address these challenges, with persistence, I eventually discovered a high-quality API that met my needs. I also understood that I could always refine and improve my data as my project progressed and my requirements evolved. For my Quiz I had to think creatively and devise a solution. Ultimately, I decided to create a mechanism in my backend where every time a community coffee blend was added, a copy would be generated in a public database, ensuring accessibility for the Quiz.',
    mistakes:
      'Implementing the Wishlist feature presented its own set of challenges. Initially, I approached it with the wrong mindset. However, after researching examples online and gaining a better understanding of the logic behind wishlists, I realized that I had been overcomplicating the process. With this insight, I was able to overcome the challenge and successfully implement the feature.',
    learnings:
      'I gained several insights and lessons while working on my project. One significant realization was that I was investing too much time in developing the backend. To address this, I adopted a different approach by **working iteratively between the backend and frontend. Whenever I needed to implement a new feature in the frontend, I would switch to the backend, develop and test it, and then return to the frontend to integrate it. This approach helped streamline the development process and ensure better coordination between the frontend and backend components. Before embarking on the project, my teacher advised us to utilize more branches than we were accustomed to in previous projects. Following this advice, I ended up working with 18 branches, which proved to be beneficial. It allowed me to better organize my project and also provided valuable practice in working with a more structured branching strategy. Towards the end of the project, I found myself with some extra time on hand. I decided to utilize this opportunity to explore and learn something new. I delved into Framer Motion and experimented with adding animations to my application. This experience not only enhanced the visual appeal of my project but also expanded my skill set by familiarizing myself with a new technology.',
    repoLink: 'https://github.com/YaneUlly/acervo-front',
    websiteLink: 'https://acervohub.netlify.app/',
    image: '',
  },
];

export default projectsDataWebDev;
