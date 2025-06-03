const profile = {
    username: "Jacob",
  playTime: 300,
 


changeUserName (newName) {
    this.user = newName;
},

updatePlayTime(hours) {
    this.playTime += hours;
},

getInfo () {
     return `${this.username} has ${this.playTime} active hours!`;
}

};