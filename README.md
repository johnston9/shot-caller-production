<h1 align="center"><strong>Shot Caller Production</strong></h1>

[View the project live here.](https://)

A web application for film, TV and video production.<br>

Essentially it site consists of two elements. One to introduce the user to the products, give them clear information about them and to encourage them to create an account and purchase products. The second contains the user's account and allows them to purchase products and find their already purchased ones easily.
<br>

<h2 align="center"><img src="documentation/readme-images/home6.png" width="90%"></h2>

# Table of Content

## User Experience (UX)

The business goals are to establish the app as a professional film production software platform, to create an online presence and establish it as a brand. It's primary purpose is to entice new customer to register and purchase products and secure regular returning customers. It aims to initially create curiosity with the user to encourage them to explore the features then inspire trust and build a customer base.

For the user, the initial goal of the site is to find out about the software and register an account easily. Then to create projects by purchasing them. Ongoing they will find all their projects in their account page.

Ther Home page contains a brief overview of the software's abilities by section, i.e. the different aspects of fim production that it facilitates. Each section when clicked on opens a page detailing and explaining that section with images.

### Strategy Plane

The aim of the site is to introduce Shot Caller to it's potential customers.

It aims to create a brand to establish an image in the public eye for the platform, to show its quality and professionalism. Its elegant bright sophisticated but simple design aims to encourage users to explore it. It's clear navigation and easily understood sections encourage customers to explore it's features fully, create an account and to purchase it's products.

#### Brand Identity
- Brand promise: The most complete film production software on the market.
- Vision: Professional Creativity.
- Mission: To combine the creative and production sides of filmmaking in one all encompasing 
  platform.
- Values: Professional, Creative and Easy to Use.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### Scope Plane

The features included in the app at present reflect choices made around the following reflections.
<br>

What is absolutely necessary for the app to deliver its basic marketed functionality?<br>  

What is the most enticing user friendly way of doing building these?<br>

What types of design would further these and become great user experience in themselves?<br>

Which proposed features are buildable?<br>

What features are necessary to make the products sellable?<br>

[Back to Table of Content](#table-of-content)

### Structure Plane

The site is structured so the user can navigate in an intuitive way through the different features of the products, all pages keeping a uniformed consistency.<br>

The user is taken on a journey into the site, all elements being discoverable as they proceed along. From finding out about the two products, the "All in one Production Platform" and the "Budgeting Software", available to creating an account. The site aims to, through its easy to navigate structure, build a relationship with the user.<br>

The information architecture is a tree structure allowing users to move through content quickly and simply becoming aware of the site’s inherent structure as they go. 

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### Skeleton Plane

The interface is aesthetically functionally all the time creating a positive reaction in the user with every click, making the user feel both at home here and part of an interesting journey. Details of this are found in the Design section.

[Back to Table of Content](#table-of-content)

### User stories

 - #### First Time User Goals

1. As a First Time User, I want to learn what the site has to offer and how to use the site quickly.
2. As a First Time User, I want to view information on the different features of the software.
3. As a First Time User, I want to register an account easily.

 - #### Returning User Goals

1. As a Returning User, I want to easily login and logout.
2. As a Returning User, I want to view or update my profile.
3. As a Returning User, I want to see what people are saying about the app and know if it is professional and trustworthy.
4. As a Returning User, I want purchase products easily.

  - #### Frequent User Goals

1. As a Frequent User, I want to view my purchased products and projects.
2. As a Frequent User, I want to easily recover my password if I forget it.
3. As a Frequent User, I want to view my order history and payment details.

  - #### Owner/Admin User Goals ????????????????????????????????????????

1. As the Owner/Admin User I want to upload new products.
2. As the Owner/Admin User I want to edit product details.
3. As the Owner/Admin User I want to edit product prices.
4. As the Owner/Admin User I want to edit images.
5. As the Owner/Admin User I want to delete images and products.
6. As the Owner/Admin User I want to upload new recipes.
7. As the Owner/Admin User I want to edit recipes.
8. As the Owner/Admin User I want to post or respond on chat to users questions.
9. As the Owner/Admin User I want control over material posted on the site for legal and other purposes.

[Back to Table of Content](#table-of-content)

## Design

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### Landing page
 - The landing page image is intended to inform the user of the site purpose and encourage them to explore it. It containd links to all the site explainatory pages and ....

 - The logo....

### Colour Scheme
 - The site aims to be professional...

  
### Typography ?????????????
 - Playfair Display, a serif non-formal friendly font was used as the main font for the site. It has a sophisticated slightly old fashioned classy feel. Lato was used alongside it for more matter of fact details. And Playball, a very stylish, flamboyant romantic feeling font was used for the main titles and in some other places to give the shop a classy romantic feel.


### Imagery
 - Images of the actual software were used to show the user how the software looks and how it works.

### Wireframes

 - PDF – Balsamic was used to design the layout for all pages.

   [View on Github](https://github.com/johnston9/la-donut)

[Back to Table of Content](#table-of-content)

## Existing Features

### Responsive Design

- The site is responsive to all sizes and the images remain whole and in proportion at all sizes. 

<p align="center"> <strong>Large Screen</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

<p align="center"> <strong>Small Screen 320px</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

[Back to Table of Content](#table-of-content)

### Login/Register/Logout Pages and Security

  The user can browse and view the features on the site but they are encouraged to create an account. They can do this or login or logout easily from My Account in the navbar. There are also a number of other links to register, one being on the Home page, and on doing so the user is brought to the Register page which has a personal easy to use feel.<br>
  
  Django Rest Frameworks is used for the backend and has its own register and login features. These include it's inbuilt security measures concerning for regeristerings and logging in and out. it also deals with all other issues like changing and forgetting passwords.<br>
  See [Django Rest Frameworks](documentation/drf) for all Django Rest Frameworks images and testing images.

  The site has a number of other security measures firstly the use of front end measures to prevent unauthorised users form accessing pages they do not have permisssion to, mainly other users's account pages. Then in the DRF backend the views have also a security check to do the same.

[Back to Table of Content](#table-of-content)

### The Home Page

  This page is intended to primarily sell the product and is divided in three sections. Fisrt the landing page image which has links to the different information pages and a register link. Secondly a bullet point section giving an overview of the app. The last section has a brief summary of the Creative, Production and Budgeting features and when clicked on takes the user to that feature's information page.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### The Creative, Production and Budgeting features explanatory pages

  When clicked on in the nav bar, the Home page image or the Home page section the page for that feature opens. It gives a brief concise overview of that feature along with image from the actual software.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### The Account page

  When clicked on in the nav bar the user's Account page opens. It will show all the user's projects and have a section where they create and purchase new projects.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### The Chat page

  This allows users to add and view chats. It also has a link to the profiles page which contains all existing users and the ability for the user to to follow them. In doing so the user will create their feed of posts from their followed users.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

### Stripe

  Stripe is used for the payment system.

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

[Back to Table of Content](#table-of-content)

## Future Features

### Social Account Login
This function allows users to sign up and log in using an existing third party account such as Google and Facebook. This would make encouraging users to sign up easier as they are just a click away and don't have to do any more. For the site owners apart from having more users sregister this opens up huge areas in terms of information and marketing.

## Information Architecture ????????????????????????????

- Development 
**SQLite3** was used during development and comes with Django Rest Frameworks. 

- Deployment 
**Postgres** is used for deployment, and was added as an add-on with Heroku.

### Database structure - Model Tables by App

#### Django contrib auth
1 - <strong>User</strong> - to hold the authenticated users.<br>
  - OneToOne Key to Profile

#### Accounts App
1 - <strong>Account</strong> - to hold the user's account details.<br>

2 - <strong>Project</strong> - to hold the user's Projects.
  - Foreign Key to User. 

#### Budget App
1 - <strong>Budget</strong> - to hold the Project's Budget information<br>

#### Profiles App
1 - <strong>UserProfile</strong> - to hold the registered users details.<br>
  - OneToOne Key to User

#### Chat App
1 - <strong>Chat</strong> - to hold the Chats.<br>
  - Foreign Key to User

#### Comments App
1 - <strong>Comment</strong> - to hold the Chat's Comments.<br>
  - Foreign Key to User
  - Foreign Key to Chat

#### Profiles App
1 - <strong>Profile</strong> - to hold the user's profile details.<br>
  - OneToOne Key to User

#### Followers App
1 - <strong>Follower</strong> - to hold the Profile's Followers.<br>
  - Foreign Key to User (as owner, who is following)
  - Foreign Key to User (as followed, who is followed)

#### Likes App
1 - <strong>Like</strong> - to hold the Profile's Followers.<br>
  - Foreign Key to User 
  - Foreign Key to Chat

<p align="center"><strong>Entity Relationship Diagram</strong></p>

<h2 align="center">
<img src="documentation/readme-images/home6.png" width="100%">
</h2>

[Back to Table of Content](#table-of-content)

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
- [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language))
- [djangotemplatelanguage](
  https://docs.djangoproject.com/en/3.2reftemplateslanguage/)

## Frameworks, Databases, Libraries & Programs Used ?????????????????????????????????

- [React Bootstrap:](https://react-bootstrap.netlify.app/)
   - React Bootstrap with it's grid-based format was used to create the overall framework for the site. This included the primary responsiveness.
     and overall styling of the website. Also specific 
     Bootstrap features, which include the "Selectpicker", 
     the "Navbar", and "DataTables" were used in the site.
- [React:](//https://react.dev/)
   - React , the JavaScript library, was used to build the app's Front End User User Iterface.
- [Django Rest Frameworks:](https://www.django-rest-framework.org/)
   - Django Rest Frameworks the high-level Python Web framework was used to build the app's Backend.
- [SQLite3:](https://www.sqlite.org/index.html)
   - SQLight came with Django and was used as the database for development.
- [Postgres:](https://www.heroku.com/postgres) ?????????????????????????
   - Postgres was added with Heroku and was used as the database for production.
- [AWS S3:](https://aws.amazon.com/) ????????????????????????????
   - AWS was used to hold the static and media files.
- [Cloudinary:](https://cloudinary.com/)
   - Cloudinary was used to hold the media files.
- [Axios](https://axios-http.com/docs/intro)
   - Axios was used to make all the XMLHttpRequests.
- [jwt-decode](https://github.com/auth0/jwt-decode)
   - jwt-decode was used to decode the JSONweb tokens.
- [Stripe](https://stripe.com/en-ie)
   - Stripe was used to handle the payments.
- [PIP3](https://pip.pypa.io/en/stable/installing/)
   - PIP3 was used to install everything.
- [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used throughout the website for the icons.
- [Google Fonts](https://fonts.google.com/)
   - Google Fonts was used throughout the website for the fonts.
- [Git](https://git-scm.com/)
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
- [Balsamiq:](https://balsamiq.com/)
   - Balsamiq was used to create the [wireframes](https://github.com/johnston9/MS3-Shot-Caller) during the design process.
- [Freeformatter](https://www.freeformatter.com/html-formatter.html)
   - Freeformatter was used to tidy up the final code.
- [Gauger](https://gauger.io/fonticon/)
   - Gauger was used to create the favicon icon.
- [Am-I-Responsive](http://ami.responsivedesign.is/):
   - Am I Responsive was used to test the site's responsive sizings and to generate responsive sizing images.
- [GitHub Wiki TOC generator:](http://ecotrust-canada.github.io/markdown-toc/)
   - GitHub Wiki TOC generator was used to create the Table of Contents.
- [dbdiagram.io](https://dbdiagram.io/home)
   - dbdiagram.io was used to create the Entity-Relationship Diagram.
- [Gmail](https://www.google.com/gmail/)
   - Gmail was used for the email backend.

A number of imports were used in Django Rest Frameworks and an inventory of these can be found in the Deployment section.

[Back to Table of Content](#table-of-content)

## Testing
All functionality was tested as it was being built to ensure there were no errors, that it did what it was meant to do and that all database errors were handled correctly. 

On completion the functionality of the entire app was repeatedly tested on various devices both by the development team and by Capital Numbers, the infotech company responsible for some of the high level configuration work.

Pylint was also used in the backend workspace as the project was being built for Python and Django code and all errors were fixed on an ongoing process. 

Where necessary some functionality was tested in Further Testing. All pages were checked in Lighthouse. All errors were documented and fixed.

W3C Markup Validator, W3C CSS Validator, PEP8 and JSHint were used to validate all HTML, CSS, Python and JS in the project, the results are in documentation.

- [W3C Markup Validator](https://validator.w3.org/)   ?????????????????????????
  - On validated by URL no errors were shown - Info messages were given for the trailing slash in the link and meta tags in index.html but were left in anyhow.
  [Result](documentation/testing/w3c-html.png)

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 
  - W3C CSS Validator gave no errors.
  [Results](documentation/testing/w3c-css.png)

- [JSHint](https://jshint.com/) 
  - JSHint was used with "New JavaScript features (ES6)" checked in the configuration menu.
  [Results](documentation/testing/jshint)
    
- [PythonChecker](https://www.pythonchecker.com/) 
  - PythonChecker approved all DRF python pages apart from a few too long lines in the setting.py which I decided to leave. 
  [Results](documentation/testing/)


[Back to Table of Content](#table-of-content)

## Testing User Stories from User Experience (UX) 

### First Time User Goals

1. #### As a First Time User, I want to learn what the site has to offer and how to navigate the site quickly.

    - The Landing/Home page is split into three sections. The first informs the user as to the nature of the site and what it offers immediatly through the image and text used. The text saying offers both an "All in One" Film, TV and Video Production Software platform and the Budgeting Software as a individual product.<br>
    It then lists the software's features headed under the Creative and the Production side. These can be clicked on to take the user quickly to the information page for that feature.<br>
    The second section gives a brief easy to understand overview of what the sortware does and what it can be used for.<br>
    The site is designed for first time learning. It is streamlined for specific user goal that upon first use the user with a clicks will be able to find all information about the software's features. At the top of every page the navbar displays all options for the user so they can select their desired destination quickly.

<p align="center"><strong>Landing Page and navbar</strong></p>   
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

2. #### As a First Time User, I want to view information on the different features of the software.

    - The third section of the home page gives a brief summary of the above mentioned features and when again clicked on, as with the links in the image, take the user to that feature's information page. These pages give a clear easy to understand explanation of the feature with actual images of the software. Links to these pages can again be found in the navbar.

<p align="center"><strong>Feature's Information Page</strong></p>   
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

<p align="center"><strong></strong></p>   
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

3. #### As a First Time User, I want to register an account easily.

    - The user will be given the option to Register immediatly by a link at the bottom of the landing page image and anytime in the My Account nav link. On clicking they will be taken to the Register Page and only have to enter a username and password to sign up. The Registration page is designed to be friendly and completly uncomplicated for greater user experience.<br>

<p align="center"><strong>Register page</strong></p>   
<h2 align="center">
<img src="documentation/readme-images/hone6.png" width="90%">
</h2>

<p align="center"><strong>Register page - Mobile view</strong></p>   
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="25%">
</h2>

[Back to Table of Content](#table-of-content)

1. As a Returning User, I want to easily login and logout.
2. As a Returning User, I want to view or update my profile.
3. As a Returning User, I want to see what people are saying about the app and know if it is professional and trustworthy.
4. As a Returning User, I want purchase products easily.

### Returning User Goals

1. #### As a Returning User, I want to easily login and logout.

    - The user can login and logout easily from the My Account nav link. The login takes them to Sign In page and the logout is automatic. <br>
    The site also includes a feature that keeps a user signed in for 24 hours so they don't have to go to the trouble of signing in if they are using it regularly. This is achieved by a check function it the utils folder for the token timestamp that is sent to the user when they sign in and lasts 24 hours.

<p align="center"><strong>xxxxxxx</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

<p align="center"><strong>Logout - Mobile View</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="25%">
</h2>

2. #### As a Returning User, I want to view or update my profile.

    - On clicking on the profile nav link in My Account the user is taken to their Profile Page where they can update their Primary Delivery Address and receive a success message on doing so. This info is preset as the Delivery address when they checkout.

<p align="center"><strong>xxxxxxx</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

[Back to Table of Content](#table-of-content)

3. #### As a Returning User, I want to see products ratings and reviews.

    - The product average customer rating is displayed for each item on the shop and view item pages. On the view item page the user will see a link to the item's reviews and another link to add a review if the user is authenticated or sign up to add a review if not. On the add review page the user can rate the product and this is displayed in stars on their review and also used to calculate the average rating. A customised Bootstrap paginated table is used to hold the reviews which includes a search function which I figured out from the Bootstrap4 docs. [DataTables](https://datatables.net/examples/styling/bootstrap4)

<p align="center"><strong>xxxxxx</strong></p>
<h2 align="center">
<img src="documentation/readme-images/home6.png" width="90%">
</h2>

[Back to Table of Content](#table-of-content)