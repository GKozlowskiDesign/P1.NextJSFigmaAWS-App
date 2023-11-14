# Project NextJS Figma AWS - Part 1
Figma to Next.js with AWS Amplify Deployment

This repository is a demonstration of a modern web application development workflow that leverages Figma for UI/UX design, Next.js as the web framework, and AWS Amplify for easy deployment to the cloud. By following this project, you can learn how to seamlessly transition from design to development and deploy your web applications on AWS.

## Table of Contents
1. Introduction
2. Prerequisites
3. Getting Started
4. Design with Figma
5. Develop with Next.js
6. AWS Amplify Deployment
7. Dependencies
8. Contributing
9. License
## Introduction
The goal of this project is to improve your skills in designing web applications or sites before diving into development. It guides you through the process of transitioning from a Figma design to a functional web application using Next.js and deploying it on AWS Amplify.

## Prerequisites
Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js: https://nodejs.org/
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

## Figma for UI Design
I employ Figma as my primary tool for User Interface (UI) design. Figma allows for a collaborative and iterative design process, enabling me to create visually appealing and user-friendly interfaces. During this phase, I focus on crafting a seamless and intuitive user experience.

## Interface Breakdown
Once the UI design is finalized in Figma, I proceed to break down the overall design into modular components. This involves identifying distinct visual elements and interactive modules that will constitute the UI. Each component is meticulously organized to ensure clarity and reusability.

## Component Mapping
The identified UI components are then mapped to their corresponding React.js counterparts. This involves translating the visual representation in Figma into React.js components, establishing a clear relationship between the design and the code.

## ReactJS Implementation
I leverage React.js for building the dynamic and interactive aspects of the UI. React.js facilitates the creation of reusable components, promoting a modular and maintainable codebase. This ensures that each element of the UI corresponds to a specific React component, enhancing code organization and scalability.

## Styling with Tailwind CSS
For efficient and scalable styling, I integrate Tailwind CSS into the project. Tailwind CSS, with its utility-first approach, enables rapid prototyping and streamlined styling of React components. This framework enhances the development process by providing a comprehensive set of utility classes that can be easily applied to elements.

## Utilizing NPM Libraries
To further enhance functionality and streamline development, I incorporate relevant NPM libraries. These libraries, carefully selected to meet specific project requirements, contribute to the overall efficiency and extensibility of the application.

## Integration with NextJS
To optimize the performance and maintainability of the application, I utilize Next.js as the framework for React.js. Next.js enhances the React.js development experience by providing server-side rendering, automatic code splitting, and simplified routing. This integration further streamlines the development process and enhances the overall performance of the application.

## Testing and Iteration
Throughout the development cycle, I conduct rigorous testing to validate the functionality and responsiveness of the UI components. Feedback from testing is used to iterate on both the design in Figma and the React.js components, ensuring a seamless transition from design to implementation.

<br>
<br>
<br>

**Designed:**
<br>
<img src="https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/32298a76-2c30-457d-ab3f-5ee2572fa01a" width="30%" align="left" />


**Developed:**
<br>
<img src="https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/acbc2d9d-a1e0-4614-b84d-9223acc2064b" width="30%" align="left" />


**Optimized:**
<br>
<img src="https://github.com/GKozlowskiDesign/Project_NextJSFigmaAWS_Part1/assets/82541715/68491db5-ab79-4708-919c-00515d823a77" width="30%" align="center" />

<br>
<br>
<br>
<br>


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

<br>
<br>

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

<br>
<br>

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
