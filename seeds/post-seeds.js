const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'This is content.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'This is also content.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: "I'm something of a scientist myself.",
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: "I don't like bullies.",
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'Perfectly balanced as all things should be.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'Avengers assemble.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: "I'm gonna put some dirt in your eye",
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'I am Iron Man.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'Hello World',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'Red Skull',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Andrew got to save MJ.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'Bully',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'GTA V needs to be stopped.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'MCU is the best.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'The Army goes rolling along.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'And the rockets red glare.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'I miss Tony Stark',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'I love you 3000.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'Captain America.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'The white wolf has rested long enough.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
