
import about from '../components/navigation/about'
import communities from '../components/navigation/communities'
import events from '../components/navigation/events'
import friends from '../components/navigation/friends'
import gallery from '../components/navigation/gallery'
import links from '../components/navigation/links'
import other from '../components/navigation/other'
import tributes from '../components/navigation/tributes'
import contact from '../components/headernav/contact'
import help from '../components/headernav/help'
import plans from '../components/headernav/plans'
import reviews from '../components/headernav/reviews'
import writeSomething from '../components/navigation/tributes-route/writeSomething'
import sharePhoto from '../components/navigation/tributes-route/sharePhoto'
import candle from '../components/navigation/tributes-route/candle'
import flower from '../components/navigation/tributes-route/flower'


export default [
        {
            path: '/about',
            component: about
        },
        {
            path: '/communities',
            component: communities
        },
        {
            path: '/events',
            component: events
        },
        {
            path: '/friends',
            component: friends
        },
        {
            path: '/gallery',
            component: gallery
        },
        {
            path: '/links',
            component: links
        },
        {
            path: '/other',
            component: other
        },
        {
            path: '/tributes',
            component: tributes,
            children: [
                {
                    path: '/write',
                    component: writeSomething
                },
                {
                    path: '/shareaphoto',
                    component: sharePhoto
                },
                {
                    path: '/candle',
                    component: candle
                },
                {
                    path: '/flower',
                    component: flower
                }
            ]
        },
        {
            path: '/help',
            component: help
        },
        {
            path: '/reviews',
            component: reviews
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/plans',
            component: plans
        }
    ]