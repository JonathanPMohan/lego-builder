import 'bootstrap';
import './index.scss';
import $ from 'jquery';
import legoCharacter from './javascripts/components/legoCharacter/legoCharacter';
import events from './javascripts/helpers/events';
import legoLogo from './images/lego.png';

$('#legoMan').attr('src', legoLogo);

const initApp = () => {
  legoCharacter.getHeads();
  legoCharacter.getTorsos();
  legoCharacter.getLegs();
  events.headEvent();
  events.torsoEvent();
  events.legEvent();
  events.randomButtonEvent();
  events.saveButtonEvent();
};

initApp();
