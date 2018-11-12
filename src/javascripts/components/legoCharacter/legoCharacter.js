import 'bootstrap';
import $ from 'jquery';
import './legoCharacter.scss';
import partsData from '../../data/partsData';
import dropdown from '../../helpers/dropdown';

const initHeadLoad = (heads) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * heads.length);
  newString += `
      <div class="head legoPart" id="${heads[randomize].id}"><img src="${heads[randomize].imageUrl}" class="legoImage"></div>`;
  $('#headsDiv').html(newString);
  $('#headName').html();
  $('#headName').html(heads[randomize].name);
};

const initTorsoLoad = (torsos) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * torsos.length);
  newString += `
      <div class="torso legoPart" id="${torsos[randomize].id}"><img src="${torsos[randomize].imageUrl}" class="legoImage"></div>`;
  $('#torsosDiv').html(newString);
  $('#torsoName').html();
  $('#torsoName').html(torsos[randomize].name);
};

const initLegLoad = (legs) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * legs.length);
  newString += `
      <div class="leg legoPart" id="${legs[randomize].id}"><img src="${legs[randomize].imageUrl}" class="legoImage"></div>`;
  $('#legsDiv').html(newString);
  $('#legName').html();
  $('#legName').html(legs[randomize].name);
};

const customHeadLoad = (head) => {
  let newString = '';
  newString += `
      <div class="head" id="${head.id}"><img src="${head.imageUrl}" class="legoImage"></div>`;
  $('#headsDiv').html(newString);
  $('#headName').html();
  $('#headName').html(head.name);
};

const customTorsoLoad = (torso) => {
  let newString = '';
  newString += `
      <div class="torso" id="${torso.id}"><img src="${torso.imageUrl}" class="legoImage"></div>`;
  $('#torsosDiv').html(newString);
  $('#torsoName').html();
  $('#torsoName').html(torso.name);
};

const customLegLoad = (leg) => {
  let newString = '';
  newString += `
      <div class="leg" id="${leg.id}"><img src="${leg.imageUrl}" class="legoImage"></div>`;
  $('#legsDiv').html(newString);
  $('#legName').html();
  $('#legName').html(leg.name);
};

const selectedHead = (clickedHead) => {
  partsData.loadHeads()
    .then((heads) => {
      heads.data.forEach((customHead) => {
        if (clickedHead === customHead.id) {
          customHeadLoad(customHead);
        }
      });
    });
};

const selectedTorso = (clickedTorso) => {
  partsData.loadTorsos()
    .then((torsos) => {
      torsos.data.forEach((customTorso) => {
        if (clickedTorso === customTorso.id) {
          customTorsoLoad(customTorso);
        }
      });
    });
};

const selectedLeg = (clickedLeg) => {
  partsData.loadLegs()
    .then((legs) => {
      legs.data.forEach((customLeg) => {
        if (clickedLeg === customLeg.id) {
          customLegLoad(customLeg);
        }
      });
    });
};

const getHeads = () => {
  partsData.loadHeads()
    .then((heads) => {
      dropdown.printHeads(heads.data);
      initHeadLoad(heads.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getTorsos = () => {
  partsData.loadTorsos()
    .then((torsos) => {
      dropdown.printTorsos(torsos.data);
      initTorsoLoad(torsos.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegs = () => {
  partsData.loadLegs()
    .then((legs) => {
      dropdown.printLegs(legs.data);
      initLegLoad(legs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default {
  getHeads, getTorsos, getLegs, selectedHead, selectedTorso, selectedLeg,
};
