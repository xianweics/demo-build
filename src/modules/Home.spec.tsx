import Home from './Home';
import { render } from '@testing-library/react';
import { intlWrapper } from 'src/testUtils';
describe('test Home', () => {
  it('init render', () => {
    const { baseElement } = render(intlWrapper(<Home />));
    const wrapper = baseElement.querySelectorAll('div');
    expect(wrapper[0].innerHTML).toBe('Home');
  });
});
