import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
 

it("should create an increment value", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.exists()).toBe(true);
    
    expect(wrapper.state('count')).toBe(0);
    instance.handleCountChange();
    expect(wrapper.state('count')).toBe(1);
     
    expect(wrapper.state('value')).toBe('');
  });