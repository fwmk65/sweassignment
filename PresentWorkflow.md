We divide the DRI map project into three parts to realize it, the server, the user object client, and the administrator object client.

The functions that need to be implemented on the user object client are:
1. Access the map (GET)
2. Via artificial intelligence dialogue / user typing search (POST sent), display the user's needs on the map
Route data (returned by POST)
3. Provide administrator login interface

The functions that need to be implemented on the administrator object client are:
1. Modify the purpose and function of the designated room
2. Keep a record of the original use of the modified room
3. Provide recommended room uses and functions
4. Check whether there is a conflict between the use of the room
5. Provide a method to restore the room to its original purpose
6. Provide a method to change the administrator account information

On the server side:
1. Corresponding client requirements (return the map data required by the GET method, accept the voice transfer value of the POST method and recognize it as text, accept the text search of the post method, calculate the shortest route according to the search content, and return the post route data)
2. Record each modification event personnel and archive log
3. Update the map data after modifying the map data provided by the administrator
