# Descriptions of Different pages in the site:

## ABOUT-US PAGE:
This page consists of the following sections:
  - Navbar: allows navigation to other pages of the site.
  - Our Mission Section: Details the mission statement of the team.
  - Our Team Section: Provides a slider interface implemented using javascript
    to view the list of teachers/instructors or other team members along with their email and subject taught.
  - Basic Footer

## LESSON PAGE:
The lessons page consists of two main views:
  - `Lesson Slides`
  - `Browse Lesson Catalog`

When first loading the page, the `Browse Lesson Catalog` view will be loaded. This contains a table of lesson objects which displays some meta information about each lesson (e.g. Lesson Name, Description, Slide Count, Creator, etc.). Each row of the table is a selectable object, which upon clicking, will dynamically change the view to the `Lesson Slides` view. This view now will display the slide deck for the chosen lesson. It also displays the Lesson Name. The slide deck is displayed a single image at a time, with `Previous` and `Next` buttons to control the navigation. Under the navigation bar, there is a selectable section titled `Browse Lesson Catalog` which will return back to the previous view (`Browse Lesson Catalog`).

##### Next Steps
Currently, all data seen in the page is statically typed for demo purposes. This will need to be converted into methods to access data from our chosen datasource. Additonally, more CSS styling for both views are needed. At the moment, most, if not all, of the intended functionality is working, however there may be more elements added to improve user experience. Lastly, the navigation bar will need to be updated to be dynamic and integrated based on whether a user is logged in or not (i.e. display `Profile` vs `Sign In`/`SignUp`).

## SIGN-UP PAGE:
The sign up page consists of the following:
- Navbar: allows navigation through the pages of the site
- User Profile Creation form: takes input from the user to create their profile

The user fills out the form, which asks for their name, age, experience level with English, areas of interest for their lessons, and their email. The form also asks the user to create a username and passsword. When the user clicks the Sign Up button their information is then saved.

### SIGN IN PAGE:
  The Sign in page inlcludes a similar theme to the one that we've been using through the entire project, such as color and font/font size. The user is greeted with 2 input text boxes for the user to put their username and password. There is also a "Forgot your password?" function, which will (in the future) link to the database and allow the page to store user infortmation. 
  
### NEXT STEPS 
In terms of next steps, we need to create a database, such as MongoDB. This will store the user credentials and dimensions in a dimensional model, allowing the site to pull and store information.
  
##### Future Improvements
Currently the user information does get saved to a JavaScript file, but as we are not sure how we will be saving the data yet it is not in use. Additionally, the user must be redirected to the home page after they sign up and this functionality has yet to be added.

## USER PROFILE PAGE:
This page displays the user's profile information, which is input on the sign up page, including their name, email, username, and experience level with English.
##### Future Improvements:
Currently the provided information is just added as text, but I would like the user profile page to be populated with the data that the user inputs when they fill out the sign up form. An additional feature that shows the user's lesson history may be added.

## HOME/INDEX PAGE:
This page will serve as the landing page and central location for users while on the site. So far I have focused my efforts on the design of the page and playing around with CSS/HTML primarily to get my vision onto the webpage.
##### Future Improvements:
My next steps are to wrap up the last remaining design element, discuss with the team on what we want the text to actually include, and then work on the data side of the webpage (Distinguishing between a signed in user and a signed out user, updating Nav bar to reflect that, etc.)

## SCHEDULE PAGE:
This page has a calendar that shows the current date (month, day, and year). The current date is prominently displayed and highlighted on the calendar. Hovering over other days will produce a border around them. There are also arrows in the calendar head that can be clicked to show previous and future months in 2021. The page also has a nav bar which can be used to navigate to the other pages of the website.
##### Future Improvements:
I plan to continue working on the design of the calendar. It will be bigger and sizing will be adjusted dynamically as the window size changes. When a user clicks on a day, pop-ups need to be added in order for the user to first see the teacher's availability and then reserve a slot. There will also need to be a way to keep track of the slots booked so that they can be marked on the calendar and updated when a booking is made/cancelled.
