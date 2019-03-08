import { combineReducers } from 'redux'
import slider from './slider'
import day from './day'
import event from './event'
import circle from './circle'
import pinpoint from './pinpoint'
import subject from './subject'
import log from './log'
import map from './map'


const rootReducer = combineReducers({
  slider,
  day,
  event,
  circle,
  pinpoint,
  subject,
  log,
  map
})

export default rootReducer
