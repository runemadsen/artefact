import _ from 'lodash'
import {fromJS} from 'immutable'
import uuid from 'uuid'

export let emptyWork = fromJS({
    id: uuid.v4(),
    title: "",
    date: "",
    artist: "",
    medium: "",
    dimensions : {
      width: "",
      height: "",
      depth: "",
      units: 'in'
    },
    dimensions_words: "",
    editioned: false
  });

export let work = {
  title: 'Work Title',
  artist: {name: 'Alex Dodge'},
  medium: 'painting',
  images: [
    "/assets/images/01.jpg",
    "/assets/images/02.jpg",
    "/assets/images/03.jpg",
    "/assets/images/04.jpg",
    ],
  dimensions: {width: 10, height: 10, depth: 1, units: 'cm'},
  price: {amount: 100, currency:'usd'},
  creationDate: Date.parse('January 10, 2017'),
  location: { history: [
    {label: 'Studio', address: "630 Flushing Ave, Brooklyn, NY", since: Date.parse('April 20, 2017')},
    {label: 'MoMA', address: "11 W 53rd St, New York, NY", since: Date.parse('June 11, 2014')},
    {label: 'Gagosian', address: "522 W 21st St, New York, NY", since: Date.parse('April 20, 2017'), until: Date.parse('December 31, 2017')},

    ]
  },
}

export function generateWorks(n = 10){
  let works = []
  for (var i = 0; i < n; i++) {
    let w = _.cloneDeep(work)
    // w.artist.name = _.sample(['Rune Madsen', 'Johnny Lu', 'Alex Dodge', 'Ezer Longinus'])
    w.id = uuid.v4()
    w.title = _.sample(['Dead Dog', 'Funny Cat', 'Jumping through the hoop', 'Evening with Rose'])
    w.dimensions.width = _.sample([10,20,100,43])
    w.dimensions.height = _.sample([19,20,100,43])
    let d = _.sample(['January 10, 2017', 'March 20, 2010', 'April 4, 2014', 'September 22, 1920'])
    w.date = Date.parse(d)
    w.location.current = _.sample(w.location.history)
    w.price.amount = _.sample([100,250,3000,4500,1300000])
    w.image = _.sample(w.images)
    works.push(w)
  }
  return works
}