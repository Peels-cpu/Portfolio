import ProfilePic from './image/profilePic.jpg';
import Contact from './Contact';
import Skills from './Skills';




const Home = () => {

    return ( 
        <header  className="App-header " >
        <div className="landingPageBg"  style={{marginTop:'100px'}}>
            <img alt="Profile pic of me" className='profilePicture ' src={ProfilePic}></img>
            <h1>Hello I'm Romeo Pablo</h1>
            <p style={{margin:'0px 10px 10px 10px'}}>Self-taught Developer: The only good thing that came from the covid crisis is that it gave me time to find my passion for coding. </p>
        </div>
        <div className="">
          <Skills />
          <Contact />
        </div>
        
        </header>

     );
     
}
 
export default Home;