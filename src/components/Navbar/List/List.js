import React from 'react';
import Image from 'next/image';

import Link from '~/components/Link/Link';
import useTranslations from '~/hooks/useTranslation';
import { StyledList, StyledListItem, StyledSearchIcon } from './List.styled';

const List = () => {
  const { t } = useTranslations();

  return (
    <StyledList>
      <StyledListItem>
        <Link href='/en/pass-trials'>{t('navbar.pastTrials')}</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href='/en/how-it-works'>{t('navbar.howItWorks')}</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href='/en/log-in'>{t('navbar.login')}</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href='/en/search'>
          <StyledSearchIcon>
            <Image
              quality={100}
              loading='eager'
              layout='fill'
              objectFit='contain'
              src='/icons/search.svg'
            />
          </StyledSearchIcon>
        </Link>
      </StyledListItem>
    </StyledList>
  );
};

export default List;
