// import { type RouteConfig, route } from "@react-router/dev/routes";
// // import { p } from "node_modules/@react-router/dev/dist/routes-DHIOx0R9";

// // export default [
// //     route(path: 'dashboard', file: 'routes/admin/dashboard.tsx')
// // ] satisfies RouteConfig;

// // import type { RouteConfig } from "@react-router/dev/routes";

// // export default [
// //   {
// //     path: "dashboard",
// //     file: "routes/admin/dashboard.tsx",
// //   },
// // ] as RouteConfig[];


// export default [
//   {
//     path: "admin",
//     file: "routes/admin/admin-layout.tsx",
//     children: [
//       {
//         path: "/admin/dashboard",
//         file: "routes/admin/dashboard.tsx",
//       },
//     ],
//   },
// ] satisfies RouteConfig;

import {type RouteConfig, route, layout, index} from "@react-router/dev/routes";

export default [

    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
        route('trips', 'routes/admin/trips.tsx'),
        route('trips/create', 'routes/admin/create-trip.tsx'),
        route('trips/:tripId', 'routes/admin/trip-detail.tsx'),
    ]),
    layout('routes/root/page-layout.tsx', [
        index('routes/root/travel-page.tsx'),
        route('/travel/:tripId', 'routes/root/travel-detail.tsx'),
        route('/travel/:tripId/success', 'routes/root/payment-success.tsx'),
    ])
] satisfies RouteConfig;