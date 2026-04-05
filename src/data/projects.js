import todosImg from '../images/todos.png'
import homepageImg from '../images/Homepage.png'
import cha2Img from '../images/cha2.png'
export const projects = [
  {
    id: 1,
    title: "Awesome To-dos",
    description:
      "Awesome Todos is a full-stack web application that allows users to create, manage, and track their daily tasks in a simple and intuitive interface.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: todosImg,
    github: "https://github.com/bitguybandit",
    live: "https://awesome-todos-app-xjrx.onrender.com/",
    
  },
  {
    id: 2,
    title: "Localis",
    description:
      "Localis is a location-based web application that delivers real-time alerts around you and the people you care about.",
    tech: ["Next.js", "Tailwind css", "Google Map API", "Socket.io", "PostgreSQL", "Supabase", "Node.js", "TypeScript", "Figma" ],
    image: homepageImg,
    live: "https://www.figma.com/proto/n2N6vzimbNUrQaPOaIalB8/localis?node-id=377-173&viewport=-47%2C150%2C0.08&t=obhnSZoZsFRdZVaW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=377%3A173&show-proto-sidebar=1&page-id=0%3A1",
  },
  {
    id: 3,
    title: "UI Challenge 2",
    tech: ["Figma"],
    image: cha2Img,
  },
];