import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';

const printSavedLego = (savedLegos) => {
  let newString = '';
  savedLegos.forEach((savedLego) => {
    newString += `
      <div class="savedCharacter col" >
      <h5 class="text-center">${savedLego.name}</h5>
      <img src="${savedLego.head}" class="savedLegoImage">
      <img src="${savedLego.torso}" class="savedLegoImage">
      <img src="${savedLego.leg}" class="savedLegoImage">
      </div>
  `;
  });
  $('.savedImage').html(newString);
};

export default { printSavedLego };
