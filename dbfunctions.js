const monk = require('monk')

// Connection URL
const url = 'mongodb://test:test11@ds235461.mlab.com:35461/heroku_s2sn9c54';

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server')
})

const users = db.get('users');
const facilities = db.get('facilities');
const inventory = db.get('inventory');

// user functions
function createUser(user) {
  return users.insert({
    "ID": user.ID,
    "user_name": user.user_name,
    "email": user.email,
    "password": user.password,
    "school": user.school,
    "active": user.active,
    "logged_in": user.logged_in,
    "facilities": user.facilities  
  })
}

function findUser(name) {
  return users.find({
    "name": name
  })
}

function findAllUsers() {
  return users.find()
}

function addSchoolToUser(userId, schoolId) {
  return users.findOneAndUpdate({ ID: userId }, {
    $push: {facilities: schoolId}
  })
}

function deleteUser(id){
  return users.remove({
    "_id": id
  })
}

// facilities functions
function addFacility(facility){
  return facilities.insert({
    "ID": facility.ID,
    "facility_name": facility.facility_name,
    "street_address": facility.street_address,
    "city": facility.city,
    "state": facility.state,
    "zip_code": facility.zip_code
  })
}

function getFacility(facilityId){
  return facilities.find({
    ID: facilityId
  })
}

function getAllFacilities(){
  return facilities.find()
}

// inventory functions
function addItem(item){
  return inventory.insert({
    "ID": item.ID,
    "item_name": item.item_name,
    "image_upload": item.image_upload,
    "image_link": item.image_link,
    "quantity": item.quantity,
    "units": item.units,
    "facility": item.facility_name,
    "facility_ID": item.facility_ID,
    "storage_location": item.storage_location,
    "expiration": item.expiration,
    "email_reminder": item.email_reminder
  })
}
function removeItem(item_id){
  return inventory.remove({ "_id": item_id })
}

function getItemByFacility(facilityId) {
  return inventory.find({
    "facility_ID": facilityId
  })
}

function getAllItems(){
  return inventory.find()
}
// function addItemToFacility(item, facilityId) {
//   return inventory.findOneAndUpdate({ID: facilityId}, {
//     $set: {
//       item: 
//     }
//   })
// }


module.exports = {
  _db: db,
  createUser,
  findUser,
  findAllUsers,
  addSchoolToUser,
  deleteUser,
  addFacility,
  getFacility,
  getAllFacilities,
  addItem,
  getItemByFacility,
  removeItem,
  getAllItems
} 