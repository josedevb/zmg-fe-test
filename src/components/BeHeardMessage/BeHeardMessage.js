import {
  StyledTitle,
  StyledContainer,
  StyledDescription,
  StyledTitleContainer,
  StyledTitleComplement,
  StyledMessageContainer,
  StyledDescriptionContainer
} from './BeHeardMessage.styled';
import useTranslations from '~/hooks/useTranslation';
import MessageContainer from './MessageContainer/MessageContainer';

const BeHeardMessage = () => {
  const { t } = useTranslations();

  return (
    <StyledContainer>
      <MessageContainer>
        <StyledMessageContainer>
          <StyledTitleContainer>
            <StyledTitleComplement>
              {t('beHeard.titleComplement')}
            </StyledTitleComplement>
            <StyledTitle>{t('beHeard.title')}</StyledTitle>
          </StyledTitleContainer>
          <StyledDescriptionContainer>
            <StyledDescription>{t('beHeard.description')}</StyledDescription>
          </StyledDescriptionContainer>
        </StyledMessageContainer>
      </MessageContainer>
    </StyledContainer>
  );
};

export default BeHeardMessage;
