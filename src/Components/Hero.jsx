import {Col, Image} from 'react-bootstrap';

function Hero() {
   return (
    
    <section className="hero">
      <div className="hero-text">
        SEJA VOCÊ <br /> MESMO!!
      </div>
      
      <Col xs={5} md={2}>
          <Image src="https://i.pinimg.com/474x/24/3f/7c/243f7c6221c4000d9f72e2afb6470a3c--tee-shirts-geek-t-shirts.jpg" thumbnail />
        </Col>
    </section>
  );
}
export default Hero;
