#!/usr/bin/env node

import run from "./run";

function findArg(argArray: string[], argHandle: string) {
  return argArray.filter(arg => arg.includes(`${argHandle}=`))[0];
}

function getArgValue(arg: string) {
  return arg.split("=")[1];
}

function processCliInput(args: string[]) {
  let name = findArg(args, "name");
  let path = findArg(args, "path");

  console.log(name, path)

  if (!name) {
    console.error("Missing name!");
    return;
  }

  if (!path) {
    console.error("Missing path!");
    return;
  }

  name = getArgValue(name);
  path = getArgValue(path);

  if (!name) {
    console.error("Name is the wrong format!");
    return;
  }

  if (!path) {
    console.error("Path is the wrong format!");
    return;
  }

  run(name, path);
}

processCliInput(process.argv);
