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

<img src="https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/32298a76-2c30-457d-ab3f-5ee2572fa01a" width="30%" align="left" />



## Develop with Next.js
Next.js is used as the web framework for this project. You can write your React components and add functionality as needed. Customize the project to match your Figma design.


**Finished Product:**
<img src="https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/acbc2d9d-a1e0-4614-b84d-9223acc2064b" width="30%" align="left" />


## Deploy with AWS
This section provides an overview of our Continuous Integration and Continuous Deployment (CI/CD) process, which seamlessly integrates local development using Visual Studio Code (VSCode) with AWS services like AWS CloudFront, AWS Amplify, and AWS S3 to automatically deploy updates to our site as soon as code is pushed to GitHub.

Our CI/CD process is designed to streamline development, testing, and deployment, ensuring that new changes and features are quickly and reliably delivered to our site without manual intervention. 

#### Here's how it works:

**1. Local Development in VSCode:** We use Visual Studio Code (VSCode) as our development environment. Developers create, modify, and test code on their local machines using Git to manage version control.

**2. GitHub Repository:** All our code is hosted on GitHub. After local development and testing, developers push their commits to our GitHub repository. This serves as the central repository for our project.

**3. Continuous Integration (CI) with GitHub Actions:** As soon as a commit is pushed to GitHub, our CI process is triggered by GitHub Actions. These automated workflows build and test the code to ensure its quality and reliability. If the tests pass, the CI process proceeds to the next step.

**4. AWS Amplify for Deployment:** AWS Amplify is used to manage the deployment process. Upon successful CI, Amplify detects the changes in the GitHub repository and automatically starts a new build. It can handle various web application frameworks and languages, making it versatile and easy to use.

**5. AWS CloudFront and AWS S3 for Hosting:** AWS CloudFront and AWS S3 work in tandem to host our site and distribute content globally. CloudFront is a content delivery network (CDN) that ensures low-latency access to our site, while S3 stores the site's assets.

**6. Automatic Deployment:** Amplify deploys the updated code to AWS S3 and CloudFront, ensuring that our site is always up to date. The process is automatic and eliminates the need for manual deployment, saving time and reducing the risk of errors.


#### Our CI/CD process offers several benefits:

**1. Efficiency:** Developers can focus on writing code without worrying about deployment. CI/CD automates the process, saving time and effort.

**2. Reliability:** With automated testing and continuous integration, we maintain a high level of code quality and reliability.

**3. Global Reach:** AWS CloudFront allows us to deliver content globally with low-latency access, providing an excellent user experience.

**4. Scalability:** As our site grows, AWS services can easily scale to accommodate increased traffic and demand.


#### To deploy your web application to AWS Amplify, follow these steps:

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
