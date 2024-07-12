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