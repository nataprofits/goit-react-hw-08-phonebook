import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Container } from './SharedLayout.styled';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader>Loading...</Loader>}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default SharedLayout;
