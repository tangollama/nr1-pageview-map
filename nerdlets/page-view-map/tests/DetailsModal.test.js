import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailsModal from '../DetailsModal';

Enzyme.configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<DetailsModal />);
  });
});
