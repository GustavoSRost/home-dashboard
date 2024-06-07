import HomeHeader from '@/components/organisms/HomeHeader';
import Footer from '@/components/organisms/Footer';

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

