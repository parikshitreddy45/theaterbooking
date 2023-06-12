* Book My Show Website:-

//page 1:
>List of cities:
-->http://localhost:9210/cities
>theatres with respect to city:
-->http://localhost:9210/Category?stateId=2
> List of all movies:
-->http://localhost:9210/movies


//page 2:
>Details of particular movie:
-->http://localhost:9210/movies?MovieId=1
>movies with respect to theatre:
-->http://localhost:9210/movies?TheatreId=2
>List of Shows:
-->http://localhost:9210/movieshows

//page 3:
>Details of theatre:
-->http://localhost:9210/details/1
> Shows with respect to movies in a particular theatre:
-->http://localhost:9210/movieshows?MovieId=1

//page 4:
>show of  selected movie(which user is booking):
-->http://localhost:9210/movieshows?ShowId=2
>buy the tickets:
http://localhost:9210/placeOrder  {"name": "parikshit","email": "parikshit@gmail.com","phone": 768768686,"cost": 800,"Seats": ["A3","A4","A5"],"status": "Booked"}

//page 5:
>orders of all booked tickets: 
-->http://localhost:9210/orders
>update  tickets:
-->http://localhost:9210/updateOrder {"_id":"6485ea0f10e255becadee47b","status":"pending"}
>cancel the tickets:
-->http://localhost:9210/deleteOrder  {"_id":"6485ea0f10e255becadee47b"}

