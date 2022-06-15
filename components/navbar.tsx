import { motion } from 'framer-motion'
import { BsGrid1X2 } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

interface ILinks {
  path: string
  text: string
  id: number
  icon: React.ReactElement
}

const links: ILinks[] = [
  {
    path: '/',
    text: 'Home',
    id: 1,
    icon: <AiOutlineHome className='text-3xl'/>,
  },
  {
    path: '/projects',
    text: 'Projects',
    id: 2,
    icon: <BsGrid1X2 className='text-3xl'/>,
  },
  {
    path: '/interests',
    text: 'Interests',
    id: 3,
    icon: <BiBrain className='text-3xl' />,
  }
]


const Navbar = () => {

  return (
    <main className="flex flex-col col-span-2 gap-6 p-4 text-white bg-blue-600 dark:bg-red-600 dark:text-black md:p-12">
        <header>
          <h1 className="text-5xl font-bold">Mario César Marcial Quintero</h1>
          <p className="pt-2">Front end software developer</p>
        </header>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Quick navigation</h2>

          <div className="grid grid-cols-3 gap-3">
            {links.map((link) => (
              <button key={link.id}>
                <motion.div className="flex flex-col items-center justify-center border-2 border-white rounded-md shadow-md h-28">
                  {link.icon}
                  <h2 className="text-lg font-medium">{link.text}</h2>
                </motion.div>
              </button>
            ))}
          </div>
        </div>
      </main>
  )
}

export default Navbar
