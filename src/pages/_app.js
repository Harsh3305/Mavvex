import '@/styles/globals.css'
import '@/css/header.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '@/css/footer.css'
import "@/css/header.css"
import styles from "@/styles/App.module.css"

export default function App({ Component, pageProps }) {
  return <div className={styles.main}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
