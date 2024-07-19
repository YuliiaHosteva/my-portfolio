import Header from './components/header';
import NavigationBar from './components/Navbar';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/footer';
import ContactForm from './components/ContactsForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};
