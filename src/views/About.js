import { Header } from "../components/Header.js";
//import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const About = () => {
    const mainEl = document.createElement('main');
    mainEl.innerHTML = `
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/"> Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">About</li>
            <li class="breadcrumb-item"><a href="/contact">Contact</a></li>
        </ol>
    </nav>
    <section>
        <h2>About me</h2>
        <picture id="profile">
            <img src="https://image.tmdb.org/t/p/original/p7MyqQ8YEwp3XfnpgrEEmAConmN.jpg" alt="Tara">
        </picture>
        <p>Hi, I’m Tara Gregson—artist, wife, mother, and a woman navigating the beautiful chaos of life with Dissociative Identity Disorder. My art is an extension of me, a canvas where my different selves can meet, express, and, at times, clash. It’s a journey, sometimes a battle, as I strive to bring harmony to the many facets of my identity. I’ve learned that my alters aren’t just fragments of who I am; they are pieces of a complex mosaic that make me whole. My work reflects this ongoing exploration of self, capturing the moments where light meets shadow, and where my mind, in all its forms, finds a voice. This isn’t just my story—it’s ours, painted with the colors of resilience, love, and, yes, a fair share of struggles. Welcome to my world.</p>
        <p class="Alice">I love to paint butterflies -A</p> 
        <p class="T">I like to paint dark, abstract shapes. -T</p>
        <p class="Buck">I just don't understand art. -B</p>
    </section>
    <aside>
        <h3>Skills</h3>
        <ul class="artistic">
            <li>Mural painting</li>
            <li>Portraits</li>
            <li>Drawing</li>
            <li>Sketching</li>
            <li>Interior design</li>
        </ul>
        <h3>Soft skills</h3>    
        <ul class="soft">
            <li>Creative Expression</li>
            <li>Versatility</li>
            <li>Resilience</li>
            <li>Empathy and Emotional Intelligence</li>
            <li>Collaboration</li>
            <li>Storytelling</li>
            <li>Adaptability</li>
            <li>Mental Health Advocacy</li>
        </ul>
    </aside>
    `
    // HEADER
    mainEl.prepend(Header());

 // NAV bootom
    //mainEl.appendChild(Nav());

    //FOOTER
    mainEl.appendChild(Footer());

    return mainEl;
};

export default About;