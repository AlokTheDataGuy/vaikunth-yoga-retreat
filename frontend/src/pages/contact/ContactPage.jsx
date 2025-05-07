import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { contactService } from '../../services/api';

// Components
import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';

// Utils
import { getImageUrl } from '../../utils/imageUtils';

const Contact = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Intersection observer hooks for animations
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the API URL from environment or use default
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      // Send form data to backend API
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Handle successful submission
      setFormStatus({
        submitted: true,
        success: true,
        message: data.message || 'Thank you for your message! We will get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      // Handle error
      console.error('Contact form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: error.message || 'Failed to send your message. Please try again later.'
      });
    }
  };

  // FAQ data
  const faqs = [
    {
      question: 'How do I get to Vaikunth Yoga Retreat?',
      answer: 'The nearest airport is Dehradun (Jolly Grant Airport), which is approximately 180 km from Auli. From there, you can take a taxi or bus to Joshimath, and then a local taxi to our retreat. We also offer pickup services from Dehradun and Rishikesh for an additional fee. Detailed travel instructions will be provided upon booking.'
    },
    {
      question: 'What should I bring to the retreat?',
      answer: 'We recommend bringing comfortable yoga clothes, layers for varying temperatures, hiking shoes, a reusable water bottle, personal toiletries, any necessary medications, and a journal. Yoga mats and props are provided, but you\'re welcome to bring your own if preferred. A detailed packing list will be sent to you after booking.'
    },
    {
      question: 'Is WiFi available at the retreat?',
      answer: 'Limited WiFi is available in common areas during specific hours. However, we encourage guests to disconnect from technology and connect with nature and themselves during their stay. If you need constant internet access, we recommend bringing a portable hotspot or local SIM card.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'For retreats and programs, we offer a full refund (minus processing fees) for cancellations made 60 days or more before the start date. Cancellations made 30-59 days before receive a 50% refund. Cancellations less than 30 days before the start date are non-refundable. We recommend purchasing travel insurance to cover unexpected circumstances.'
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and dairy-free diets. Please inform us of your dietary needs when booking so our kitchen can prepare accordingly. All meals at the retreat are vegetarian, with vegan options always available.'
    },
    {
      question: 'Is the retreat suitable for beginners?',
      answer: 'Yes, most of our programs are designed to accommodate practitioners of all levels, from beginners to advanced. Our teachers are experienced in providing modifications and alternatives to suit individual needs. Some specialized programs may have prerequisites, which will be clearly indicated in the program description.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <PageHero backgroundImage={getImageUrl('/assets/images/contact-hero.jpg', 1920, 800)}>
        <PageHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageHeroHeading>Contact Us</PageHeroHeading>
            <PageHeroSubheading>We're Here to Help You on Your Journey</PageHeroSubheading>
          </motion.div>
        </PageHeroContent>
      </PageHero>

      {/* Contact Section */}
      <Section>
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Get in Touch"
            subtitle="We'd Love to Hear From You"
          />

          <ContactContainer>
            <ContactInfo>
              <InfoHeading>Contact Information</InfoHeading>
              <InfoText>
                Have questions about our programs, accommodations, or anything else? Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
              </InfoText>

              <ContactMethods>
                <ContactMethod>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Address</ContactLabel>
                    <ContactValue>Vaikunth Yoga Retreat, Auli, Joshimath, Uttarakhand, India - 246443</ContactValue>
                  </ContactDetails>
                </ContactMethod>

                <ContactMethod>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>+91 98765 43210</ContactValue>
                  </ContactDetails>
                </ContactMethod>

                <ContactMethod>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>info@vaikunthyogaretreat.com</ContactValue>
                  </ContactDetails>
                </ContactMethod>

                <ContactMethod>
                  <ContactIcon>
                    <FaWhatsapp />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>WhatsApp</ContactLabel>
                    <ContactValue>+91 98765 43210</ContactValue>
                  </ContactDetails>
                </ContactMethod>
              </ContactMethods>

              <ResponseTime>
                <ResponseTimeHeading>Response Time</ResponseTimeHeading>
                <ResponseTimeText>We typically respond to inquiries within 24-48 hours during business days.</ResponseTimeText>
              </ResponseTime>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <FormHeading>Send Us a Message</FormHeading>

              {formStatus.submitted ? (
                <FormResult success={formStatus.success}>
                  <ResultMessage>{formStatus.message}</ResultMessage>
                  <Button type="button" onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}>
                    {formStatus.success ? 'Send Another Message' : 'Try Again'}
                  </Button>
                </FormResult>
              ) : (
                <FormFields>
                  <FormRow>
                    <FormField>
                      <FormLabel htmlFor="name">Your Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormField>
                  </FormRow>

                  <FormRow>
                    <FormField>
                      <FormLabel htmlFor="email">Email Address *</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </FormField>
                  </FormRow>

                  <FormRow>
                    <FormField>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <FormInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </FormField>
                  </FormRow>

                  <FormRow>
                    <FormField>
                      <FormLabel htmlFor="subject">Subject *</FormLabel>
                      <FormInput
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </FormField>
                  </FormRow>

                  <FormRow>
                    <FormField>
                      <FormLabel htmlFor="message">Your Message *</FormLabel>
                      <FormTextarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        required
                      />
                    </FormField>
                  </FormRow>

                  <FormRow>
                    <FormField>
                      <FormLabel>Preferred Contact Method</FormLabel>
                      <RadioGroup>
                        <RadioOption>
                          <RadioInput
                            type="radio"
                            id="email-contact"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                          />
                          <RadioLabel htmlFor="email-contact">Email</RadioLabel>
                        </RadioOption>

                        <RadioOption>
                          <RadioInput
                            type="radio"
                            id="phone-contact"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                          />
                          <RadioLabel htmlFor="phone-contact">Phone</RadioLabel>
                        </RadioOption>

                        <RadioOption>
                          <RadioInput
                            type="radio"
                            id="whatsapp-contact"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                          />
                          <RadioLabel htmlFor="whatsapp-contact">WhatsApp</RadioLabel>
                        </RadioOption>
                      </RadioGroup>
                    </FormField>
                  </FormRow>

                  <FormSubmit>
                    <Button type="submit" variant="accent">
                      Send Message
                    </Button>
                  </FormSubmit>
                </FormFields>
              )}
            </ContactForm>
          </ContactContainer>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section variant="light" id="faq">
        <motion.div
          ref={faqRef}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common Inquiries"
          />

          <FAQContainer>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FAQItem>
                  <FAQQuestion>{faq.question}</FAQQuestion>
                  <FAQAnswer>{faq.answer}</FAQAnswer>
                </FAQItem>
              </motion.div>
            ))}
          </FAQContainer>

          <MoreQuestions>
            <MoreQuestionsText>
              Don't see your question here? Feel free to reach out to us directly.
            </MoreQuestionsText>
            <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Contact Us
            </Button>
          </MoreQuestions>
        </motion.div>
      </Section>

      {/* Getting Here Section */}
      <Section id="getting-here">
        <motion.div
          ref={mapRef}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Getting Here"
            subtitle="Your Journey to Vaikunth"
          />

          <TravelContainer>
            <TravelInfo>
              <TravelHeading>Travel Information</TravelHeading>
              <TravelText>
                <p>
                  Vaikunth Yoga Retreat is located in Auli, a beautiful hill station in the Chamoli district of Uttarakhand, India. Known for its panoramic views of the Himalayan peaks, Auli is approximately 16 km from Joshimath and about 250 km from Rishikesh.
                </p>

                <TravelOptions>
                  <TravelOption>
                    <TravelOptionTitle>By Air</TravelOptionTitle>
                    <TravelOptionText>
                      The nearest airport is Jolly Grant Airport in Dehradun, approximately 180 km from Auli. From there, you can take a taxi to Joshimath (7-8 hours), followed by a short drive to our retreat.
                    </TravelOptionText>
                  </TravelOption>

                  <TravelOption>
                    <TravelOptionTitle>By Train</TravelOptionTitle>
                    <TravelOptionText>
                      The nearest railway station is Haridwar, about 220 km from Auli. From Haridwar, you can take a bus or taxi to Joshimath, and then to our retreat.
                    </TravelOptionText>
                  </TravelOption>

                  <TravelOption>
                    <TravelOptionTitle>By Road</TravelOptionTitle>
                    <TravelOptionText>
                      Auli is well-connected by road from major cities like Rishikesh, Haridwar, and Dehradun. The journey offers breathtaking views of the Himalayas and the Ganges.
                    </TravelOptionText>
                  </TravelOption>
                </TravelOptions>

                <p>
                  We offer pickup services from Dehradun, Rishikesh, and Haridwar for an additional fee. Please contact us in advance to arrange transportation.
                </p>
              </TravelText>

              <Button to="/booking" variant="accent">
                Book Airport Pickup
              </Button>
            </TravelInfo>

            <MapWrapper>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.81713126514!2d79.55989716551828!3d30.530195726064378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79c32a24e8fdb%3A0x9a14ababee539f3f!2sAuli%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auli Map"
              ></iframe>
            </MapWrapper>
          </TravelContainer>
        </motion.div>
      </Section>

      {/* Newsletter Section */}
      <Section variant="primary">
        <NewsletterContainer>
          <NewsletterContent>
            <SectionHeading
              title="Stay Connected"
              subtitle="Join Our Community"
              align="center"
              withDivider={false}
            />
            <NewsletterText>
              Subscribe to our newsletter to receive updates on upcoming retreats, special offers, and wellness wisdom from our Himalayan sanctuary.
            </NewsletterText>
            <NewsletterForm onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.elements[0].value;

              try {
                // Get the API URL from environment or use default
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

                // Send newsletter subscription to backend
                const response = await fetch(`${apiUrl}/api/contact/newsletter`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                });

                const data = await response.json();

                if (!response.ok) {
                  throw new Error(data.message || 'Something went wrong');
                }

                alert('Thank you for subscribing to our newsletter!');
                e.target.reset();
              } catch (error) {
                console.error('Newsletter subscription error:', error);
                alert('Failed to subscribe. Please try again later.');
              }
            }}>
              <NewsletterInput type="email" placeholder="Your email address" required />
              <Button type="submit" variant="accent">Subscribe</Button>
            </NewsletterForm>
          </NewsletterContent>
        </NewsletterContainer>
      </Section>
    </main>
  );
};

