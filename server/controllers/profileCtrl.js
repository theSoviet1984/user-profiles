var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends(req, res, next) {
      var friendsArray = [];
      for (let i = 0; i < req.session.currentUser.friends.length; i++) {
          for (let j = 0; j < profiles.length; j++) {

              if (req.session.currentUser.friends[i] === profiles[j].name) {
                  friendsArray.push(profiles[j])
              }
          }
      }
      return res.status( 200 ).json({
        currentUser: req.session.currentUser,
        friends: friendsArray
      });
  }
// {
  //   currentUser: req.session.currentUser,
  //   friends: yourArrayOfFriendObjects
  // }
}
