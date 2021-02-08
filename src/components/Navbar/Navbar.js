import List from './List/List';
import useTranslation from '~/hooks/useTranslation';
import Container from '~/components/Container/Container';
import { StyledNavbar, StyledTitle } from './Navbar.styled';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledNavbar>
        <StyledTitle>
          <h2>{t('navbar.rule')}</h2>
        </StyledTitle>
        <List />
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
