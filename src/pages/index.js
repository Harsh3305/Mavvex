
import { Inter } from 'next/font/google'
import Title from "@/components/Title";
import Demo from "@/components/requestDemo";
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <Title/>
    <Demo/>
  </div>
}
