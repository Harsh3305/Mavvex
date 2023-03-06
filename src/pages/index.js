
import { Inter } from '@next/font/google'
import Title from "@/components/Title";
import Demo from "@/components/requestDemo";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <Title/>
    <Demo/>
  </div>
}