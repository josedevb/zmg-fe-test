import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Index from '../../pages/[lng]/index';
import persons from '../../__mocks__/persons';
import lightTheme from '~/styles/themes/light';

describe('Test Index page', () => {
  it('Should render snapshot', () => {
    const component = mount(
      <ThemeProvider theme={lightTheme}>
        <Index initialPersons={persons} mainPerson={persons[0]} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
