import spacing from '~/config/utils/spacing';

describe('Spacing util', () => {
  it('Should calculate spacing to rem', () => {
    const rem = spacing(2);
    expect(rem).toBe('0.5em');
  });

  it('Should return 0em if we dont send nothing', () => {
    const rem = spacing();
    expect(rem).toBe('0em');
  });

  it('Should return 0em if we pass more that 4 arguments', () => {
    const rem = spacing(1, 1, 1, 1, 1);
    expect(rem).toBe('0em');
  });
});
