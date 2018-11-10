import 'bootstrap';
import $ from 'jquery';
import legoParts from '../../data/partsData';

const initView = () => {
  $('#legoPage').show();
};

//  Lego Parts Function
const createLegoMan = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
        <div class="projectcard bg-dark p-1 m-3 mb-4 movie" style="max-width: 65rem;" id="${part.id}">
      <div class="card-header border-0">
        <img class="card-img-top img-thumbnail img-fluid" src="${part.imageUrl}" alt="${part.id}" height="200px" width="200px">
      </div>
      <div class="card-block px-2">
        <h4 class="card-title text-center">${part.name}:</h4>
        </div>  
    </div>`;
  });
  $('#legoPage').html(newString);
};

const getLegoHeads = () => {
  legoParts.getHeads()
    .then((parts) => {
      console.log(parts.data);
      createLegoMan(parts.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegoTorsos = () => {
  legoParts.getTorsos()
    .then((parts) => {
      console.log(parts.data);
      createLegoMan(parts.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const getLegoLegs = () => {
  legoParts.getLegs()
    .then((parts) => {
      console.log(parts.data);
      createLegoMan(parts.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default {
  initView, getLegoHeads, getLegoLegs, getLegoTorsos,
};
