import About from './components/about/about.component';
import CustomButton from './components/button/button.component';
import Footer from './components/footer/footer.component';
import Property from './components/property/property.component';
import './App.css';

function App() {
  return (
    <>
    {
    // TODO: section 3
    // TODO: footer
    }

    <section>
      <div className='container navbar'>
        <div className='logo'><h2>LUGAR</h2></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>      
      </div>

      <div className="section-content">
        <h1 className="heading">A home is built with love and dreams</h1>
        <p>Real estate farms that makes your dreams come true</p>
        <CustomButton className="filled">Our Projects</CustomButton>
        <CustomButton className="not-filled">Contact Us</CustomButton>
      </div>
    </section>

    <Property />
    <About/>
    <Footer/>
    </>
  );
}

export default App;
