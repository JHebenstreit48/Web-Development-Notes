## React and TypeScript Basics
<br>

### tsconfig.json, tsconfig.node.json, and tsconfig.app.json
---
<br>

- The tsconfig.json file is the main configuration file for TypeScript projects.
  - It defines TypeScript options, such as compiler settings and file inclusions/exclusions.
- The tsconfig.node.json file is used to set the configuration rules for Node.js-specific portions of your project.
- The tsconfig.app.json file can be used to define settings specific to the client-side application or app portions of a project, allowing you to separate concerns.

<br>

### Declaring Types in .d.ts Files
---
<br>

- A .d.ts file is a TypeScript declaration file used to define type information for a project or module.
- It is best practice to declare types in .d.ts files to ensure consistency and reusability across your project.
- If you add the declare keyword before a type in a .d.ts file, it disables the ability to redeclare or augment the type.

<br>

### Types vs. Interfaces
---
<br>

- Use types by default when working with TypeScript in React projects.
- Use interfaces only when you need features not available with types, such as:
  - Extending or merging interfaces.
  - Working with objects that inherit from each other.
- Interfaces cannot express unions, mapped types, or conditional types.
- Types are better suited for more complex use cases, such as defining unions or aliases.

<br>

---

## React Functional Components
---

<br>

### What is a React Functional Component?
---
<br>

- A React Functional Component is a JavaScript or TypeScript function that takes in props and returns JSX (UI elements).
- Functional components are simpler and more lightweight than class components, making them a popular choice for modern React development.

<br>

### Using TypeScript with Functional Components
---
<br>

#### Why Use TypeScript?
- TypeScript enhances React Functional Components by allowing type annotations for props.
- This ensures components receive the correct data structure, improving reliability and reducing runtime errors.

#### Example Use Case
- Define and enforce specific types for props to prevent bugs during development.

<br>

---

## Generics in Functional Components
---

<br>

### Benefits of Generics
---
<br>

- Generics allow functional components to work with various data types while maintaining type safety.
- They enable the creation of flexible, reusable components that adapt to different use cases.

### Best Practices
---
<br>

- Use generics sparingly and only when your component's flexibility requires it.

<br>

---

### TypeScript Generics in React
---
<br>

- Generics in React enable you to create reusable components.
- Generics allow you to define components that are flexible enough to work with various data types while still maintaining type safety.

<br>

### Type Intersection
---
<br>

- An intersection is used with types to combine multiple types into one.
- This allows you to add together existing types into a single type that has all of the features you need.

<br>

### Merging Interfaces
---
<br>

#### How it Works
- In TypeScript, interfaces with the same name declared in the same scope automatically merge their declarations.

#### Example
- If two interfaces share the same name, their properties are combined.

<br>

### Index Signatures
---
<br>

- Index signatures are used when you know the key and value types of an object.

<br>

### Linting in TypeScript Projects
---
<br>

- A linter helps catch potential bugs, bad practices, and enforces code style conventions.
- It improves overall code quality, streamlines the development process, and boosts efficiency.

<br>

---