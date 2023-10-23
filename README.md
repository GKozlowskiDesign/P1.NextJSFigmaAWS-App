# Project NextJS Figma AWS - Part 1
Figma to Next.js with AWS Amplify Deployment

This repository is a demonstration of a modern web application development workflow that leverages Figma for UI/UX design, Next.js as the web framework, and AWS Amplify for easy deployment to the cloud. By following this project, you can learn how to seamlessly transition from design to development and deploy your web applications on AWS.

## Table of Contents
Introduction
Prerequisites
Getting Started
Design with Figma
Develop with Next.js
AWS Amplify Deployment
Dependencies
Contributing
License
## Introduction
The goal of this project is to improve your skills in designing web applications or sites before diving into development. It guides you through the process of transitioning from a Figma design to a functional web application using Next.js and deploying it on AWS Amplify.

## Prerequisites
Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js: https://nodejs.org/
- Yarn: https://yarnpkg.com/
- Figma Account: https://www.figma.com/
- AWS Amplify CLI: https://docs.amplify.aws/cli/start/install
  
## Getting Started
Clone this repository to your local machine:

```
git clone https://github.com/yourusername/your-repo.git
Change directory to the project folder:
```

```
cd your-repo
Install the project dependencies:
```

```
npm install
Start the development server:
```
```
npm run dev
Your Next.js web application should now be accessible at http://localhost:3000.
```
## Design with Figma
Use Figma to create your UI/UX design. This project provides a smooth transition from Figma designs to actual development. Import your Figma designs as needed.
![Screen Shot 2023-10-22 at 2 45 14 PM](https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/b1666d0e-aefa-44f2-b563-1b5bd86358e7)

## Develop with Next.js
Next.js is used as the web framework for this project. You can write your React components and add functionality as needed. Customize the project to match your Figma design.


## AWS Amplify Deployment
To deploy your web application to AWS Amplify, follow these steps:

Configure your AWS Amplify environment:
```
amplify configure
```

Initialize your Amplify app:

```
amplify init
```

Add your application code to the Git repository associated with your Amplify app.

Deploy your application:
```
amplify publish
```

Your web application will be deployed to AWS using S3 and CloudFront, and the URL will be provided in the Amplify console.

## Dependencies
- Next.js: The core framework for building the web application.
- React: JavaScript library for building user interfaces.
- React DOM: React package for working with the DOM.
- React Icons: Provides popular icons as React components.
- Styled Components: CSS-in-JS library for styling components.

```
JSON
"dependencies": {
  "next": "13.5.6",
  "react": "^18",
  "react-dom": "^18",
  "react-icons": "^4.11.0",
  "styled-components": "^6.1.0"
}
```
## Contributing
Feel free to contribute to this project by opening issues, providing suggestions, or making pull requests. We welcome and appreciate your contributions!

## License
This project is licensed under the MIT License - see the LICENSE file for details.