// Styled Components
const PageHero = styled(Section)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`;

const PageHeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const PageHeroHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const PageHeroSubheading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const InfoHeading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const ContactValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const ResponseTime = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ResponseTimeHeading = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.white};
`;

const ResponseTimeText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: 0;
`;

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FormHeading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.primary};
`;

const FormResult = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ success }) =>
    success ? 'rgba(42, 93, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ResultMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ success, theme }) =>
    success ? theme.colors.primary : '#dc3545'};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  background-color: white;
  color: ${({ theme }) => theme.colors.charcoal};
  width: 100%;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  }
`;

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  resize: vertical;
  background-color: white;
  color: ${({ theme }) => theme.colors.charcoal};
  width: 100%;
  min-height: 120px;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    min-height: 100px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const RadioLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  cursor: pointer;
`;

const FormSubmit = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FAQQuestion = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
`;

const FAQAnswer = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

const MoreQuestions = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
`;

const MoreQuestionsText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const TravelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TravelInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TravelHeading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.primary};
`;

const TravelText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const TravelOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

const TravelOption = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const TravelOptionTitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
`;

const TravelOptionText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: 0;
`;

const MapWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const NewsletterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const NewsletterContent = styled.div`
  text-align: center;

  h2, p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NewsletterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  background-color: white;
  color: ${({ theme }) => theme.colors.charcoal};
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    width: 100%;
  }
`;

export default Contact;