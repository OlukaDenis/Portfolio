import {
  blogError, blogLoading, blogSuccess, requestBlogs,
} from './blogActions';
import {
  requestProjects, projectError, projectLoading, projectSuccess,
} from './projectActions';
import {
  requestSkills, skillError, skillLoading, skillSuccess,
} from './skillActions';

import {
  drawerClosed, drawerOpened,
} from './drawerAction';

const fetchProjects = () => dispatch => {
  dispatch(projectLoading());
  fetch('data/projects.json')
    .then(res => res.json())
    .then(result => {
      dispatch(projectSuccess(result));
      dispatch(requestProjects(result));
    })
    .catch(err => {
      dispatch(projectError(err));
    });
};

const fetchSkills = () => dispatch => {
  dispatch(skillLoading());
  fetch('data/skills.json')
    .then(res => res.json())
    .then(result => {
      dispatch(skillSuccess(result));
      dispatch(requestSkills(result));
    })
    .catch(err => {
      dispatch(skillError(err));
    });
};

const fetchBlogs = () => dispatch => {
  dispatch(blogLoading());
  fetch('data/blogs.json')
    .then(res => res.json())
    .then(result => {
      dispatch(blogSuccess(result));
      dispatch(requestBlogs(result));
    })
    .catch(err => {
      dispatch(blogError(err));
    });
};

const openDrawer = () => dispatch => {
  dispatch(drawerOpened());
};

const closeDrawer = () => dispatch => {
  dispatch(drawerClosed());
};

export {
  fetchProjects,
  fetchSkills,
  fetchBlogs,
  openDrawer,
  closeDrawer,
};
