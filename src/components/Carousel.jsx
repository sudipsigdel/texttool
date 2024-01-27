import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="third-slide"
          src="https://dummyimage.com/1x1/212529/fff&text=+"
          style={{ height: 500, width: 4000 }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="third-slide"
          src="https://dummyimage.com/1x1/212529/fff&text=+"
          style={{ height: 500, width: 4000 }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="third-slide"
          src="https://dummyimage.com/1x1/212529/fff&text=+"
          style={{ height: 500, width: 4000 }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
