const rowarena = {
    id: 1,
    arenaTitle: 'arenaTitle',
    Capacity: 'Capacity',
    About: 'About',
    Logo:'Logo',
    Photo:'Photo'
}

const rowteam = {
    id: 1,
    logo: 'logo',
    name: 'name',
    Founded: 'Founded',
    About: 'About',
    divison: 'divison',
    arena:'1',
}

const rowplayer = {
    id:1,
    photo: 'photo',
    firstname:'firstname',
    lastname:'lastname',
    birthday:'birthday',
    country:'country',
    height: 'height',
    weight: 'weight',
    college:'college',
    nbadebut: 'nbadebut',
    position:'position',
    team:'team',
    number: 'number',
    iconflag:'iconflag',
}

const rowregularseason =
{
  id:1,
  gamedate:'30 Oct 2013',
  teamhome:'Indiana Pacers',
  scorehome:'97',
  scoreaway:'87',
  teamaway:'Orlando Magic',
  overtimes:'-',
  recap:`data:image/jpeg;base64,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`,
  detail:[
    {
      id:1,
      Quarter:'1st quarter',
      homescore:'23',
      awayscore:'18'
    },
    {
      id:2,
      Quarter:'2nd quarter',
      homescore:'17',
      awayscore:'26'
    },
    {
      id:3,
      Quarter:'3rd quarter',
      homescore:'29',
      awayscore:'20'
    },
    {
      id:4,
      Quarter:'4th quarter',
      homescore:'28',
      awayscore:'23'
    }
  ]
}

export const MockData = {
    tokendata:{
        requestdata: {
            email: "admin@admin.com",
            password: "admin"
        },
        responsedata: {
            status: "success",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjc3MDI5Mzg0LCJleHAiOjE2NzcwMzA4MjR9.dM64-7ERXgEzGtdLX3lb7rp9QbYPtN1O0gQ33JoqcxM",
            email: "admin@admin.com",
            password: "admin"
        },
        error: null
      },
      loading: false,
      arenas:[{
        ...rowarena
      }],
      typeview:{
        sendview:'',
        typeview: '',
        loading: false,
        err: null
      },
      resultarena:1,
      err:null,
      arenadelete:{
        ...rowarena
      },
      arenabyid:{
        ...rowarena
      },
      teams:[{
        ...rowteam
      }],
      typeviewteam:{
        typeviewteam: '',
        sendviewteam:  '',
        loading: false,
        err:null
      },
      resultteam:1,
      teamdelete:{
        ...rowteam
      },
      teambyid:{
        ...rowteam
      },
      players:[{
        ...rowplayer
      }],
      typeviewplayer:{
        typeviewplayer: '',
        loading: false,
        err: null,
        sendviewplayer:''
      },
      resultplayer:1,
      playerdelete:{
        ...rowplayer
      },
      playerbyid:{
        ...rowplayer
      },
      regularseasongames:{
        ...rowregularseason
      }

}
