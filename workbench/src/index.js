import Bogo from '../../packages/cartridges/Bogo';
import BrowserText from '../../packages/screens/BrowserText';

const bogo = new Bogo()
const screen = new BrowserText('field');

screen.render(bogo.toMatrix());
