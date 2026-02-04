const PHOTOS = [
  {
    file: "flower-field-us.jpg",
    date: "花海里的我们",
    caption: "那天站在一大片花里，看着相机里的照片时，我在想：以后是不是还能多拍很多很多次。",
  },
  {
    file: "lake-portrait.jpg",
    date: "某个傍晚",
    caption: "那天湖边的风刚刚好，你也刚刚好。",
  },
  {
    file: "birthday-dinner.jpg",
    date: "某次特别的晚餐",
    caption: "给小公主准备的晚餐和花，希望以后的每一次庆祝都有你。",
  },
  {
    file: "scooter-ride.jpg",
    date: "某个骑车回家的路上",
    caption: "风很大，但抱着你的那一刻，我只觉得很安心。",
  },
  {
    file: "night-shoulders.jpg",
    date: "2026-01-12 深夜散步",
    caption: "把你扛在肩上的那一刻，突然觉得自己真的可以撑起你的全世界。",
  },
  {
    file: "lake-talk.jpg",
    date: "在湖边说悄悄话",
    caption: "你看着湖，我看着你，很多话没说出口，但我们都懂。",
  },
  {
    file: "sunset-tree.jpg",
    date: "某天的日落树下",
    caption: "夕阳刚好拍在你侧脸上，我那一瞬间只剩下一个念头：好想把这一刻收藏起来。",
  },
  {
    file: "sunset-lake-lean.jpg",
    date: "湖边晚霞",
    caption: "傍晚的湖面一点点暗下来，你靠着栏杆，我靠着你。",
  },
  {
    file: "sunset-lake-v.jpg",
    date: "湖边自拍",
    caption: "你比剪刀手，我比心里手——这一格相册就是我们的小开心。",
  },
  {
    file: "sunset-lake-ok.jpg",
    date: "黄昏的湖面",
    caption: "你说要给我一个“完美 OK”的表情，当时只觉得：有你就都 OK。",
  },
  {
    file: "sunset-lake-think.jpg",
    date: "湖边发呆",
    caption: "你托着脸看远处，我在一旁悄悄看你，觉得这就是我想要的生活。",
  },
  {
    file: "lake-blue.jpg",
    date: "蓝色傍晚",
    caption: "天空和湖水都是蓝的，你是那一块刚好落在我心上的亮色。",
  },
  {
    file: "sunset-tree-2.jpg",
    date: "日落余光",
    caption: "那天光特别暖，我偷偷许了个愿：以后每一个日落都想和你一起看。",
  },
  {
    file: "flowers-walk-1.jpg",
    date: "花海边的散步 1",
    caption: "你穿着黑色上衣和白裙子走过来，感觉整片花都变成了你的背景板。",
  },
  {
    file: "flowers-walk-2.jpg",
    date: "花海边的散步 2",
    caption: "那天风不大，花在轻轻晃，你在慢慢走，我在后面偷偷按快门。",
  },
  {
    file: "sunset-silhouette-1.jpg",
    date: "日落剪影 1",
    caption: "夕阳把你变成一团剪影，我突然有点分不清，是你在捧花，还是整片黄昏在捧着你。",
  },
  {
    file: "sunset-silhouette-2.jpg",
    date: "日落剪影 2",
    caption: "背景什么都看不清，只看得见你拿着那束花的样子，安静又好看。",
  },
  {
    file: "bouquet-close-orange-1.jpg",
    date: "橙色小玫瑰 1",
    caption: "你把花举到嘴边，我只顾着看你的笑，差点忘了按快门。",
  },
  {
    file: "bouquet-close-orange-2.jpg",
    date: "橙色小玫瑰 2",
    caption: "这张本来是想拍花，结果最后变成了我最喜欢的你。",
  },
  {
    file: "street-food.jpg",
    date: "一起逛夜市",
    caption: "人群很吵、摊位很多，我只记得一直牵着你的手，没有走散过。",
  },
  {
    file: "scooter-hands.jpg",
    date: "回家的路上",
    caption: "花放在车后座，你的手在我掌心，我突然觉得，以后回家的路都想这样走。",
  },
  {
    file: "ski-helmet.jpg",
    date: "第一次一起玩雪",
    caption: "你戴着头盔笑得像个大孩子，我那一刻只想继续陪你玩很多很多次。",
  },
  {
    file: "dog-cafe-group.jpg",
    date: "某次猫狗咖啡馆",
    caption: "一群毛茸茸围着我们转，那天我突然觉得，和你一起的生活也会这么热闹又温暖。",
  },
  {
    file: "dog-cafe-hold.jpg",
    date: "抱着小毛球的你",
    caption: "你低头看它的那眼，很温柔，我在旁边看你，也是一样的眼神。",
  },
  {
    file: "night-street-food-2.jpg",
    date: "夜宵摊的小满足",
    caption: "你笑着举起串串，我在一旁讲冷笑话，夜风有点冷，但你笑得特别暖。",
  },
  {
    file: "mirror-hug.jpg",
    date: "镜子里的拥抱",
    caption: "镜子里是我们拥抱的样子，镜子外是我认真想跟你走很久很久的心。",
  },
  {
    file: "rings-bands.jpg",
    date: "那天戴上的小戒指",
    caption: "从这一刻开始，左手的这一圈银色，多了一个“我们”的含义。",
  },
  {
    file: "bumper-pink-1.jpg",
    date: "粉色碰碰车 1",
    caption: "你拿着手机拍来拍去，我在一旁看你玩，比自己开车还开心。",
  },
  {
    file: "bumper-pink-2.jpg",
    date: "粉色碰碰车 2",
    caption: "你坐在粉色小车上比着手势，那一刻我只想把场地包下来给你一个人玩。",
  },
  {
    file: "heart-hands.jpg",
    date: "地上的那颗心",
    caption: "两只手拼成的心看起来有点笨，但里面装的，都是认真。",
  },
  {
    file: "carousel-back.jpg",
    date: "旋转木马的背影",
    caption: "你骑着木马往前看，我在后面追着看，觉得这一幕比童话都好看。",
  },
  {
    file: "lakeside-cafe.jpg",
    date: "湖边的小店",
    caption: "那家小店其实没什么特别的，但因为那天有你，所以被我记成了“我们的地方”。",
  },
  {
    file: "willow-reflection.jpg",
    date: "湖面上的倒影",
    caption: "柳枝在水面上晃来晃去，像那天有点紧张又开心的心情。",
  },
  {
    file: "bouquet-lake-duck.jpg",
    date: "湖边的花和小黄鸭",
    caption: "花束安静地站在岸边，小黄鸭慢慢划过去，那一刻世界很乱，但我们这格画面很温柔。",
  },
  {
    file: "couple-heart-soft.jpg",
    date: "天色暗下来的时候",
    caption: "光线有点糊，但两个人拼成的心是真的，那天我也真的很紧张。",
  },
  {
    file: "ring-by-lake.jpg",
    date: "在湖边戴上的戒指",
    caption: "你低头看指尖的那一圈，我在旁边看你，心里只剩下四个字：以后一起吧。",
  },
  {
    file: "couple-heart-night.jpg",
    date: "彻底黑下来的夜里",
    caption: "背景全黑、灯光不稳，但你怀里的花和我们拼的心在那一刻特别亮。",
  },
  {
    file: "letter-reading.jpg",
    date: "你听我念那封信",
    caption: "纸上写的是很多很多话，真正想说的其实就一句：谢谢你愿意走进我的人生。",
  },
  {
    file: "couple-heart-pinkboat.jpg",
    date: "粉色小船划过的湖面",
    caption: "远处的小船慢慢飘过去，我们在岸边拼了一个心，偷偷许了好几个愿望。",
  },
  {
    file: "hand-in-hand-night.jpg",
    date: "牵着手走回去的路",
    caption: "灯光不多，脚下有点累，但你拎着花、我牵着你，觉得那一段路格外短。",
  },
  {
    file: "bouquet-cafe-focus.jpg",
    date: "花束和那家小店 1",
    caption: "镜头里是花和小店，镜头外是那天的紧张和期待，全都跟你有关。",
  },
  {
    file: "bouquet-cafe-blur.jpg",
    date: "花束和那家小店 2",
    caption: "对焦有点乱，但我记得很清楚：那天的主角是你和这束花。",
  },
  {
    file: "pavilion-back.jpg",
    date: "湖边凉亭的一小格安静",
    caption: "人来人往，我们缩在角落里，小声说着只有彼此才听得懂的话。",
  },
  {
    file: "swan-boat-back.jpg",
    date: "蓝色小船从身后划过",
    caption: "你抱着花站在树下，我在旁边忙着紧张，小船慢慢飘过去当背景板。",
  },
  {
    file: "pavilion-hug.jpg",
    date: "凉亭里的小拥抱",
    caption: "那天风有点凉，你往我怀里靠过来的时候，我心里一下子就暖了。",
  },
  {
    file: "letter-close.jpg",
    date: "纸上写的那几页字",
    caption: "字写得不一定好看，但每一笔每一划，都是我很想跟你说的话。",
  },
  {
    file: "bouquet-close.jpg",
    date: "近距离的花束",
    caption: "这束花会枯萎，但那天你眼睛里亮亮的光，我希望一直记得。",
  },
  {
    file: "forehead-touch.jpg",
    date: "轻轻碰头的那一刻",
    caption: "什么话都没说，但两个人都在心里默默点了“确定”。",
  },
  {
    file: "pavilion-side.jpg",
    date: "从侧面偷看的我们",
    caption: "树干挡住了画面的一半，却挡不住那天我们靠在一起的小心思。",
  },
  {
    file: "white-flowers-tree.jpg",
    date: "路边那棵开花的树",
    caption: "那天连路边的树都在开花，很适合说一点关于“我们”的话。",
  },
  {
    file: "sunset-couple-lake.jpg",
    date: "天还没黑的时候",
    caption: "那会儿我们刚站到湖边，我假装在看日落，其实一直在找勇气。",
  },
  {
    file: "rings-show-lake.jpg",
    date: "举起手给镜头看的那一刻",
    caption: "你晃了晃手上的戒指，我在旁边装淡定，其实心里已经乐疯了。",
  },
  {
    file: "hair-fix-night.jpg",
    date: "帮你整理头发的小动作",
    caption: "我假装在弄你的头发，其实是在偷看你笑。",
  },
];
