import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoPhoto from './images/lego.png';
import legoCharacter from './javascripts/components/legoCharacter/legoCharacter';

$('#legoMan').attr('src', legoPhoto);

const initApp = () => {
  // events.setEvents();
  legoCharacter.initView();
  legoCharacter.getParts();
};

initApp();
