import gitP, { SimpleGit } from "simple-git/promise";
import constants from "../constants";

const git: SimpleGit = gitP();

async function cloneComponentRepo(componentPath: string) {
  return await git.clone(constants.REPO, componentPath);
}

export default cloneComponentRepo;
