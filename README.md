# React Component Generator

This is an attempt to clean up one of my internal tools that I use regularly for all kinds of work. It is a work in progress and evolving all the time but the general idea is to help maintain a standard when creating React components. Consistancy is super important and this is my attempt to codify some of the rules I have naturally fallen into over the years. 

Until I extend this package to work with different repos for more diverse component setups the outputted files will look like this:

```
  After running react-component-generator name="Button" path="./src/components/atoms"

  src/
    components/
      atoms/
        Button/
          index.ts <-- exports component
          Button.component.tsx. <-- component code here
          Button.styles.tsx. <-- component styles here
          Button.stories.tsx. <-- component storybook
          Button.spec.tsx. <-- component tests
        ...
      ...
    ...

```

## Install


Add this to your projects .npmrc. If you dont have one just make one and add this line ...

```
@jonjoe:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=628ac9addc29f10fc27fcadfe545f058954e734
```

Then install the package ...
```
npm install @jonjoe/module-generator
```


## Usage

#### Lv 1 Mafia

After installing you can just use the cli. Running the command will generate a react componet with soime boilerplace files.

```
react-component-generator name="Button" path="./src/components/atoms"

```

#### Lv 99 Mafia

if you wanna be super fancy you could use this from within your project or globally. I personally use this within my own projects. For example in my package.json I will have something like:

```
...
  "scripts": {
    ...
      "generate:atom": "react-component-generator path='./src/components/atoms'",
      "generate:molecule": "react-component-generator path='./src/components/molecules'",
      "generate:organism": "react-component-generator path='./src/components/organisms'",
      "generate:template": "react-component-generator path='./src/components/templates'",
      "generate:layout": "react-component-generator path='./src/components/layouts'"
    ...
  }
...
```

## Note-worthy Notes

- React boilerplate code is generated from this repo https://github.com/Jonjoe/react-base-functional-component. If you want to make any suggestions on changes to this please go there.

## Todo

- Auto import and export from component root folder manifest
- Add optional parameters to pick a different repo to clone from
- Moar feedback!
