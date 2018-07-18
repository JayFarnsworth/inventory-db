# inventory-db

DB URL </br>
https://inventorydb.herokuapp.com</br>
</br>
DB Routes:</br>

USERS</br>
GET</br>
/user?name=jay</br>
finds single user based on name</br></br>

GET</br>
/allusers</br>
returns all users</br>
</br>
DELETE</br>
/removeuser?userId=id</br>
removes user matching mongo "_id" field</br>
</br>
POST</br>
/user</br>
adds user object to DB (object must be sent in the req.body)</br>

</br></br>
FACILITIES</br>
GET</br>
/facilities?id=id</br>
finds single facility based on ID number (not mongo _id)</br>
</br>
GET</br>
/allfacilities</br>
returns all facilities in DB</br>
</br>
POST</br>
/facilities</br>
adds facility object to DB (object must be sent in the req.body)</br>
</br></br>

INVENTORY</br>
GET</br>
/inventory</br>
returns all inventory items in DB for all facilities</br>
</br>
GET</br>
/facilityinventory?id=id</br>
returns inventory items for a given facility ID (not mongo _id)</br>
</br>
POST</br>
/inventory</br>
adds item to inventory (object must be sent in the req.body</br>
</br>
DELETE</br>
/inventory?id=id</br>
deletes inventory item based on mongo "_id"</br>




