const functions = {
    // add: (num1, num2) => num1 + num2,
    // isNull: () => null,
    // checkValue: x => x,
    // createUser: () => {
    //     const user = { firstName: 'Juril'}
    //     user['lastName'] = 'Digamon'
    //     return user;
    // },
    randomizer: (num) => Math.floor((Math.random() * num) + 1),
    User: (num) => {
        const resourceList = [];
        const durationList = [];
        const isFree = false;
      
        const userResources = (resource) => {
          for(var i = 0; i < resourceList.length; i++){
            if(resource === resourceList[i]){
              return false;
            }
          }
          resourceList.push(resource);
          return true;
        }
      
        userDuration = (duration) => {
          durationList.push(duration);
        }
      }
}

module.exports = functions;