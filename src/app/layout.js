import { Inter } from "next/font/google";
import styles from './page.module.css';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <SideBar />
        <main className={styles.main}>

          <div className={styles.pageMain}>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
