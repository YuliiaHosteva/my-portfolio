import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import icons from '../assets/img/icons.svg';

const ContactForm = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [addressVisible, setAddressVisible] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formDetails;
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      setTimeout(() => setStatus({}), 5000); 
      return;
    }

    setButtonText('Sending...');
    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setButtonText('Send');
      setStatus({ success: true, message: 'Message sent successfully' });
      setTimeout(() => setStatus({}), 5000);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddressVisible(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <h2>Let's Connect</h2>
                  <div className="form-container">
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email"
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone"
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                          />
                        </Col>
                        <Col>
                          <textarea
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                          />
                          <button type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </Col>
                      </Row>
                    </form>
                    {status.message && (
                      <div className={`status-message ${status.success ? 'success' : 'danger'}`}>
                        {status.message}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6} className={addressVisible ? 'd-none d-md-block' : ''}>
            {addressVisible && (
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                    <div className="address-box">
                      <address>
                        <ul className="contact-list">
                          <li className="contact-link">
                            <svg className="icon-contact" width={18} height={18}>
                              <use href={`${icons}#icon-location2`}></use>
                            </svg>
                            <a
                              className="link"
                              href="https://www.google.com/maps?q=38889, Blankenburg, Saxony-Anhalt, Germany"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              38889, Blankenburg, Saxony-Anhalt, Germany
                            </a>
                          </li>
                          <li className="contact-link">
                            <svg className="icon-contact" width={18} height={18}>
                              <use href={`${icons}#icon-mail4`}></use>
                            </svg>
                            <a className="link" href="mailto:yulia.gosteva85@gmail.com">
                              yulia.gosteva85@gmail.com
                            </a>
                          </li>
                          <li className="contact-link">
                            <svg className="icon-contact" width={18} height={18}>
                              <use href={`${icons}#icon-phone`}></use>
                            </svg>
                            <a className="link" href="tel:+49015205485193">
                              +49(0)152-054-851-93
                            </a>
                          </li>
                        </ul>
                      </address>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
