import {reactive} from 'vue';

export const store = reactive({
    websiteSections: [
        {
            name: 'Home',
            link: '#'
        },
        {
            name: 'About',
            link: '#'
        },
        {
            name: 'Services',
            link: '#'
        },
        {
            name: 'Showcase',
            link: '#'
        },
        {
            name: 'Blog',
            link: '#'
        },
        {
            name: 'Contact',
            link: '#'
        }
    ],
    features:[
        {
            type: 'Speed Optimization',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
            icon: ''
        },
        {
            type: 'Cloud Solutions',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
            icon: ''
        },
        {
            type: 'Website Design',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
            icon: ''
        },
        {
            type: 'Online Marketing',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
            icon: ''
        }
    ],
    caseStudies: [
        {
            name: 'Roses.com',
            previewImg: '/images/ina-soulis-227104-unsplash-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'Lunapark.com',
            previewImg: '/images/sunisa-misa-531163-unsplash-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'Yellowshoes.com',
            previewImg: '/images/355H-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'Comfyoffice.com',
            previewImg: '/images/photo-1448932252197-d19750584e56-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'Paperboats.com',
            previewImg: '/images/business-competition-PB366D8-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'TheSofa.com',
            previewImg: '/images/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'Mongo.com',
            previewImg: '/images/aa9a4539-PQGJ7HU-1024x1024.jpg',
            shop: '#',
            demo: '#'
        },
        {
            name: 'TheBlueLemon.com',
            previewImg: '/images/cody-davis-253928-unsplash-1024x1024.jpg',
            shop: '#',
            demo: '#'
        }
    ],
    latestNews: [
        {
            title: 'Marketing Ideas',
            author: 'Alex',
            pubblicated: '23/10/2018',
            img: '/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',
            description: 'Business woman talking on the phone',
            link: '#'
        },
        {
            title: 'Rest During Working Hours',
            author: 'Megan',
            pubblicated: '26/05/2018',
            img: '/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',
            description: 'Business man at his desk',
            link: '#'
        },
        {
            title: 'Develop Your Startup Idea',
            author: 'Jim',
            pubblicated: '09/09/2018',
            img: '/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',
            description: 'Office intern',
            link: '#'
        }
    ],
    partners:[
        {
            name: 'a Vant Garde',
            img: '/images/client-1-2x.png'
        },
        {
            name: 'Fastlane',
            img: '/images/client-9-2x.png'
        },
        {
            name: 'Ron Jones',
            img: '/images/client-7-2x.png'
        },
        {
            name: "Chippy's",
            img: '/images/client-3-2x.png'
        },
        {
            name: "Bull's Eye",
            img: '/images/client-4-2x.png'
        },
        {
            name: 'Mighty Furnitures',
            img: '/images/client-5-2x.png'
        }
    ],
    quickLinks: [
        {
            name: 'Careers',
            url: '#'
        },
        {
            name: 'News',
            url: '#'
        },
        {
            name: 'Terms of use',
            url: '#'
        },
        {
            name: 'Privacy Projects',
            url: '#'
        },
        {
            name: 'About',
            url: '#'
        },
        {
            name: 'Contact',
            url: '#'
        }
    ],
    contacts: {
        referent: 'Patricia C.Amedee',
        address: '4401 Waldeck Street Grapevine Nashville, TX 76051',
        mail: 'info@yourdomain.com',
        phoneNumber: '+99 (0) 101 0000 888'
    }
})