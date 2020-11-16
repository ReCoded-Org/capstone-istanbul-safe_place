import React from "react";
import { Col } from "react-bootstrap";
import EmailControl from './EmailControl'
import EmailAdd from './EmailAdd'
import './index.scss'

// this object should come from the compo parent
const userEmails = [
  {
    id: 1,
    email: "jBailony@outlook.com",
    isPrimary: true,
    isConfirmed: true,
  },
]

export default function UserEmail() {
  const [emails, setEmails] = React.useState(userEmails);

  const removeEmail = (emailId) => {
    if (emails.length === 1) {
      return
    }

    setEmails(emails.filter(email => email.id !== emailId))
  }

  const makeEmailPrimary = (emailId) => {
    setEmails(emails.map(email => {
      if (email.id === emailId) {
        return { ...email, isPrimary: true }
      }

      return { ...email, isPrimary: false }
    }))
  }

  const addNewEmail = (email) => {
    // should be sent to the server
    const newEmail = {
      id: emails[emails.length - 1].id + 1,
      email,
      isPrimary: false,
      isConfirmed: false
    }

    setEmails([...emails, {...newEmail}]);
  }

  return (
    <Col xs={12} className="userEmailSection">
      {emails.map(email => (
        <EmailControl
          key={email.id}
          userEmail={email}
          actions={{ removeEmail, makeEmailPrimary }}
        />
      ))}
      <EmailAdd addNewEmail={addNewEmail} />
    </Col>
  );
}
