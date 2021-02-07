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
import MessageContent from './MessageContent/MessageContent';

const BeHeardMessage = () => {
  const { t } = useTranslations();

  return (
    <StyledContainer>
      <MessageContent>
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
      </MessageContent>
    </StyledContainer>
  );
};

export default BeHeardMessage;
