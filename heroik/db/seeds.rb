# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: 'Clark Kent', nickname: 'supes', email: 'clark@kent.com', first_name: 'Clark', last_name: 'Kent', username:'supes', quote:'Not a bird nor a plane', password:'clarkkent', image:'http://img05.deviantart.net/13d1/i/2014/261/4/a/earth_2_superman__bourassa_style__by_owc478-d74ivzp.png')
User.create(name: 'Bruce Wayne', nickname: 'bats', email: 'bruce@wayne.com', first_name: 'Bruce', last_name: 'Wayne', username:'bats', quote:'i am batman', password:'brucewayne', image:'http://cdn-static.denofgeek.com/sites/denofgeek/files/2015/10/batman-yellow-west.jpg')
User.create(name: 'Steve Rogers', nickname: 'cap', email: 'steve@rogers.com', first_name: 'Steve', last_name: 'Rogers', username:'cap', quote:'live long and prosper', password:'steverogers', image:'http://vignette1.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20150208173400')
User.create(name: 'Tony Stark', nickname: 'iman', email: 'anthony@stark.com', first_name: 'Tony', last_name: 'Stark', username:'iman', quote:'iron is my game', password:'tonystark', image:'http://vignette3.wikia.nocookie.net/ironman/images/4/4f/Photo(1073).png/revision/latest?cb=20150417140445')

Comment.create(post_id: 1,user_id: 1,comment:'This is supes first comment')
Comment.create(post_id: 1,user_id: 2,comment:'This is bats first comment')
Comment.create(post_id: 1,user_id: 3,comment:'This is caps first comment')
Comment.create(post_id: 1,user_id: 4,comment:'This is imans first comment')
Comment.create(post_id: 2,user_id: 1,comment:'This is supes second comment')
Comment.create(post_id: 2,user_id: 2,comment:'This is bats second comment')
Comment.create(post_id: 2,user_id: 3,comment:'This is caps second comment')
Comment.create(post_id: 2,user_id: 4,comment:'This is imans second comment')
Comment.create(post_id: 3,user_id: 1,comment:'This is supes third comment')
Comment.create(post_id: 3,user_id: 2,comment:'This is bats third comment')
Comment.create(post_id: 3,user_id: 3,comment:'This is caps third comment')
Comment.create(post_id: 3,user_id: 4,comment:'This is imans third comment')
Comment.create(post_id: 4,user_id: 1,comment:'This is supes fourth comment')
Comment.create(post_id: 4,user_id: 2,comment:'This is bats fourth comment')
Comment.create(post_id: 4,user_id: 3,comment:'This is caps fourth comment')
Comment.create(post_id: 4,user_id: 4,comment:'This is imans fourth comment')

Post.create(title:'Supes Post 1', image: 'https://www.google.com.hk/search?q=superman+icon&espv=2&biw=1867&bih=971&tbm=isch&imgil=W6jCGhZk67NlZM%253A%253B8Ro6gCsNewWakM%253Bhttp%25253A%25252F%25252Fwww.iconarchive.com%25252Fshow%25252Ffree-large-boss-icons-by-aha-soft%25252FSuperman-icon.html&source=iu&pf=m&fir=W6jCGhZk67NlZM%253A%252C8Ro6gCsNewWakM%252C_&usg=__Woqv2doxb3H6kcZLtmW9wDD6oHk%3D&ved=0ahUKEwifk7Le37XLAhWOv44KHbp1DY8QyjcIMw&ei=oDbhVp_DJo7_ugS667X4CA#imgrc=W6jCGhZk67NlZM%3A', description:'Content of supes post 1', category:'Animals', location:'Sheung Wan', longitude:'22.2864', latitude:114.1491, user_id: 1, post_votes: 10)
Post.create(title:'Supes Post 2', image: 'https://www.google.com.hk/search?q=superman+icon&espv=2&biw=1867&bih=971&tbm=isch&imgil=W6jCGhZk67NlZM%253A%253B8Ro6gCsNewWakM%253Bhttp%25253A%25252F%25252Fwww.iconarchive.com%25252Fshow%25252Ffree-large-boss-icons-by-aha-soft%25252FSuperman-icon.html&source=iu&pf=m&fir=W6jCGhZk67NlZM%253A%252C8Ro6gCsNewWakM%252C_&usg=__Woqv2doxb3H6kcZLtmW9wDD6oHk%3D&ved=0ahUKEwifk7Le37XLAhWOv44KHbp1DY8QyjcIMw&ei=oDbhVp_DJo7_ugS667X4CA#imgrc=W6jCGhZk67NlZM%3A', description:'Content of supes post 2', category:'Environment', location:'Central', longitude:22.2864, latitude:114.1491, user_id: 1, post_votes: 2)
Post.create(title:'Bats Post 1', image: 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png', description:'Content of Bats post 1', category:'Community', location:'Sheung Wan', longitude:22.2864, latitude:114.1491, user_id: 2, post_votes: 3)
Post.create(title:'Bats Post 2', image: 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png', description:'Content of Bats post 2', category:'Animals', location:'Admiralty', longitude:22.2864, latitude:114.1491, user_id: 2, post_votes: 4)
Post.create(title:'Cap Post 1', image: 'http://41.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png', description:'Content of Caps post 1', category:'Animals', location:'Admiralty', longitude:22.2864, latitude:114.1491, user_id: 3, post_votes: 5)
Post.create(title:'Cap Post 2', image: 'http://41.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png', description:'Content of Caps post 2', category:'Environment', location:'Admiralty', longitude:22.2864, latitude:114.1491, user_id: 3, post_votes: 6)
Post.create(title:'Iman Post 1', image: 'https://cdn0.iconfinder.com/data/icons/superhero-2/256/Ironman-128.png', description:'Content of Imans post 1', category:'Animals', location:'Sheung Wan', longitude:22.2864, latitude:114.1491, user_id: 4, post_votes: 7)
Post.create(title:'Iman Post 2', image: 'https://cdn0.iconfinder.com/data/icons/superhero-2/256/Ironman-128.png', description:'Content of Imans post 2', category:'Elderly', location:'Central', longitude:22.2864, latitude:114.1491, user_id: 4, post_votes: 8)

Vote.create(user_id: 1,post_id: 1,votes:1)
Vote.create(user_id: 1,post_id: 2,votes:1)
Vote.create(user_id: 2,post_id: 3,votes:1)
Vote.create(user_id: 2,post_id: 4,votes:1)
Vote.create(user_id: 3,post_id: 5,votes:1)
Vote.create(user_id: 3,post_id: 6,votes:1)
Vote.create(user_id: 4,post_id: 7,votes:1)
Vote.create(user_id: 4,post_id: 8,votes:1)

Quote.create(smile:"Smile 1")
Quote.create(smile:"Smile 2")
Quote.create(smile:"Smile 3")
Quote.create(smile:"Smile 4")