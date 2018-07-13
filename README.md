# inventory-db

DB URL 
https://inventorydb.herokuapp.com

DB Routes:

USERS
GET
/user?name=jay
finds single user based on name

GET
/allusers
returns all users

DELETE
/removeuser?userId=id
removes user matching mongo "_id" field

POST
/user
adds user object to DB (object must be sent in the req.body)


FACILITIES
GET
/facilities?id=id
finds single facility based on ID number (not mongo _id)

GET
/allfacilities
returns all facilities in DB

POST
/facilities
adds facility object to DB (object must be sent in the req.body)


INVENTORY
GET
/inventory
returns all inventory items in DB for all facilities

GET
/facilityinventory?id=id
returns inventory items for a given facility ID (not mongo _id)

POST
/inventory
adds item to inventory (object must be sent in the req.body

DELETE
/inventory?id=id
deletes inventory item based on mongo "_id"




