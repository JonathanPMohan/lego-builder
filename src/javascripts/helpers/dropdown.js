import 'bootstrap';
import $ from 'jquery';

const printHeads = (heads) => {
  let newString = '';
  heads.forEach((head) => {
    newString += `
      <a class="dropdown" type="${head.id}"><img src="${head.imageUrl}" class="dropThumb"></a>
    `;
  });
  $('#headOptions').html(newString);
};

const printLegs = (legs) => {
  let newString = '';
  legs.forEach((leg) => {
    newString += `
      <a class="dropdown" type="${leg.id}"><img src="${leg.imageUrl}" class="dropThumb"></a>
    `;
  });
  $('#legOptions').html(newString);
};

const printTorsos = (torsos) => {
  let newString = '';
  torsos.forEach((torso) => {
    newString += `
      <a class="dropdown" type="${torso.id}"><img src="${torso.imageUrl}" class="dropThumb"></a>
    `;
  });
  $('#torsoOptions').html(newString);
};

export default { printHeads, printTorsos, printLegs };
