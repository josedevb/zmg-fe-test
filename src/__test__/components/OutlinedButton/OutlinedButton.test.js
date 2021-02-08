import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import lightTheme from '~/styles/themes/light';
import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

describe('Test OutlinedButton', () => {
  it('Should render snapshot', () => {
    const component = mount(
      <ThemeProvider theme={lightTheme}>
        <OutlinedButton text='Hello' />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should call onClick', () => {
    const spy = jest.fn();
    const component = mount(
      <ThemeProvider theme={lightTheme}>
        <OutlinedButton id='outlined-id' onClick={spy} text='Hello' />
      </ThemeProvider>
    );
    const button = component.find('button');
    button.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
