import _ from 'lodash'
import {fromJS} from 'immutable'

export let emptyWork = fromJS({
    title: undefined,
    date: undefined,
    artist: undefined,
    medium: undefined,
    dimensions : {
      width: undefined,
      height: 10,
      depth: undefined,
      units: 'in'
    },
    dimensions_words: undefined,
    units: 'in'
  });

export let work = {
  name: 'Work Title',
  artist: {name: 'Alex Dodge'},
  medium: 'painting',
  dimensions: {width: 10, height: 10, depth: 1, units: 'cm'},
  price: {amount: 100, currency:'usd'},
  creationDate: Date.parse('January 10, 2017'),
  location: {current: {label: 'studio', address: "630 Flushing Ave, Brooklyn, NY", since: Date.parse('April 20, 2017'), until: Date.parse('December 31, 2017')}}
}

export function generateWorks(n = 10){
  let works = []
  for (var i = 0; i < n; i++) {
    let w = _.cloneDeep(work)
    w.artist.name = _.sample(['Rune Madsen', 'Johnny Lu', 'Alex Dodge', 'Ezer Longinus'])
    w.name = _.sample(['Dead Dog', 'Funny Cat', 'Jumping the hoop', 'Evening with Rose'])
    w.dimensions.width = _.sample([10,20,100,43])
    w.dimensions.height = _.sample([19,20,100,43])
    let d = _.sample(['January 10, 2017', 'March 20, 2010', 'April 4, 2014', 'September 22, 1920'])
    w.date = Date.parse(d)
    w.location = _.sample(['studio', 'Tate Modern', 'MoMA', 'the trash'])
    w.price.amount = _.sample([100,250,3000,4500,1300000])
    works.push(w)
  }
  return works
}