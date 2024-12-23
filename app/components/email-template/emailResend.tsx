import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    phone,
    email,
    message,
}) => (
  <div>
    <h1>You have a message from {name}!</h1>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);