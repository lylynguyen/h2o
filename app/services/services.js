angular.module('myApp.services', [])
  .factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list, usually would be a separate database
  var contactList = [
    {
      id: 0,
      name: 'Richard Hendricks',
      email: 'richard@piedpiper.com',
      mobile: '123-456-7890',
      url: 'www.piedpiper.com',
      notes: "We love the name Pied Piper. It's a classic fairy tale."
    },{
      id: 1, name: 'Erlich Bachman',
      email: 'erlich@piedpiper.com',
      mobile: '123-456-7890',
      url: 'www.piedpiper.com',
      notes: "Don't be the guy that always ask what if"
    },{
      id: 2,
      name: "Nelson 'Big Head' Bighetti",
      email: 'nelsonbighetti@hooli.com',
      mobile: '123-456-7890',
      url: 'www.hooli.com',
      notes: 'Honestly, not really. I actually remember when they told me I got the AIDS thing, for just a second I thought they were telling me that I had AIDS.'
    },{
      id: 3,
      name: 'Dinesh Chugtai',
      email: 'dinesh@piedpiper.com',
      mobile: '123-456-7890',
      url: 'www.piedpiper.com',
      notes: 'Did you see that? She gave me her hat.'
    },{
      id: 4,
      name: 'Monica',
      email: 'monica@raviga.com',
      mobile: '123-456-7890',
      url: 'www.ravida.com',
      notes: 'Got it. Went to Catholic school.'
    },{
      id: 5,
      name: 'Gilfoyle',
      email: 'gilfoyle@piedpiper.com',
      mobile: '123-456-7890',
      url: 'www.piedpiper',
      notes: "That was pretty badass Richard... until it wasn't."
    },{
      id: 6,
      name: 'Jared',
      email: 'jared@piedpiper.com',
      mobile: '123-456-7890',
      url: 'www.piedpiper.io',
      notes: 'Scrum!'
    },{
      id: 7,
      name: 'Peter Gregory',
      email: 'peter@ravida.com',
      mobile: '123-456-7890',
      url: 'www.ravida.com',
      notes: 'I was never enjoying it. I was only eating it for the nutrients.'
    },{
      id: 8,
      name: 'Laurie Bream',
      email: 'Laurie@ravida.com',
      mobile: '123-456-7890',
      url: 'www.ravida.com',
      notes: "It is a question mark made of human hair harvested apparently from dead people in India. It's a pun. It signifies, at Raviga we ask the big hairy questions."
    },{
      id: 9,
      name: 'Jian-Yang',
      email: 'Jian@gmail.com',
      mobile: '123-456-7890',
      url: 'www.Jian.com',
      notes: "I'm going to smoke in my room. Special occasion."
    },{
      id: 10,
      name: 'Russ Hanneman',
      email: 'RussHanneman@gmail.com',
      mobile: '123-456-7890',
      url: 'www.RussHanneman.com',
      notes: 'But I watched your whole TechCrunch thing online, twice. That whole spazz thing you did (moaning, sputtering) That was fucking priceless.'
    }
  ];

  return factory;
}]);
