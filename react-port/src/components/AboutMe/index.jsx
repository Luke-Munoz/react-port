import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutMe = (props) => {
  return (
    <div>
      <Card>
        <CardImg placeholder />
        <CardBody>
          <CardTitle tag="h5">About me!</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Luke Munoz</CardSubtitle>
          <CardText>Insert stuff about me here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remain</CardText>
        </CardBody>
      </Card>
      <footer>
                <h1 className="section-title primary-border text-center">Contact Info</h1>
                <ul>
                    <li className="text-center">
                        Email: <a href="mailto:Jacekhacking@gmail.com"
                                  className=" link-dark"> something@something.com</a>
                    </li>
                    <li className="text-center">
                        Github: <a href="https://github.com/Luke-Munoz?tab=repositories" className="link-dark"> My Github </a>
                    </li>
                    <li className="text-center">
                        Phone: 123412341
                    </li>

                </ul>
            </footer>

    </div>

    
  );
};

export default AboutMe;