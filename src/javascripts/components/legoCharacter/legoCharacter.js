import 'bootstrap';
import $ from 'jquery';
import projectsData from '../data/projectGetter';

const initView = () => {
  $('#legoPage').show();
};

//  Project Cards Function
const createLegoMan = (parts) => {
  let newString = '';
  legos.forEach((part) => {
      newString += `
        <div class="projectcard bg-dark p-1 m-3 mb-4 movie" style="max-width: 65rem;" id="${project.id}">
      <div class="card-header border-0">
        <img class="card-img-top img-thumbnail img-fluid" src="${project.imageUrl}" alt="${project.title}">
      </div>
      <div class="card-block px-2">
        <h4 class="card-title text-center">${part.name}:</h4>
        <p class="card-text">${part.description}</p>
        <p class="card-text">Technologies Used: ${project.technologiesUsed}</p>
      </div> 
      <div class="w-100"></div> 
      <div class="card-footer w-100 text-muted row d-flex justify-content-around">
          <p class="text-center"><a href='${project.url}' class="card-link">Project Url</a></p>
          <p class="text-center"><a href='${project.githubUrl}' class="card-link">GitHub Url</a></p>
      </div>  
    </div>`;
    }
    $('#legoPage').html(newString);
  });
};

const getProjects = () => {
projectsData.getProjects()
.then((projects) => {
  createProjectCards(projects.data);
})
.catch((error) => {
console.error({ error });
});
};

export default { initView, getProjects };