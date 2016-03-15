# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
Comment.delete_all
Vote.delete_all
Quote.delete_all

user1 = User.create(name: 'Clark Kent', nickname: 'Supes', email: 'clark@kent.com', first_name: 'Clark', last_name: 'Kent', username:'supes', quote:'Not a bird nor a plane', password:'clarkkent', image:'http://images-cdn.moviepilot.com/image/upload/c_fill,h_1200,w_1920/t_mp_quality/henry_cavill_in_man_of_steel-wide-henry-cavill-confirms-batman-vs-superman-won-t-be-split-into-two-movies-jpeg-219245.jpg')
user2 = User.create(name: 'Wade Wilson', nickname: 'Mr Pool', email: 'dead@pool.com', first_name: 'Wade', last_name: 'Wilson', username:'deadpool', quote:'McAvoy or Stewart? These timelines can get so confusing.', password:'wadewilson', image:'http://download.gamezone.com/uploads/image/data/1199916/james-gunn-explains-why-deadpool-made-so-much-money-844407.jpg')
user3 = User.create(name: 'Steve Rogers', nickname: 'cap', email: 'steve@rogers.com', first_name: 'Steve', last_name: 'Rogers', username:'cap', quote:'live long and prosper', password:'steverogers', image:'http://vignette1.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20150208173400')
user4 = User.create(name: 'Tony Stark', nickname: 'iman', email: 'anthony@stark.com', first_name: 'Tony', last_name: 'Stark', username:'iman', quote:'iron is my game', password:'tonystark', image:'http://vignette3.wikia.nocookie.net/ironman/images/4/4f/Photo(1073).png/revision/latest?cb=20150417140445')


