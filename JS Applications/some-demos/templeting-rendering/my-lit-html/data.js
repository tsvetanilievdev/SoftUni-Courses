let data  = [
    {
      name: 'Tsvetan Iliev',
      age: 31,
      position: 'midfielder',
      goals: 22,
      suspend: false,
      img: 'https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/221408643_10217295341129517_3226428516961071333_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=OUg_H24tuLAAX8ysRGL&_nc_oc=AQnvWZ2_KPIsdti75SV7zTvtk2hrRDaPFsD-KetlQpC_LCxCMfwQEyEOVYuxY5rbB8M&_nc_ht=scontent.fsof10-1.fna&oh=f8a02e0b0a47bf871d913b292bd5fe1f&oe=61271DB5',
    },
    {
      name: 'Cristiano Ronaldo',
      age: 36,
      position: 'striker',
      goals: 922,
      suspend: true,
      img: 'https://phantom-marca.unidadeditorial.es/3d7d50c65b8d9d2abaf3ddc6dab62ef4/resize/1320/f/jpg/assets/multimedia/imagenes/2021/07/18/16266053886014.jpg',
    },
    {
      name: 'Lionel Messi',
      age: 34,
      position: 'winger',
      goals: 822,
      suspend: false,
      img: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1344x250:1346x248)/origin-imgresizer.eurosport.com/2021/04/29/3123417-64024068-2560-1440.jpg',
    },
    {
      name: 'Kylian Mbappe',
      age: 21,
      position: 'striker',
      goals: 222,
      suspend: true,
      img: 'https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2020/12/08/Desktop_2021_UK_L1_PSG_Mbappe_100.jpg?h=1035&la=en&w=2000&hash=6EFD7CB4251C28CD9257298C250BEE1D',
    },
    {
      name: 'Sergio Ramos',
      age: 36,
      position: 'defender',
      goals: 102,
      suspend: true,
      img: 'https://webnews.bg/uploads/images/77/7977/497977/768x432.jpg?_=1601154180',
    },
    {
      name: 'David Alaba',
      age: 27,
      position: 'defender',
      goals: 12,
      suspend: false,
      img: 'https://i1.actualno.com/actualno_2013/upload/news/2020/09/28/0789595001601298442_1534599_920x517.webp',
    },
    {
        name: 'Miralem Pjanic',
        age: 29,
        position: 'midfielder',
        goals: 32,
        suspend: false,
        img: 'data:image/jpeg;base64,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',
      },
      {
        name: 'Federico Chiesa',
        age: 22,
        position: 'winger',
        goals: 140,
        suspend: true,
        img: 'https://images.daznservices.com/di/library/GOAL/62/3c/federico-chiesa-italy-euro-2020_1wfbjrlxt5d491m79fh2a50y8f.jpg?t=-2116529510&quality=100',
      },
      {
        name: 'Nicolo Barella',
        age: 24,
        position: 'midfielder',
        goals: 9,
        suspend: false,
        img: 'https://tmssl.akamaized.net/images/foto/normal/nicolo-barella-italia-1621256282-62596.jpg?lm=1621256430',
      },
      {
        name: 'Jorginho',
        age: 28,
        position: 'midfielder',
        goals: 200,
        suspend: true,
        img: 'https://images.daznservices.com/di/library/GOAL/f/b5/jorginho-italy_1pkcgq09paunp1bg3mbpvyfz1c.jpg?t=-1923340806&quality=100',
      },
      {
        name: 'Rafael Varane',
        age: 26,
        position: 'defender',
        goals: 63,
        suspend: true,
        img: 'https://realmadridunofficial.com/wp-content/uploads/2020/12/raphael-varane-real-madrid-2020.jpg',
      },
      {
        name: 'Marcus Rashford',
        age: 23,
        position: 'striker',
        goals: 82,
        suspend: false,
        img: 'https://images.daznservices.com/di/library/GOAL/93/c7/marcus-rashford-leeds-vs-man-utd-premier-league-2020-21_1m1fxklip9g871uaskx4hbw35q.jpg?t=209573721&quality=60&w=1200&h=800',
      },
      {
        name: 'Gianluigi Donnarumma',
        age: 23,
        position: 'goalkeeper',
        goals: 1,
        suspend: true,
        img: 'https://pbs.twimg.com/media/E6DEnKHWYAUmO_l.jpg',
      },
      {
        name: 'Alvaro Morata',
        age: 28,
        position: 'striker',
        goals: 88,
        suspend: false,
        img: 'https://s.france24.com/media/display/a4837294-d8ba-11eb-bf74-005056a90284/w:1280/p:16x9/bd0de3524c857484baa1816d7b5097bb021a0722.webp',
      },
      {
        name: 'Rumelo Lukaku',
        age: 26,
        position: 'striker',
        goals: 300,
        suspend: false,
        img: 'https://baricada.org/wp-content/uploads/2018/07/LUKAKU.jpg',
      },
  ];
  export default data;