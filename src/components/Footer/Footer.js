import Image from 'next/image';

import {
  StyledLink,
  StyledLogo,
  StyledLinks,
  StyledFollowUs,
  StyledContainer,
  StyledSocialNetwork,
  StyledSocialNetworks
} from './Footer.styled';
import Link from '~/components/Link/Link';
import { icons } from '~/config/constants/assets';
import useTranslations from '~/hooks/useTranslation';
import Container from '~/components/Container/Container';

const Footer = () => {
  const { t } = useTranslations();

  return (
    <Container>
      <StyledContainer>
        <StyledLinks>
          <StyledLink>
            <Link href='/en/terms-and-conditions'>{t('footer.terms')}</Link>
          </StyledLink>
          <StyledLink>
            <Link href='/en/privacy-policy'>{t('footer.privacy')}</Link>
          </StyledLink>
          <StyledLink>
            <Link href='/en/contact'>{t('footer.contact')}</Link>
          </StyledLink>
        </StyledLinks>
        <StyledSocialNetworks>
          <StyledFollowUs>{t('footer.follow')}</StyledFollowUs>
          <StyledSocialNetwork>
            <Link href='/en'>
              <StyledLogo>
                <Image
                  quality={100}
                  loading='lazy'
                  layout='fill'
                  objectFit='cover'
                  src={icons.twitter}
                />
              </StyledLogo>
            </Link>
          </StyledSocialNetwork>
          <StyledSocialNetwork>
            <Link href='/en/follow-us'>
              <StyledLogo>
                <Image
                  quality={100}
                  loading='lazy'
                  layout='fill'
                  objectFit='cover'
                  src={icons.facebook}
                />
              </StyledLogo>
            </Link>
          </StyledSocialNetwork>
        </StyledSocialNetworks>
      </StyledContainer>
    </Container>
  );
};

export default Footer;
