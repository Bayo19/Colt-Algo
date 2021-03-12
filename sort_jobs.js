const jobs = [{
        job: 'Teaching Assistant - Edmonton Academy',
        closing: 14,
        pay: 18000

    },
    {
        job: 'Admin Officer - Grange Park School Primary',
        closing: 16,
        pay: 19000
    },
    {
        job: 'Student Manager - Lea Valley High School',
        closing: 19,
        pay: 24000
    },
    {
        job: 'Teaching Assistant - Hazelbury primary school',
        closing: 21,
        pay: 17000
    },
    {
        job: 'Learning Support Assistant - Keys Meadow Primary',
        closing: 12,
        pay: 18000
    },
    {
        job: 'Specialist Teaching Assistant - Fern House School',
        closing: 12,
        pay: 21000
    },
    {
        job: 'Early years  learning support assistant - Freezy water St georges',
        closing: 16,
        pay: 17000
    },
    {
        job: 'Primary Teaching Assistant - Ark John keats Academy',
        closing: 19,
        pay: 22000
    },
    {
        job: 'Admissions Admin Officer - Keys Meadow Primary',
        closing: 23,
        pay: 19000
    },

    {
        job: 'Teaching Assistant - Coleridge Primary School ',
        closing: 16,
        pay: 19000
    },
    {
        job: 'Attendance & Engagement Officer - Haringey Learning Partnership ',
        closing: 20,
        pay: 24
    }
]


function sortJobs(arr) {
    return arr.sort(function(a, b) {
        if (b.closing > a.closing) {
            return -1
        }
        if (a.closing < b.closing) {
            return 1
        }
    })
}

let JobsList = sortJobs(jobs).map(function(a) {
    return `${a.job}, ${a.closing}/10. Pay: £${a.pay}`
})
console.log(`\n`.repeat(100))
console.log(JobsList)