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
user3 = User.create(name: 'Steve Rogers', nickname: 'Captain', email: 'steve@rogers.com', first_name: 'Steve', last_name: 'Rogers', username:'cap', quote:'Live long and prosper', password:'steverogers', image:'http://pre13.deviantart.net/0c43/th/pre/f/2014/265/e/8/captain_america___age_of_ultron_render_by_eversontomiello-d8073sd.png')
user4 = User.create(name: 'Tony Stark', nickname: 'Iman', email: 'anthony@stark.com', first_name: 'Tony', last_name: 'Stark', username:'iman', quote:'iron is my game', password:'tonystark', image:'http://orig12.deviantart.net/be7f/f/2014/265/6/5/iron_man___age_of_ultron_render_by_eversontomiello-d8072m8.png')


post1 = Post.create(title:'Davain Doolaramani - editor for Humans of Hong Kong', image: 'http://cdn3.coconutsmedia.com/field/image/humans_of_hong_kong_devain.jpg', description:'Davain created the Humans of Hong Kong Facebook page, a project inspired by the well known New York version - but run entirely by local students right here in Hong Kong.', category:'Community', location:'Hong Kong', longitude:"114.1450309753418", latitude:"22.28607851796627", user_id: user1.id, post_votes: 0)
post2 = Post.create(title:'Eric Chen Zixiang - tackling the milk powder scandal with science', image: 'http://cdn2.i-scmp.com/sites/default/files/styles/486x302/public/2015/06/28/d41175b9eb68e97c579333b60956430c.jpg?itok=WtDJ1hAC', description:'Eric Chen Zixiang was appalled in 2008 when the melamine milk powder scandal occurred on the mainland, in which six babies died and tens of thousands became ill. He has set up Vitargent (International) Biotechnology Ltd to bring about a revolution in how foods, cosmetics and other products are tested for toxins.  He has teamed up with scientists to use fish embryos to test for raw materials that commonly appear in daily consumer goods such as food, medicine, plastic products as well as cosmetic and skin care products.  Chen has already been able to secure major investors and is partnering with key manufacturers. ', category:'Community', location:'Hong Kong', longitude:"114.15515899658203", latitude:"114.149122.278454057449856", user_id: user1.id, post_votes: 0)
post3 = Post.create(title:'Trisha Tran - campaigning for special needs children and their right for equal education', image: 'http://cdn2.i-scmp.com/sites/default/files/styles/980w/public/2015/06/06/05f71407207a31e8e59c53509c7a35a0.jpg?itok=TsnmAJKp', description:'Trisha Tran is convenor of the Hong Kong-based Parents of Non- Chinese Speaking Special Education Needs (SEN) Children. Tran has a six-year-old daughter, Kimberly Mohinani, who was born with unspecified central hypotonia. Tran says this is “really a symptom” that results in weak muscle tone and affects the central nervous system and Kimberly’s speech and fine motor skills. She is also hearing-impaired.  Through her, Tran discovered the huge gaps in the education system in Hong Kong, resulting in four-year waits to get English-speaking SEN children into schools. She campaigns tirelessly to get rid of these waiting times and to create an inclusive education system.', category:'Youth', location:'Hong Kong', longitude:"114.17078018188477", latitude:"22.296402645443738", user_id: user2.id, post_votes: 0)
post4 = Post.create(title:'Jacqueline Chow-Liu - Hong Kong Society for the Protection of Children', image: 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png', description:'Growing up in Hong Kong, charitable activist Jacqueline Chow-Liu remembers her mother and great-grandmother taking hours out of their workdays to volunteer at the Hong Kong Society for the Protection of Children, which was formerly known as HKSPC Women’s Auxiliary. “Back then, we didn’t do as much as we do now. My great-grandmother would serve hot congee at the Portland Street neighbourhood [where the office is now] to the kids,” Chow-Liu says. “I always feel very lucky being able to help the children of the future here." One of the oldest children’s charities in Hong Kong, HKSPC accommodates children and families where care is scarce or, in some cases, non-existent.', category:'Youth', location:'Admiralty', longitude:"22.2864", latitude:"114.153278", user_id: user2.id, post_votes: 0)
post5 = Post.create(title:'Sally Anderson - founder of Hong Kong Dog Rescue', image: 'http://www.expatliving.hk/Temp_News/article10846.ece/alternates/w1024/Hong_Kong_Dog_Rescue2.jpg', description:'Sally arrived in Hong Kong on a yacht from Taiwan with a friend in 2003. Her intention was to see the sights of Hong Kong for six months and then move on. Thankfully for dogs and dog-lovers alike she didn’t, and since founding the charity she has successfully re-homed countless dogs to loving families.', category:'Animals', location:'Admiralty', longitude:"114.16820526123047", latitude:"22.27352970576418", user_id: user3.id, post_votes: 0)
post6 = Post.create(title:'Sheila McClelland - founder of Lamma Animal Protection HK', image: 'http://www.lap.org.hk/pic/63561583307016384079.jpg', description:'Sheila McClelland has been passionately committed to animal welfare since she stepped up to rescue her first dog, Boodhai, in 1991. Shocked by the more than 25,000 abandoned dogs and cats killed by the Hong Kong Government each year, she decided to act. The result was LAP, first as Lamma Animal Protection, now broadened across Hong Kong into Lifelong Animal Protection, but still very much with animal protection at its core.
', category:'Animals', location:'Admiralty', longitude:"114.0963942", latitude:"22.2094493", user_id: user3.id, post_votes: 0)
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