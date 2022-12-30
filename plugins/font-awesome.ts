import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAddressCard, faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faArrowLeft, faArrowRight, faAward, faBars, faBolt, faCalendarDays, faCalendarTimes, faCalendarWeek, faCheck, faComment, faEnvelope, faFaceSmileBeam, faFlagCheckered, faFutbol, faFutbolBall, faHandHoldingHeart, faHeartPulse, faHouseChimney, faImage, faLightbulb, faMagnifyingGlassArrowRight, faMapLocationDot, faMedal, faMountainSun, faPen, faPersonRunning, faPrint, faQuestion, faRankingStar, faShop, faStar, faSurprise, faThumbsUp, faUser, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faArtstation, faSuperpowers } from '@fortawesome/free-brands-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faBars, faXmark, faFacebook, faInstagram, faLinkedin, faMedal, faHeartPulse, faPersonRunning, faRankingStar, faAward, faHouseChimney, faStar, faPen, faPrint, faThumbsUp, faShop, faUsers, faHandHoldingHeart, faMapLocationDot, faCalendarDays, faCalendarTimes, faCalendarWeek, faComment, faAngleDown, faAngleUp, faAngleRight, faAngleLeft, faCheck, faAddressCard, faUser, faArrowRight, faArrowLeft, faEnvelope, faQuestion, faImage, faFaceSmileBeam, faBolt, faArtstation, faLightbulb, faMagnifyingGlassArrowRight, faSuperpowers, faSurprise )
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
 })