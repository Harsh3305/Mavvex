import '@/styles/globals.css'
import '@/css/header.css'
import '@/css/footer.css'
import "@/css/header.css"
import styles from "@/styles/App.module.css"
import "@/css/title.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "@/css/contactus.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return <div>
    <Header/>
    <Component {...pageProps} />
    <ToastContainer />
    <Footer/>
  </div> 
    
  
}
