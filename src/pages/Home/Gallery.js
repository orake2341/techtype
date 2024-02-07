import video from '../../assets/imgs/parallax/Mini Tuplok 2022 Short.mp4'

const Gallery = () => {
    return ( 
        <section>
            <div class="video-container">
            <video autoplay controls>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        </section>
     );
}
 
export default Gallery;
