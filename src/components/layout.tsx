import Head from "next/head";
import Header from "@/sections/Header";
import ClientOnly from "./navbar/ClientOnly";
import RegisterModal from "./modal/RegisterModal";
import LoginModal from "./modal/LoginModal";
import Footer from "@/sections/Footer";
import ToasterProvider from "@/providers/ToasterProvider";

type Props = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
};

const Layout = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        {/* Other SEO-related tags */}
      </Head>
      <Header />
      <ClientOnly>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
      </ClientOnly>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
