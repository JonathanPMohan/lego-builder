import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../components/legoCharacter/legoCharacter';
import savedLegos from '../components/SavedCharacters/savedCharacters';

const headEvent = () => {
  $('#headOptions').on(('click'), (e) => {
    const dropDownHead = $(e.target)
      .closest('.dropdown').attr('type');
    legoCharacter.dropDownHead(dropDownHead);
  });
};

const torsoEvent = () => {
  $('#torsoOptions').on(('click'), (e) => {
    console.log('you clicked me');
    const dropDownTorso = $(e.target)
      .closest('.dropdown').attr('type');
    legoCharacter.dropDownTorso(dropDownTorso);
  });
};

const legEvent = () => {
  $('#legOptions').on(('click'), (e) => {
    const dropDownLeg = $(e.target)
      .closest('.dropdown').attr('type');
    legoCharacter.dropDownLeg(dropDownLeg);
  });
};

const randomButtonEvent = () => {
  $('#randomButton').on(('click'), () => {
    legoCharacter.getHeads();
    legoCharacter.getTorsos();
    legoCharacter.getLegs();
  });
};

const savedLegoArray = [];

const saveButtonEvent = () => {
  $('#saveButton').on(('click'), () => {
    const name = $('#nameDiv').text();
    const head = $('#headsDiv').find('img').attr('src');
    const torso = $('#torsosDiv').find('img').attr('src');
    const leg = $('#legsDiv').find('img').attr('src');
    console.log(savedLegoArray);
    savedLegoArray.push({
      name, head, torso, leg,
    });
    savedLegos.printSavedLego(savedLegoArray);
  });
};

export default {
  torsoEvent, legEvent, headEvent, randomButtonEvent, saveButtonEvent,
};
