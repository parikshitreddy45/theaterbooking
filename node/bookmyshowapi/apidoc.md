* Book My Show Website:-

//page 1:
>List of cities:
-->https://bookmytic.onrender.com/cities
>theatres with respect to city:
-->https://bookmytic.onrender.com/Category?stateId=2
> List of all movies:
-->https://bookmytic.onrender.com/movies


//page 2:
>Details of particular movie:
https://bookmytic.onrender.com/movies?MovieId=1
>movies with respect to theatre:
-->https://bookmytic.onrender.com/movies?TheatreId=2
>List of Shows:
-->https://bookmytic.onrender.com/movieshows

//page 3:
>Details of theatre:
-->https://bookmytic.onrender.com/details/1
> Shows with respect to movies in a particular theatre:
-->https://bookmytic.onrender.com/movieshows?MovieId=1

//page 4:
>show of  selected movie(which user is booking):
-->https://bookmytic.onrender.com/movieshows?ShowId=2
>buy the tickets:
http://localhost:9210/placeOrder  {"name": "parikshit","email": "parikshit@gmail.com","phone": 768768686,"cost": 800,"Seats": ["A3","A4","A5"],"status": "Booked"}

//page 5:
>orders of all booked tickets: 
-->https://bookmytic.onrender.com/orders
>update  tickets:
-->http://localhost:9210/updateOrder {"_id":"6485ea0f10e255becadee47b","status":"pending"}
>cancel the tickets:
-->http://localhost:9210/deleteOrder  {"_id":"6485ea0f10e255becadee47b"}



#add:
//--->http://localhost:9210/Category?MovieId=2
https://bookmytic.onrender.com/Category?MovieId=2

