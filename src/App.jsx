import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import ChatBot from 'react-simple-chatbot';

// Define conversation steps
const steps = [
  {
    id: '1',
    message: 'Hi there! I am your portfolio chatbot. Ask me anything about Piyush\'s skills or projects!',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Thanks for your question — Piyush will get back to you soon!',
    end: true,
  },
];


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact /> 
      <ChatBot
        steps={steps}
        floating={true} // Shows as a chat bubble at the bottom right
      />
    </div>
  );
}

export default App;