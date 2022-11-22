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
    latestNews: [
        {
            title: 'Marketing Ideas',
            author: 'Alex',
            pubblicated: '23/10/2018',
            img: '../../public/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',
            description: 'Business woman talking on the phone',
            link: '#'
        },
        {
            title: 'Rest During Working Hours',
            author: 'Megan',
            pubblicated: '26/05/2018',
            img: '../../public/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',
            description: 'Business man at his desk',
            link: '#'
        },
        {
            title: 'Develop Your Startup Idea',
            author: 'Jim',
            pubblicated: '09/09/2018',
            img: '../../public/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',
            description: 'Office intern',
            link: '#'
        }
    ],
    partners:[
        {
            name: 'a Vant Garde',
            img: '../../public/images/client-1-2x.png'
        },
        {
            name: 'Fastlane',
            img: '../../public/images/client-9-2x.png'
        },
        {
            name: 'Ron Jones',
            img: '../../public/images/client-7-2x.png'
        },
        {
            name: "Chippy's",
            img: '../../public/images/client-3-2x.png'
        },
        {
            name: "Bull's Eye",
            img: '../../public/images/client-4-2x.png'
        },
        {
            name: 'Mighty Furnitures',
            img: '../../public/images/client-5-2x.png'
        }


    ]
})