import { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icons from '../assets/img/icons.svg';

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  botField: '', // honeypot (має лишатися порожнім)
};

const ContactForm = () => {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: null, msg: '' });
  const [addressVisible, setAddressVisible] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const t = setTimeout(() => setAddressVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const errors = useMemo(() => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!/^[\d+\-\s()]{7,}$/.test(form.phone)) e.phone = 'Invalid phone';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  }, [form]);

  const onChange = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }));
  };

  const onBlur = (k) => setTouched(prev => ({ ...prev, [k]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.botField) return; // спам-бот
    if (Object.keys(errors).length) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields correctly.' });
      setTimeout(() => setStatus({ type: null, msg: '' }), 4000);
      return;
    }
    setSending(true);
    setStatus({ type: null, msg: '' });

    // імітація надсилання (підключиш EmailJS/Formspree — вставиш запит тут)
    await new Promise(r => setTimeout(r, 1400));

    setSending(false);
    setForm(initial);
    setTouched({});
    setStatus({ type: 'ok', msg: 'Message sent successfully. Thank you!' });
    setTimeout(() => setStatus({ type: null, msg: '' }), 5000);
  };

  return (
    <section className="contact cp-contact" id="contact" aria-labelledby="contact-title">
      <Container className="contact-bx">
        <Row className="align-items-start gy-4">
          <Col md={6}>
            <h2 id="contact-title" className="cp-title" data-text="Let’s Connect">Let’s Connect</h2>

            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              {/* honeypot */}
              <input
                type="text"
                name="company"
                autoComplete="off"
                value={form.botField}
                onChange={(e) => onChange('botField', e.target.value)}
                className="cp-honeypot"
                tabIndex="-1"
                aria-hidden="true"
              />

              <div className={`cp-field ${touched.firstName && errors.firstName ? 'is-error' : ''}`}>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => onChange('firstName', e.target.value)}
                  onBlur={() => onBlur('firstName')}
                  placeholder="John"
                  required
                />
                {touched.firstName && errors.firstName && <span className="cp-error">{errors.firstName}</span>}
              </div>

              <div className={`cp-field ${touched.lastName && errors.lastName ? 'is-error' : ''}`}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => onChange('lastName', e.target.value)}
                  onBlur={() => onBlur('lastName')}
                  placeholder="Doe"
                  required
                />
                {touched.lastName && errors.lastName && <span className="cp-error">{errors.lastName}</span>}
              </div>

              <div className={`cp-field ${touched.email && errors.email ? 'is-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange('email', e.target.value)}
                  onBlur={() => onBlur('email')}
                  placeholder="john@example.com"
                  required
                />
                {touched.email && errors.email && <span className="cp-error">{errors.email}</span>}
              </div>

              <div className={`cp-field ${touched.phone && errors.phone ? 'is-error' : ''}`}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => onChange('phone', e.target.value)}
                  onBlur={() => onBlur('phone')}
                  placeholder="+49 151 234567"
                  required
                />
                {touched.phone && errors.phone && <span className="cp-error">{errors.phone}</span>}
              </div>

              <div className={`cp-field ${touched.message && errors.message ? 'is-error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={(e) => onChange('message', e.target.value)}
                  onBlur={() => onBlur('message')}
                  placeholder="Tell me about your project…"
                  required
                />
                {touched.message && errors.message && <span className="cp-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="cp-btn neon wide"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? 'Sending…' : 'Send'}
              </button>

              <div className="cp-status" aria-live="polite">
                {status.msg && (
                  <div className={`cp-alert ${status.type === 'ok' ? 'ok' : 'error'}`}>
                    {status.msg}
                  </div>
                )}
              </div>
            </form>
          </Col>

          <Col md={6} className={addressVisible ? '' : 'opacity-0'}>
            {addressVisible && (
              <div className="cp-aside">
                <h3 className="cp-aside__title">Contact</h3>
                <ul className="cp-list">
                  <li className="cp-list__item">
                    <svg className="icon-contact" width="18" height="18">
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
                  <li className="cp-list__item">
                    <svg className="icon-contact" width="18" height="18">
                      <use href={`${icons}#icon-mail4`}></use>
                    </svg>
                    <a className="link" href="mailto:yulia.gosteva85@gmail.com">
                      yulia.gosteva85@gmail.com
                    </a>
                  </li>
                  <li className="cp-list__item">
                    <svg className="icon-contact" width="18" height="18">
                      <use href={`${icons}#icon-phone`}></use>
                    </svg>
                    <a className="link" href="tel:+49015205485193">
                      +49(0)152-054-851-93
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