post1 = Post.create(title:'Supes Post 1', image: 'https://www.google.com.hk/search?q=superman+icon&espv=2&biw=1867&bih=971&tbm=isch&imgil=W6jCGhZk67NlZM%253A%253B8Ro6gCsNewWakM%253Bhttp%25253A%25252F%25252Fwww.iconarchive.com%25252Fshow%25252Ffree-large-boss-icons-by-aha-soft%25252FSuperman-icon.html&source=iu&pf=m&fir=W6jCGhZk67NlZM%253A%252C8Ro6gCsNewWakM%252C_&usg=__Woqv2doxb3H6kcZLtmW9wDD6oHk%3D&ved=0ahUKEwifk7Le37XLAhWOv44KHbp1DY8QyjcIMw&ei=oDbhVp_DJo7_ugS667X4CA#imgrc=W6jCGhZk67NlZM%3A', description:'Content of supes post 1', category:'Animals', location:'Sheung Wan', longitude:"114.1450309753418", latitude:"22.28607851796627", user_id: user1.id, post_votes: 0)
post2 = Post.create(title:'Supes Post 2', image: 'https://www.google.com.hk/search?q=superman+icon&espv=2&biw=1867&bih=971&tbm=isch&imgil=W6jCGhZk67NlZM%253A%253B8Ro6gCsNewWakM%253Bhttp%25253A%25252F%25252Fwww.iconarchive.com%25252Fshow%25252Ffree-large-boss-icons-by-aha-soft%25252FSuperman-icon.html&source=iu&pf=m&fir=W6jCGhZk67NlZM%253A%252C8Ro6gCsNewWakM%252C_&usg=__Woqv2doxb3H6kcZLtmW9wDD6oHk%3D&ved=0ahUKEwifk7Le37XLAhWOv44KHbp1DY8QyjcIMw&ei=oDbhVp_DJo7_ugS667X4CA#imgrc=W6jCGhZk67NlZM%3A', description:'Content of supes post 2', category:'Environment', location:'Central', longitude:"114.15515899658203", latitude:"114.149122.278454057449856", user_id: user1.id, post_votes: 0)
post3 = Post.create(title:'Bats Post 1', image: 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png', description:'Content of Bats post 1', category:'Community', location:'Sheung Wan', longitude:"114.17078018188477", latitude:"22.296402645443738", user_id: user2.id, post_votes: 0)
post4 = Post.create(title:'Bats Post 2', image: 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png', description:'Content of Bats post 2', category:'Animals', location:'Admiralty', longitude:"22.2864", latitude:"114.153278", user_id: user2.id, post_votes: 0)
post5 = Post.create(title:'Cap Post 1', image: 'http://41.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png', description:'Content of Caps post 1', category:'Animals', location:'Admiralty', longitude:"114.16820526123047", latitude:"22.27352970576418", user_id: user3.id, post_votes: 0)
post6 = Post.create(title:'Cap Post 2', image: 'http://41.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png', description:'Content of Caps post 2', category:'Youth', location:'Admiralty', longitude:"114.14588928222656", latitude:"22.253195063470365", user_id: user3.id, post_votes: 0)
post7 = Post.create(title:'Iman Post 1', image: 'https://cdn0.iconfinder.com/data/icons/superhero-2/256/Ironman-128.png', description:'Content of Imans post 1', category:'Environment', location:'Sheung Wan', longitude:"114.17163848876953", latitude:"22.31673100466709", user_id: user4.id, post_votes: 0)
post8 = Post.create(title:'Iman Post 2', image: 'https://cdn0.iconfinder.com/data/icons/superhero-2/256/Ironman-128.png', description:'Content of Imans post 2', category:'Good deeds', location:'Central', longitude:"114.14657592773438", latitude:"22.28337823574864", user_id: user4.id, post_votes: 0)

Comment.create(post_id: post1.id,user_id: user1.id,comment:'This is supes first comment')
Comment.create(post_id: post1.id,user_id: user2.id,comment:'This is bats first comment')
Comment.create(post_id: post1.id,user_id: user3.id,comment:'This is caps first comment')
Comment.create(post_id: post1.id,user_id: user4.id,comment:'This is imans first comment')
Comment.create(post_id: post2.id,user_id: user1.id,comment:'This is supes second comment')
Comment.create(post_id: post2.id,user_id: user2.id,comment:'This is bats second comment')
Comment.create(post_id: post2.id,user_id: user3.id,comment:'This is caps second comment')
Comment.create(post_id: post2.id,user_id: user4.id,comment:'This is imans second comment')
Comment.create(post_id: post3.id,user_id: user1.id,comment:'This is supes third comment')
Comment.create(post_id: post3.id,user_id: user2.id,comment:'This is bats third comment')
Comment.create(post_id: post3.id,user_id: user3.id,comment:'This is caps third comment')
Comment.create(post_id: post3.id,user_id: user4.id,comment:'This is imans third comment')
Comment.create(post_id: post4.id,user_id: user1.id,comment:'This is supes fourth comment')
Comment.create(post_id: post4.id,user_id: user2.id,comment:'This is bats fourth comment')
Comment.create(post_id: post4.id,user_id: user3.id,comment:'This is caps fourth comment')
Comment.create(post_id: post4.id,user_id: user4.id,comment:'This is imans fourth comment')

# Vote.create(user_id: user1.id,post_id: post1.id,votes:1)
# Vote.create(user_id: user1.id,post_id: post2.id,votes:1)
# Vote.create(user_id: user2.id,post_id: post3.id,votes:1)
# Vote.create(user_id: user2.id,post_id: post4.id,votes:1)
# Vote.create(user_id: user3.id,post_id: post5.id,votes:1)
# Vote.create(user_id: user3.id,post_id: post6.id,votes:1)
# Vote.create(user_id: user4.id,post_id: post7.id,votes:1)
# Vote.create(user_id: user4.id,post_id: post8.id,votes:1)

Quote.create(smile:"No act of kindness, however small, is ever wasted. ~ Aesop")
Quote.create(smile:"Kind words can be short and easy to speak but their echoes are truly endless. ~ Mother Teresa")
Quote.create(smile:"No kind action ever stops with itself. One kind action leads to another. Good example is followed. A single act of kindness throws out roots in all directions, and the roots spring up and make new trees. The greatest work that kindness does to others is that it makes them kind themselves.
~ Amelia Earhart")
Quote.create(smile:"What wisdom can you find that is greater than kindness?
~ Jean Jacques Rousseau")
Quote.create(smile:"This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.
~ Dalai Lama")
Quote.create(smile:"I am only one; but still I am one. I cannot do everything, but still I can do something. I will not refuse to do the something I can do. ~ Helen Keller")
Quote.create(smile:"When words are both true and kind, they can change the world. ~ Buddha")
Quote.create(smile:"Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around. ~ Leo Buscaglia")
Quote.create(smile:"What this world needs is a new kind of army – the army of the kind. ~ Cleveland Amory")
Quote.create(smile:"We have stopped for a moment to encounter each other, to meet, to love, to share. This is a precious moment but it is transient. It is a little parenthesis in eternity. If we share caring, lightheartedness, and love, we will create abundance and joy for each other. And then this moment will be worthwhile. ~ Deepak Chopra")
Quote.create(smile:"We have stopped for a moment to encounter each other, to meet, to love, to share. This is a precious moment but it is transient. It is a little parenthesis in eternity. If we share caring, lightheartedness, and love, we will create abundance and joy for each other. And then this moment will be worthwhile. ~ Deepak Chopra")
Quote.create(smile:"Kindness...the starting point, the fount from which flow so many other positive qualities, such as honesty, forgiveness, patience, and generosity...it is clear that our survival, even today, depends upon the acts and kindness of so many people. Right from the moment of our birth, we are under the care and kindness of our parents; later in life, when facing the sufferings of disease and old age, we are again dependent on the kindness of others. If we at the beginning and end of our lives we depend upon others' kindness, why then in the middle, when we have the opportunity, should we not act kindly toward others? ~ Piero Ferrucci")
Quote.create(smile:"Spread love everywhere you go: First of all in your own house...kindness in your face, kindness in your eyes, kindness in your smile, kindness. ~ Mother Teresa")
Quote.create(smile:"Do you really want to be happy? Just pay attention and be kind, unconditionally kind, on this breath alone. Forget about the future. Just this breath. No matter what the circumstances, just be kind. Friend, lover, family member, someone who seems to hate you, someone you've never met on the street, your own soft animal body. Just be kind, in whatever way is appropriate. Everything else will work itself out, and you will begin to sense your own pure heart everywhere. How amazing. Very simple. Just be kind. Only on this breath. ~ Scott Morrison")
Quote.create(smile:"SNo one is born hating another person...People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite. ~ Nelson Mandela")
Quote.create(smile:"When I was young, I admired clever people. Now that I am old, I admire kind people. ~ Abraham Joshua Heschel")
Quote.create(smile:"We don't have to engage in grand, heroic actions to participate in the process of change. Small acts, when multiplied by millions of people, can transform the world. ~ Howard Zinn")
Quote.create(smile:"Guard well within yourself that treasure, kindness. Know how to give without hesitation, how to lose without regret, how to acquire without meanness. ~ George Sand")