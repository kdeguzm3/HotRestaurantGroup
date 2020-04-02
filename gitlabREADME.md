# HotRestaurant

* Description: Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://hot-restaurant-fsf.herokuapp.com/>

![Hot Restaurant Image](Images/HotRestaurant.png)

## Notes

* You will NOT need a MySQL Database for this exercise.
* Current app doesn't have admin handling. We'll deal with that at a later time.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Don't use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).

## Suggestions

### Break work into phases

#### Phase I: 
   Backend team creates a basic Express server.
   Front end team works on the three html files (20 mins)

#### Phase II: 
   Backend team works on API Routing (create objects to hold table & waitlist; create routes to get/put data)
   Front end team works with backend team to coordinate the routes to the web pages they will be serving

#### Phase III:
    Backend team creates the logic to handle reservation requests. Use Postman for testing.
    Front end team researches how ajax calls work to do GET & POST requestes.
    Then create code in tables.html to retrieve data from backend via GET
    Then create code in reserve.html to send data to the backend via POST

#### Phase IV:
    Run and debug your app.

### Team Structure
* Form a team to work on the backend, Express server side
* Form a team to work on the frontend, Bootstrap client side

### Project Management

#### All approaches
* Designate someone in the group to create a HotRestaurantsApp repository on GitHub. 
  This person will serve as "Benevolent GitHub Dictator," or "BGD."

#### Distributed coding approach (Bonus)

* After creating the repo, BGD should add all team members as collaborators.
* Team members should then log in to their email and accept the request to collaborate.
* Each team member should pull the repository & create their own working branch.
* Once you finish a chunk of work, push it to your GitHub repo & request a merge.
* BGD should merge as quickly as possible.
* Each team member should do a `git pull` & `git merge master` when master branch changes

#### Copy and Paste approach
* Designate someone in the group to be "Begrudging Super Scrivener," or "BSS."
* BGD will invite BSS to be a collabotor in GitHub.
* BSS will be the group's typist & copier, and will work on their own branch, not master.
* Each team member will use Zoom's attach file to send their work to BSS.
* BSS will copy and paste code as needed.
* BSS will push their branch to the repo after chunks of code are functional.
* BGD will merge BSS's branch to master.
* BSS will do a `git pull` and a `git merge master` when master branch changes.

## Resources
* [Use ExpressJs to Get URL and Post Parameters](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)
* [Build a RESTful API Using Node and Express](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
* [Working Hot Restaurant App on Heroku](http://hot-restaurant.herokuapp.com/)
* 11-Express/01-Activities/14-FinalStarwarsApp

## Good luck! Don't stress out

* Spend some time trying to build exposure. But don't get overwhelmed. We'll have plenty of time to come back to this.
