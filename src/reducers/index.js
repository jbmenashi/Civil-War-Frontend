import { combineReducers } from 'redux'
import slider from './slider'
import day from './day'
import event from './event'
import circle from './circle'
import pinpoint from './pinpoint'
import subject from './subject'
import log from './log'


const rootReducer = combineReducers({
  slider,
  day,
  event,
  circle,
  pinpoint,
  subject,
  log
})

export default rootReducer
