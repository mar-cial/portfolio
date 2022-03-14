import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'

type formError = {
  fullname: boolean
  email: boolean
  subject: boolean
  message: boolean
}

const ContactForm: FC = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    subject: false,
    message: false,
  })

  const [buttonText, setButtonText] = useState('Send')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors: formError = {
      fullname: false,
      email: false,
      subject: false,
      message: false,
    }

    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')

        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={'flex flex-col pt-4'}>
      <label htmlFor="fullname" className="text-sm font-medium">
        Full name
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        name="fullname"
        className="border-2"
      />
      {errors?.fullname && (
        <p className="text-red-400">Full name cannot be empty.</p>
      )}
      <label htmlFor="email" className="text-sm font-medium ">
        Email
      </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="border-2"
      />
      {errors?.email && <p className="text-red-400">Email cannot be empty.</p>}
      <label htmlFor="subject" className="text-sm font-medium">
        Subject
      </label>
      <input
        type="text"
        value={subject}
        name="subject"
        className="border-2"
        onChange={(e) => {
          setSubject(e.target.value)
        }}
      />
      {errors?.subject && (
        <p className="text-red-400">Subject cannot be empty.</p>
      )}

      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-2"
      ></textarea>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 text-sm font-semibold text-green-500">
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
      <motion.button
        type="submit"
        className="mt-4 border-2"
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        {buttonText}
      </motion.button>
    </form>
  )
}

export default ContactForm
