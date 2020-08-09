# toy_project_nodeJs
server side project in node.js
API ENDPOINTS
Below are described the REST endpoints available that you can use to search in the API

GET method:

ALL-https://revital-toys.herokuapp.com/toys- wiil show you all the toys in the database
?page-will show you products per page, in each page the default limit is 5 toys- https://revital-toys.herokuapp.com/toys/?page=1

CATEGORY-https://revital-toys.herokuapp.com/toys/cat/{category name} - will serch toys by category
for example:https://revital-toys.herokuapp.com/toys/cat/Dolls
?page-will show you products per page, in each page the default limit is 5 toys- https://revital-toys.herokuapp.com/toys/cat/Dolls/?page=0

SEARCH-https://revital-toys.herokuapp.com/toys/search/?s={toy's name or toy's category)-will show a toy with specified name or toys in specified category
for example:https://revital-toys.herokuapp.com/toys/search/?s=Albus

PRICES-https://revital-toys.herokuapp.com/toys/prices/?min={price}&max={price} - will show you toys between range of prices, when min and max is chosen by user.
for example: https://revital-toys.herokuapp.com/toys/prices/?min=20&max=50
?page-will show you products per page, in each page the default limit is 5 toys-https://revital-toys.herokuapp.com/toys/prices/?page=0&min=20&max=50

POST method:

ADD- to add a toy: https://revital-toys.herokuapp.com/toys/add
for example:
{
    "name":"Seaside Haven",
    "info":"This 1000 piece puzzle features a Thomas Kinkade painting of a white church with a tall steeple on the shore with waves crashing against the rocks.",
    "category":"Puzzles",
    "img_url":"https://cdn-o.fishpond.com/0173/307/808/542837739/original.jpeg",
    "price":51.69

}

EDIT- to edit a toy: https://revital-toys.herokuapp.com/toys/edit
need to add _id parameter.
for example:
{
    "_id":"5f2ec61f47e03423d4a5096d",
    "name":"Seaside Haven Puzzle",
    "info":"This 1000 piece puzzle features a Thomas Kinkade painting of a white church with a tall steeple on the shore with waves crashing against the rocks.",
    "category":"Puzzles",
    "img_url":"https://cdn-o.fishpond.com/0173/307/808/542837739/original.jpeg",
    "price":51.69


DELETE- to delete a toy: https://revital-toys.herokuapp.com/toys/del - del:{toy's id}
for example:
{
    "del":"5f2ec61f47e03423d4a5096d"
}

