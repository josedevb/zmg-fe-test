import useTranslation from '~/hooks/useTranslation';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('intro')}</h3>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { default: lngDict = {} } = await import(
    `public/locales/${params.lng}.json`
  );

  return {
    props: { lng: params.lng, lngDict }
  };
}

export default HomePage;
