import { createProject, findProject } from './project.service';

export const create = async (req, res, next) => {
  try {
    const response = await createProject(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const findAll = async (req, res, next) => {
  const projects = await findProject({});
  res.status(200).json(projects);
};
