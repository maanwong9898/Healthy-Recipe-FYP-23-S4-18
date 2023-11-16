import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/navigation/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Healthy Recipe",
  description: "This is a digital plaform for healthy recipes",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <div>Root layout footer</div>
      </body>
    </html>
  );
};

export default RootLayout;
