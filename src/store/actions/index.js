// import { blogError, blogLoading, blogSuccess, requestBlogs } from './blogActions';
import { requestProjects, projectError, projectLoading, projectSuccess } from './projectActions';
// import { requestSkills, skillError, skillLoading, skillSuccess } from './skillActions';

const fetchProjects = () => dispatch => {
  dispatch(projectLoading());
  fetch('data/projects.json')
    .then(res => res.json())
    .then(result => {
      dispatch(projectSuccess(result));
      dispatch(requestProjects(result));
      console.log(result);
    })
    .catch(err => {
      dispatch(projectError(err));
    });
};

export default fetchProjects;

