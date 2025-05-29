import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [disableFields, setDisableFields] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing.');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
        .sendForm(
            serviceId,     // Replace with your EmailJS service ID
            templateId,    // Replace with your EmailJS template ID
            formRef.current,
            publicKey      // Replace with your EmailJS public key
        )
        .then(() => {
            setStatus('success');
            setDisableFields(true)
            formRef.current?.reset();
        })
        .catch(() => {
            setStatus('error');
            setDisableFields(false)
        });
    };

    return (
        <div>
            <Header active={4}></Header>
            <Container maxWidth="sm" sx={{marginTop: 3}}>
                <Typography variant="h4" gutterBottom>
                    Contact Me
                </Typography>

                {status === 'success' && <Alert severity="success">Email sent successfully!</Alert>}
                {status === 'error' && <Alert severity="error">Failed to send email. Try again later.</Alert>}

                <Box component="form" ref={formRef} onSubmit={handleSubmit} mt={2}>
                    <TextField
                    name="user_name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    disabled={disableFields}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    name="user_email"
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    margin="normal"
                    disabled={disableFields}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    margin="normal"
                    disabled={disableFields}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" disabled={disableFields} fullWidth sx={{ mt: 2 }}>
                    Send
                    </Button>
                </Box>
            </Container>
        </div>
  );
};
