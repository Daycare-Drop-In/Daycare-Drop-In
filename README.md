![Repo Size](https://img.shields.io/github/languages/code-size/TheAnimalConnection/star-pet.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/TheAnimalConnection/star-pet.svg?style=for-the-badge)

# Daycare Drop-in

# Developers
- [Anna Sutheim](https://github.com/ASutheim)
- [Dave Nash](https://github.com/davidjnash2)
- [Ismail Ali](https://github.com/Ishali027)
- [Zackaria Antar](https://github.com/ZackariaAntar)

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Description

Daycare Drop-in is a mobile-first app that allows families in need of last-minute care for their children to connect with the childcare providers in their neighborhood who have spaces ready and waiting. In-home daycare owners are able to stabilize their income by making those temporary spaces available, a level of flexibility that is often only available at large chain childcare centers. With this app, families and providers are able to construct simple but informative profiles which handle most of the necessary information exchange. Families can also use the filtered search function to look for care by date, location, age group availability, and specific daycare name. 

Daycare Drop-In was conceived by daycare owner/operator Tessi Russell, and built in a two week sprint by Ismail Ali, Zackaria Antar,  David Nash, and Anna Sutheim as a capstone project for their studies at Prime Digital Academy’s fullstack developer program.




## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://www.figma.com/?fuid="><img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
<a href="https://aws.amazon.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" height="40px" width="40px" /></a>

## Getting Started
This project should be able to run in your favorite IDE. We used VS code while building it. 

## Prerequisites

Before cloning Daycare Drop-in, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Postico 2](https://eggerapps.at/postico2/)

Additionally, you will need to get a few AWS S3 Buckets Keys for your `.env` file.

## AWS S3 Bucket Setup

1. To manage your AWS settings online, access the AWS Management Console in the My Account tab on https://aws.amazon.com/
2. Please update this account’s location (us-east-2 for Minnesota).
3. Setting up an account will require you to add payment information prior to being able to create an S3 Bucket to store uploaded files.  
4. Once you have added payment information to your AWS account, you can follow the beginning of [this tutorial](https://medium.com/@khelif96/uploading-files-from-a-react-app-to-aws-s3-the-right-way-541dd6be689) for how to set up an S3 Bucket on your account.  Disregard anything after “Back End” — this has been provided for you already.
5. When setting up your account, be sure to record the AWSAccessKeyId, AWSSecretKey, the default region, and the name of your Bucket. This information should be held securely as it is what will allow your app to access your AWS S3 storage bucket. The keys will look like:
- Access key ID example: AKIAIOSFODNN7EXAMPLE
- Secret key example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
6. You will also need to update permissions on your S3 Bucket.  From the same place you accessed your CORS settings in the tutorial above, you will need to select BLOCK PUBLIC ACCESS and turn off any settings that are blocking public access.  No boxes on this page should be checked with how the app is currently set up.

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
7.  Create a `.env` file at the root of the project and paste these lines into the file:
```
SERVER_SESSION_SECRET=superDuperSecret
AWS_ACCESS_KEY_ID=AccessKeyId
AWS_SECRET_ACCESS_KEY=SecretAccessKey
AWS_DEFAULT_REGION=DefaultBucketRegion
AWS_BUCKET=BucketName
```
While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). 
If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning. Additionally, replace `AccessKeyId`, `SecretAccessKey`, `DefaultBucketRegion`, and `BucketName` with the corresponding information generated when setting up your S3 Bucket.

8. Create a database named `daycare_dropin` in PostgresSQL
If you would like to name your database something else, you will need to change `daycare_dropin` to the name of your new database name in the component/file `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. If this is going to production, leave out the dummy data.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.
