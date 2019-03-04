var container = document.getElementById("container");

const functions = {
  randomizer: (num) => Math.floor((Math.random() * num) + 1)
}

// function Randomizer(num){
//   var result = ;
//   return result;
// }

function Sort(a, b) {
    return a - b;
}

function Resource(num){
  this.isBusy = false;
}

function User(num){
  this.resourceList = [];
  this.durationList = [];
  this.isFree = false;

  this.userResources = function(resource){
    for(var i = 0; i < this.resourceList.length; i++){
      if(resource === this.resourceList[i]){
        return false;
      }
    }
    this.resourceList.push(resource);
    return true;
  }

  this.userDuration = function(duration) {
    this.durationList.push(duration);
  }
}

// 1. Get the number of resources
var numberOfResources = functions.randomizer(10);
var resources = [];

for(var i = 1; i <= numberOfResources; i++){
  resources.push(new Resource(i));
}

// 2. Get the number of users
var numberOfUsers = functions.randomizer(10);
var users = [];

for(var i = 1; i <= numberOfUsers; i++){
  users.push(new User(i));
}

// 3. Generate the number of resources each user needs
console.log("Number of Users: " + numberOfUsers);
console.log("Number of Resources: " + numberOfResources);
for(var i = 0; i < numberOfUsers; i++){
  var eachResourceNum = functions.randomizer(numberOfResources);
  // Generate the resources a user needs and sort
  for(j = 0; j < eachResourceNum; j++){
    do{
      var resource = functions.randomizer(numberOfResources);
      var answer = users[i].userResources(resource);
    }while(answer === false);
  }

  users[i].resourceList.sort(Sort);

  for(var k = 0; k < users[i].resourceList.length; k++) {
    var duration = functions.randomizer(30);
    users[i].userDuration(duration);
    console.log("User " + (i + 1) + " resource: " + users[i].resourceList[k] + " , duration: " + users[i].durationList[k]);
  }
}

// Set up the container
$('<div class=resource-title>' + "Number of resources: " + numberOfResources +" " + '</div>').appendTo('#title1');
$('<div class=user-title>' + "Number of Users: " + numberOfUsers +" " + '</div>').appendTo('#title2');

// Resource column
for(var i = 0; i < numberOfResources; i++) {
  var string1 = "1_resource" + (i + 1);
  var string2 = "2_resource" + (i + 1);
  $("<div>", {
    'class': string1,
    'id': "aListR"
  }).appendTo('#resources-column1');
  $("<div>", {
    'class': string2,
    'id': "aListR"
  }).appendTo('#resources-column2');
  var string3 = ".1_resource" + (i + 1);
  $(string3).text("resource " + (i + 1));
}

// User column
for(var i = 0; i < numberOfUsers; i++) {
  var string1 = "1_user" + (i + 1);
  var string2 = "2_user" + (i + 1);
  $("<div>", {
    'class': string1,
    'id': "aListR"
  }).appendTo('#users-column1');
  $("<div>", {
    'class': string2,
    'id': "aListR"
  }).appendTo('#users-column2');
  var string3 = ".1_user" + (i + 1);
  $(string3).text("user " + (i + 1));
}

function Main() {
  // Decrease time of each resource
  for(var i = 0; i < numberOfUsers; i++) {
    if(users[i].resourceList.length > 0) {
      if(resources[(users[i].resourceList[0]) - 1].isBusy == false) {
        users[i].isFree = true;
        resources[(users[i].resourceList[0]) - 1].isBusy = true;
        if(users[i].durationList[0]> 0){
          users[i].durationList[0]--;
        } else {
          users[i].resourceList.shift();
          users[i].durationList.shift();
        }
      } else {
        users[i].isFree = false;
      }
    } else {
      users[i].isFree = false;
    }
  }

  // Update resources status
  for(var j = 0; j < numberOfResources; j++) {
    var string2 = ".2_resource" + (j + 1);
    if(resources[j].isBusy) {
      $(string2).text("Status: Busy").css("color", "#c0392b");
    } else {
      $(string2).text("Status: Free").css("color", "#27ae60");
    }
  }

  for(var m = 0; m < numberOfResources; m++) {
    resources[m].isBusy = false;
  }

  // Update users status
  for(var k = 0; k < numberOfUsers; k++) {
    var string2 = ".2_user" + (k + 1);
    if(users[k].isFree && users[k].resourceList.length > 0) {
      $(string2).text("Status: Using " + users[k].resourceList[0] + " (" + users[k].durationList[0] + ")").css("color", "#2980b9");
    } else if(users[k].resourceList.length > 0) {
      $(string2).text("Status: Waiting for " + users[k].resourceList[0]).css("color", "#f39c12");
    } else {
      $(string2).text("Status: Done").css("color", "#7f8c8d");
    }
  }

}

setInterval(Main, 800);