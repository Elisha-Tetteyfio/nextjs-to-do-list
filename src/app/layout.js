import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { TaskProvider } from './TaskContext';
import { Menu } from './components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs to do list',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <div className="p-5 min-h-screen flex">
            {/* The menu component */}
            <Menu/>

            {/* The body */}
            {children}
          </div>
        </TaskProvider>
      </body>
    </html>
  )
}
