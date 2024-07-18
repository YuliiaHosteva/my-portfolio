import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const { firstName, lastName, email, phone, message } = formDetails;
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      setTimeout(() => setStatus({}), 5000); // Remove status message after 5 seconds
      return;
    }

    // Simulate form submission
    setButtonText('Sending...');
    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setButtonText('Send');
      setStatus({ success: true, message: 'Message sent successfully' });
      setTimeout(() => setStatus({}), 5000); // Remove status message after 5 seconds
    }, 2000);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
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
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
