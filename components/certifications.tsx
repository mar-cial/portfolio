import React from 'react'
import Academind from './Academind'
import { SiTypescript } from 'react-icons/si'
import Gopher from '../components/gopher'

const Certifications = () => {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-bold">Certifications</h2>

      {/* Certifications container */}
      <div className="flex flex-col gap-8">
        {/**React course */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 pt-4 pb-4 border-b-2">
            <a href="https://academind.com" target={'_blank'}>
              <Academind className={'w-24 fill-current'} />
            </a>
            <a
              href="https://www.udemy.com/share/101Wby3@Vj8F39_EAV8xjA9iSQIaRIAe61TB9QDv6dGtN3ylruS7oi_qOlC5N9HPTHG2xNko/"
              className="text-lg font-medium hover:underline"
              target={'_blank'}
            >
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </a>
          </div>
          <div>
            <p className="font-mono text-gray-600 text-md">
              Course description
            </p>
            <p className="italic">
              "Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
              Redux, React Routing, Animations, Next.js and way more!"
            </p>
          </div>
          <div>
            <p className="font-mono text-gray-600 text-md">Things I learned</p>
            <p>
              This course served as a great introduction to React. It covers all
              the essential topics and goes in-depth about useContext and Redux,
              which were the most challenging parts of the course in my opinion.
              It has a lot of material for future reference and, most
              importantly, many practical lessons that I could apply to personal
              projects.
            </p>
          </div>
        </div>

        {/* Typescript */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 pt-4 pb-4 border-b-2">
            <a href="https://academind.com" target={'_blank'}>
              <SiTypescript className="text-6xl" />
            </a>
            <a
              href="https://www.udemy.com/share/101whA3@yQUQ7bAzATAKp5nlUs_rtL4-irCVL-zN7tY_AXt09s3Sy0CBBS2ung_yxemSp-ru/"
              className="text-lg font-medium hover:underline"
              target={'_blank'}
            >
              Typescript with modern React (i.e. hooks, context, suspense)
            </a>
          </div>

          <div>
            <p className="font-mono text-gray-600 text-md">
              Course description
            </p>
            <p className="italic">
              "Adding typescript to a modern react project with hooks (useState,
              useContext, useEffect) and code splitting with lazy."
            </p>
          </div>

          <div>
            <p className="font-mono text-gray-600 text-md">Things I learned</p>
            <p>
              I learned a lot about working with Typescript + React. Hooks are
              tricky to understand, at least to me. The subject I struggled the
              most were mouse events and form handlers, so I found a lot of the
              material about it in this couse was very useful and easy to
              understand.
            </p>
          </div>
        </div>

        {/**Go Course */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 pt-4 pb-4 border-b-2">
            <a href="https://academind.com" target={'_blank'}>
              <Gopher className={'h-24 w-24'} />
            </a>
            <a
              href="https://www.udemy.com/share/1013gw3@BzDnOj1tNeycpMh-7jruTfXoy4ntRwOw20ZBuTLNTCAq1gmxNU6ehNeMxthNkfSa/"
              className="text-lg font-medium hover:underline"
              target={'_blank'}
            >
              Learn How To Code: Google's Go (golang) Programming Language
            </a>
          </div>

          <div>
            <p className="font-mono text-gray-600 text-md">
              Course description
            </p>
            <p className="italic">
              "The Ultimate Comprehensive Course - Perfect for Both Beginners
              and Experienced Developers"
            </p>
          </div>

          <div>
            <p className="font-mono text-gray-600 text-md">Things I learned</p>
            <p>
              I loved this course. The instructor Trevor McLeod makes a
              programming language so easy to understand. Go is my favorite
              language when developing back-end services, and I found that
              building an application to a useful stage doesn't take much time.
              It is simple and can also be as complex as the application
              demands.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
