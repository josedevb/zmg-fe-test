import validUrl from '~/config/utils/validUrl';

describe('External Url Validator util', () => {
  it('Should return true if url is external', () => {
    const validated = validUrl('https://google.co');
    expect(validated).toBeTruthy();
  });

  it('Should return falsy if url is internal', () => {
    const rem = validUrl('/internal-url');
    expect(rem).toBeFalsy();
  });

  it('Should return falsy if url is empty', () => {
    const rem = validUrl();
    expect(rem).toBeFalsy();
  });
});
