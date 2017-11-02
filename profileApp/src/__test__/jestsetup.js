import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

//With this we don't need to import this libraries on the test files
global.shallow = shallow;
global.render = render;
global.mount = mount;

console.log = message => {
    throw new Error(message);
}