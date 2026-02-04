const PHOTOS = [
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
    file: "street-food.jpg",
    date: "一起逛夜市",
    caption: "人群很吵、摊位很多，我只记得一直牵着你的手，没有走散过。",
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
    date: "湖边小亭子 1",
    caption: "旁边人来人往，我们在小亭子里悄悄靠在一起，世界突然变得很安静。",
  },
  {
    file: "swan-boat-back.jpg",
    date: "湖边的蓝色小船",
    caption: "你抱着花站在岸边，看着远处的小船，我在旁边看你，心里已经在计划下一次约会。",
  },
  {
    file: "pavilion-hug.jpg",
    date: "湖边小亭子 2",
    caption: "你把头靠过来的那一下，我突然觉得，以后难过的时候也想给你这样一个肩膀。",
  },
  {
    file: "letter-close.jpg",
    date: "信纸和花束",
    caption: "字写得有点乱，花却很认真，就像我笨拙的表达里藏着很多认真的喜欢。",
  },
  {
    file: "bouquet-close.jpg",
    date: "那束花的特写",
    caption: "那天挑花的时候一直在想，你看到它的时候会不会也像现在这样笑。",
  },
  {
    file: "forehead-touch.jpg",
    date: "轻轻靠在一起",
    caption: "额头碰在一起的那一刻，所有的紧张一下子都变成了踏实。",
  },
  {
    file: "pavilion-side.jpg",
    date: "小亭子侧面",
    caption: "树挡住了一点画面，但我知道画面里有你，画面外也有你。",
  },
  {
    file: "white-flowers-tree.jpg",
    date: "路边那棵开花的树",
    caption: "那天花开得很安静，我悄悄记住了地点，以后路过都会想到你。",
  },
  {
    file: "sunset-couple-lake.jpg",
    date: "日落前的一张合影",
    caption: "天还没完全黑，你抱着花，我在旁边抓紧你的手，觉得这一切刚刚好。",
  },
  {
    file: "rings-show-lake.jpg",
    date: "举起手给镜头看",
    caption: "我们一起把手举给镜头看，其实是想告诉世界：我选的人就是她 / 他。",
  },
];
