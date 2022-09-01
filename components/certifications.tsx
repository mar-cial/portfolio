import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

const Certifications = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold">Work experience</h2>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <p className="text-teal-700 text-md font-console">Company name</p>
              <h3 className="text-xl font-semibold">
                Ixaya Business, S.A. de C.V.
              </h3>
            </div>

            <div className='text-right'>
              <p className="text-teal-700 text-md font-console">Start date</p>
              <p className="font-thin">April 2022</p>
            </div>
          </div>
          <div>
            <p className="text-teal-700 text-md font-console">Role</p>
            <p>Front-end React developer</p>
          </div>

          <div>
            <p className="text-teal-700 text-md font-console">Projects worked on</p>
            <ul className='pl-4 list-disc'>
              <li>Developed tools to read and write JSON that complies with a specific schema.</li>
              <li>Developed tested react components to be added to company library.</li>
              <li>Designed and developed react comonents to be included in an NFT marketplace.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Certifications</h2>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <p className="text-teal-700 text-md font-console">Bootcamp name</p>
              <h3 className="text-xl font-semibold">
                Fullstack Blockchain Developer
              </h3>
            </div>

            <div className='text-right'>
              <p className="text-teal-700 text-md font-console">Date of completion</p>
              <p className="font-thin">August 2022</p>
            </div>
          </div>
          <div>
            <p className="text-teal-700 text-md font-console">Imparted by</p>
            <a className='flex items-center gap-2' href="https://www.blockdemy.com/">Blockdemy <BiLinkExternal /></a>
          </div>

          <div>
            <p className="text-teal-700 text-md font-console">Things I learn</p>
            <ul className='pl-4 list-disc'>
              <li>Crash course on the Solidity Language</li>
              <li>Hardhat framework</li>
              <li>ERC20 and ERC721 contract development with OpenZeppelin</li>
              <li>React app integration and interaction with ethereum blockchain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
