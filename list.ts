// [
//     {
//         page: "travelsg",
//         name: "TravelSG",
//         description: "Bus Arrival Tracker. Mainly featuring Live Activity for Bus Arrival.",
//         apple_link: "https://apps.apple.com/sg/app/travel-sg/id6444826465",
//         image: "/assets/travelsg/image.png",
//         icon_location: TravelSG_Icon,
//         tools: [
//             swiftui_tool,
//             firebase_tool
//         ],
//         sections: [
//             { 
//                 title: "App Architecture & Structure",
//                 description: "High-level overview of system patterns, shared resources, and backend integration.",
//                 platform: architecture_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Firebase Backend Services",
//                         description: "Node.js Cloud Functions executing scheduled tasks, APNs notification delivery, and Live Activity token lifecycle management.",
//                         image: "https://firebasestorage.googleapis.com/v0/b/main-website-398409.firebasestorage.app/o/travelsg%2Farchitecture%2Fdia-1.png?alt=media&token=81e4fb77-9d5a-44a0-a050-dc517c03ec96"
//                     },
//                     {
//                         title: "Cross-Device Sync",
//                         description: "iCloud CoreData synchronization for favourited items, stored locations and preferences, ensuring a seamless experience across devices.",
//                         image: "https://firebasestorage.googleapis.com/v0/b/main-website-398409.firebasestorage.app/o/travelsg%2Farchitecture%2Fdia-2.png?alt=media&token=4e750a08-dc17-4f33-981a-16b0f3d582f6"
//                     },
//                     {
//                         title: "Singleton Framework",
//                         description: "Centralized models, networking, viewmodel, and database using a shared memory serving iOS, watchOS, and Widget targets.",
//                         image: "https://firebasestorage.googleapis.com/v0/b/main-website-398409.firebasestorage.app/o/travelsg%2Farchitecture%2Fdia-3.png?alt=media&token=9ecee71e-6700-4f46-9e00-380526f9876e"
//                     }
//                 ]
//             },
//             { 
//                 title: "iOS",
//                 description: "Core mobile application delivering comprehensive public transport and traffic tracking.",
//                 platform: mobile_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "Advanced MapKit Rendering",
//                         description: "Interactive map overlays displaying bus stops, live traffic cameras, incidents, and polylines.",
//                         image: "ios_mapkit_rendering.png"
//                     },
//                     {
//                         title: "Traffic Status & Camera Integration",
//                         description: "Interactive map overlays displaying bus stops, live traffic cameras, incidents, and polylines.",
//                         image: "ios_mapkit_rendering.png"
//                     },
//                     {
//                         title: "Live Activities & Dynamic Island",
//                         description: "Real-time tracking for bus route travel and arrivals utilizing ActivityKit and Firebase pushes.",
//                         image: "ios_live_activities.png"
//                     },
//                     {
//                         title: "Custom User Preferences",
//                         description: "Dynamic app icon selection, customizable widget color profiles, and adaptive UI themes.",
//                         image: "ios_user_preferences.png"
//                     },
//                     {
//                         title: "App Intents & Siri Shortcuts",
//                         description: "SiriKit integration enabling custom voice commands and workflow automations (TravelSG-Intent).",
//                         image: "ios_app_intents.png"
//                     }
//                 ]
//             },
//             { 
//                 title: "iPadOS",
//                 description: "Universal SwiftUI implementation scaled for tablet displays.",
//                 platform: tablet_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "Adaptive UI Layouts",
//                         description: "Multi-column structural designs utilizing SwiftUI view modifiers to handle variable screen dimensions.",
//                         image: "ipados_adaptive_ui.png"
//                     },
//                 ]
//             },
//             { 
//                 title: "watchOS",
//                 description: "Standalone companion application optimized for Apple Watch interaction.",
//                 platform: watch_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "Native MapView with Advance Clustering UI",
//                         description: "Native MapView rendering nearby bus stops, with advance clustering UI to display bus stops.",
//                         image: "watchos_mapkit.png"
//                     },
//                     {
//                         title: "Real-Time Bus Arrival Timings",
//                         description: "Fetching and parsing live bus arrival timings via LTA DataMall API.",
//                         image: "watchos_transport_data.png"
//                     }
//                 ]
//             },
//             { 
//                 title: "Widgets",
//                 description: "Glanceable WidgetKit components providing asynchronous data on Home and Lock screens.",
//                 platform: widget_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Interactive Home Screen Widgets",
//                         description: "Live updating modules for bus arrival countdowns and HDB carpark lot availability.",
//                         image: "widget_home_screen.png"
//                     },
//                     {
//                         title: "Lock Screen Accessories",
//                         description: "Minimalist complication-style widgets for immediate transit metric visibility.",
//                         image: "widget_lock_screen.png"
//                     },
//                     {
//                         title: "Traffic Camera Snapshots",
//                         description: "Widget rendering live static image feeds from LTA highway traffic cameras.",
//                         image: "widget_traffic_camera.png"
//                     },
//                     {
//                         title: "User-Configurable Intents",
//                         description: "Parameter-driven widget configurations allowing users to select specific bus stops or locations directly from the Home Screen.",
//                         image: "widget_configurable_intents.png"
//                     }
//                 ]
//             }
//         ]
//     }, 
//     {
//         page: "twsj",
//         name: "The Watch Street Journal",
//         description: "News on the Apple Watch. Sourced from Google News.",
//         apple_link: "https://apps.apple.com/sg/app/the-watch-street-journal/id6450393866",
//         image: "/assets/twsj/image.png",
//         github_link: "https://github.com/Ju-Long/The-Watch-Street-Journal.git",
//         icon_location: TWSJ_Icon,
//         tools: [
//             swiftui_tool
//         ],
//         sections: [
//             { 
//                 title: "App Architecture & Structure",
//                 description: "Core networking, data parsing, and routing infrastructure.",
//                 platform: architecture_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "XML Parsing & Networking",
//                         description: "Utilizes Alamofire for HTTP requests and Fuzi for XML document traversal to parse Google News RSS feeds into structured Swift models.",
//                         image: "network_architecture_image.png"
//                     },
//                     {
//                         title: "Redirect Resolution",
//                         description: "Executes asynchronous HTML scraping to resolve Google News redirect URLs into absolute destination links for direct viewing.",
//                         image: "redirect_resolution_image.png"
//                     },
//                     {
//                         title: "Dynamic Localization",
//                         description: "Leverages device locale to inject dynamic country and language parameters into Google News queries.",
//                         image: "localization_logic_image.png"
//                     }
//                 ]
//             },
//             { 
//                 title: "watchOS",
//                 description: "Native watchOS user interface and interaction handling.",
//                 platform: watch_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "Native Carousel & Search",
//                         description: "Implements SwiftUI List with .carousel styling and .searchable modifiers for efficient data parsing and topic filtering.",
//                         image: "carousel_search_image.png"
//                     },
//                     {
//                         title: "Ephemeral In-App Browser",
//                         description: "Integrates ASWebAuthenticationSession with prefersEphemeralWebBrowserSession for secure article rendering directly on the watch.",
//                         image: "in_app_browser_image.png"
//                     },
//                     {
//                         title: "Asynchronous Image Caching",
//                         description: "Uses Kingfisher (KFImage) to asynchronously fetch, display progress views, and cache source favicons to disk.",
//                         image: "image_caching_image.png"
//                     }
//                 ]
//             },
//             { 
//                 title: "Widgets",
//                 description: "Complication extensions via WidgetKit for watch face integration.",
//                 platform: widget_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Asynchronous Timeline Provider",
//                         description: "Executes utility-priority Tasks within getTimeline to fetch the latest headlines and schedules 30-minute refresh intervals.",
//                         image: "timeline_provider_image.png"
//                     },
//                     {
//                         title: "Accessory Rectangular Complication",
//                         description: "Utilizes StaticConfiguration to support the .accessoryRectangular widget family with container background modifiers.",
//                         image: "accessory_rectangular_image.png"
//                     },
//                     {
//                         title: "On-the-fly Favicon Extraction",
//                         description: "Parses host domains from resolved news URLs to query Google's S2 API for favicons, converting data to UIImage for widget snapshots.",
//                         image: "favicon_extraction_image.png"
//                     }
//                 ]
//             }
//         ]
//     }, 
//     {
//         page: "merlion-news",
//         name: "Merlion News",
//         description: "News of Singapore. All in one app.",
//         apple_link: "https://apps.apple.com/sg/app/merlion-news/id6451491959",
//         image: "/assets/merlion-news/image.png",
//         icon_location: Merlion_News_Icon,
//         tools: [
//             swiftui_tool
//         ],
//         sections: [
//             { 
//                 title: "App Architecture & Structure",
//                 description: "A reactive, cloud-native news aggregator utilizing a serverless backend to process and synchronize real-time news data across Apple and Android ecosystems.",
//                 platform: architecture_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Firebase-Driven Real-time Synchronization",
//                         description: "Leverages Google Firestore as a central source of truth, enabling seamless data persistence and state synchronization across iOS, Android, and macOS clients.",
//                         image: "architecture_sync_diagram"
//                     },
//                     {
//                         title: "Serverless Event-Driven Workers",
//                         description: "Node.js Cloud Functions monitor Firestore document creation to trigger source-specific scraping workers (ST, CNA, Mothership, TodayOnline, AsiaOne), populating enriched news content and handling automatic cleanup of legacy data.",
//                         image: "cloud_functions_workflow"
//                     },
//                     {
//                         title: "Unified News Protocol",
//                         description: "Implements a robust 'NewsProtocol' to handle both single articles and 'GroupedNews'—an intelligent clustering system for similar news URLs across different categories.",
//                         image: "data_model_protocol"
//                     }
//                 ]
//             },
//             { 
//                 title: "iOS & Android",
//                 description: "Native mobile experiences built with SwiftUI and Jetpack Compose, emphasizing performance, accessibility, and high-fidelity UI components.",
//                 platform: mobile_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "In-App Multi-Preference Reading Method",
//                         description: "Read article in-app or with default webview, with just 1 tap.",
//                         image: "native_reader_view"
//                     },
//                     {
//                         title: "Topic Based Filtering",
//                         description: "Fetch News via topics, read what you want to read.",
//                         image: "tts_playback_controls"
//                     },
//                     {
//                         title: "Multi-Quick Access Menu",
//                         description: "Copy News Title, Description, URL, Cover Image or Share for any articles, with built in preview.",
//                         image: "mobile_filter_interface"
//                     }
//                 ]
//             },
//             { 
//                 title: "iPadOS & Android Tablets",
//                 description: "Adaptive layouts designed for large-screen productivity, utilizing sidebar navigation and grid-based content discovery.",
//                 platform: tablet_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "NavigationSplitView Architecture",
//                         description: "Utilizes a three-column or sidebar-detail layout to provide quick access to topic categories while maintaining focus on the primary news feed.",
//                         image: "tablet_split_view"
//                     },
//                     {
//                         title: "Adaptive Responsive Grids",
//                         description: "Dynamically adjusts news cell density using LazyVerticalGrid (Android) and WrappingHStack (iOS) to optimize information density on larger screens.",
//                         image: "tablet_grid_layout"
//                     }
//                 ]
//             },
//             { 
//                 title: "macOS",
//                 description: "A desktop-first news experience with keyboard shortcuts and system-level integration for power users.",
//                 platform: desktop_platform,
//                 feature_type: "frames",
//                 features: [
//                     {
//                         title: "Desktop Power-User Shortcuts",
//                         description: "Full implementation of macOS keyboard shortcuts for rapid navigation, including Command+R for refresh, Command+B for bookmarks, and Command+P for text-to-speech.",
//                         image: "macos_toolbar_shortcuts"
//                     },
//                     {
//                         title: "Native Desktop Notifications",
//                         description: "Integrated with the macOS Notification Center to provide immediate announcements of breaking news directly to the desktop.",
//                         image: "macos_notification_alert"
//                     }
//                 ]
//             },
//             { 
//                 title: "Widgets",
//                 description: "Glanceable information delivery using WidgetKit to keep users updated without opening the application.",
//                 platform: widget_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Dynamic Intent-Based Configuration",
//                         description: "WidgetProvider utilizes user-defined intents to allow customization of the news source and title visibility directly from the home screen.",
//                         image: "widget_configuration_screen"
//                     },
//                     {
//                         title: "Multi-Size Visual Templates",
//                         description: "Supports Small, Medium, Large, and Extra Large families, featuring background image processing and intelligent text layout for at-a-glance updates.",
//                         image: "widget_family_previews"
//                     }
//                 ]
//             } 
//         ]
//     },
//     {
//         page: "peach-studio",
//         name: "The Peach Studio",
//         description: "Workout and Fitness. By The Peach Studio",
//         web_link: "https://peachstudio.app/",
//         image: "/assets/peachstudio/Web.png",
//         icon_location: PeachStudio_Icon,
//         tools: [
//             firebase_tool,
//             stripe_tool
//         ],
//         sections: [
//             { 
//                 title: "App Architecture & Structure",
//                 description: "A highly scalable, serverless web application built with Astro and powered by Firebase and Stripe. Designed for blazing-fast performance and seamless role-based routing.",
//                 platform: architecture_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Serverless Firebase Backend",
//                         description: "Leveraged Firebase Firestore for real-time data syncing, Firebase Auth for secure user management, and Cloud Functions for complex backend logic like webhook handling and automated MJML email notifications.",
//                         image: "/assets/portfolio/architecture-firebase.png"
//                     },
//                     {
//                         title: "Role-Based Access Control (RBAC)",
//                         description: "Implemented strict routing and layout isolation (Admin vs. User layouts) ensuring the Coach has full CRM capabilities while users have a secure, personalized portal.",
//                         image: "/assets/portfolio/architecture-rbac.png"
//                     },
//                     {
//                         title: "Seamless Stripe Integration",
//                         description: "Integrated Stripe API for end-to-end subscription management, handling trials, recurring billing, invoice generation, and secure checkout flows directly within the app.",
//                         image: "/assets/portfolio/architecture-stripe.png" 
//                     }
//                 ]
//             },
//             { 
//                 title: "The Peach Studio Platform",
//                 description: "A comprehensive digital ecosystem bridging the gap between personal trainers and their clients through tailored fitness and nutrition tracking.",
//                 platform: web_platform,
//                 feature_type: "slides",
//                 features: [
//                     {
//                         title: "Coach CRM & Admin Dashboard",
//                         description: "A centralized command center for the studio owner to manage client subscriptions, monitor daily progress, and oversee overall gym operations.",
//                         image: "/assets/portfolio/feature-admin-dashboard.png"
//                     },
//                     {
//                         title: "Personalized Workout Engine",
//                         description: "Allows the coach to create, group, and assign specific workout routines (categorized by muscle groups) directly to individual user profiles for them to follow and log.",
//                         image: "/assets/portfolio/feature-workout-builder.png"
//                     },
//                     {
//                         title: "Diet & Macro Tracking",
//                         description: "Users can upload daily food entries and track their diet. The coach can assign specific meal plans, review food logs, and adjust nutritional goals in real-time.",
//                         image: "/assets/portfolio/feature-diet-tracker.png" 
//                     },
//                     {
//                         title: "Smart Session Scheduling",
//                         description: "An integrated booking system that allows users to schedule, reschedule, or cancel gym sessions based on the coach's real-time availability and calendar synchronization.",
//                         image: "/assets/portfolio/feature-scheduling.png" 
//                     }
//                 ]
//             },
//         ]
//     }
// ]