import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

interface AppProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AppProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#131313]">
      <Head>
        <title>Anshul Kanwar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
