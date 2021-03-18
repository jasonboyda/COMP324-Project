# Discriptions of Different pages in the site:

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