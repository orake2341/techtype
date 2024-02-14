import HeroCSS from '../../assets/Hero.module.css';

const Hero = () => {
    return ( 
        <section className={HeroCSS['hero-section']}>
            <div className={HeroCSS['hero-container']}>
                <h2 class="hero-title">Key to Custom Mastery.</h2>
                <div className="scroll-text">
                    <h2>
                        <span>scratch.</span>
                    </h2>
                </div>
                <p class="hero-text">
                            Are you looking to elevate your computing experience to a whole new level? Look no further!
                            TechType is your one-stop destination for premium keyboard modding and PC building services.
                            Whether you're a hardcore gamer, a creative professional, or simply someone who demands the
                            best from their technology, we've got you covered.
                </p>
            </div>
        </section>
     );
}
 
export default Hero;