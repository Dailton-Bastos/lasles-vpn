import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Hero } from '~/components/Hero';
import { Main } from '~/styles/app';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
    </>
  );
};
