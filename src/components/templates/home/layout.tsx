import HomeHeader from '@/components/organisms/HomeHeader';
import Footer from '@/components/organisms/Footer';
import Head from 'next/head';

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

