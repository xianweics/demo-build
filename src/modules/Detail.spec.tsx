import Detail from './Detail';
import { render } from '@testing-library/react';
import { intlWrapper } from 'src/testUtils';
describe('test Detail', () => {
  it('init render', () => {
    const { baseElement } = render(intlWrapper(<Detail />));
    const wrapper = baseElement.querySelectorAll('div');
    expect(wrapper[0].innerHTML).toBe('Detail: english');
  });
});
