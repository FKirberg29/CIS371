console.log("Hello World")

//Area 4
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string;
}

const myCourses: Array<Course> = [
    {
        courseNumber: "CIS 163",
        courseName: "Computer Science II",
        semesterTaken: "Fall 2021"
    },
    {
        courseNumber: "CIS 353",
        courseName: "Database",
        semesterTaken: "Winter 2022"
    },
    {
        courseNumber: "CIS 351",
        courseName: "Computer Org & Assembly",
        semesterTaken: "Fall 2022"
    },
    {
        courseNumber: "CIS 371",
        courseName: "Web Application Programming",
        semesterTaken: "Winter 2023"
    }
]

const tArea4 = document.getElementById("area4-table")
const myTable = document.createElement("table")
const tableBody = document.createElement("tbody")
myTable.style.border = "1px solid"
const headerRow = document.createElement("tr")
const tableHeader1 = document.createElement("th")
const tableHeader2 = document.createElement("th")
const tableHeader3 = document.createElement("th")
const tableHeader1Text = document.createTextNode("Course Number")
const tableHeader2Text = document.createTextNode("Course Name")
const tableHeader3Text = document.createTextNode("Semester Taken")
tableHeader1.appendChild(tableHeader1Text)
tableHeader2.appendChild(tableHeader2Text)
tableHeader3.appendChild(tableHeader3Text)
headerRow.appendChild(tableHeader1)
headerRow.appendChild(tableHeader2)
headerRow.appendChild(tableHeader3)
myTable.appendChild(headerRow)
myTable.appendChild(tableBody)
for (let course of myCourses) {
    const entryTR = document.createElement("tr")
    const entryTD1 = document.createElement("td")
    const entryTD2 = document.createElement("td")
    const entryTD3 = document.createElement("td")
    const td1Text = document.createTextNode(`${course.courseNumber}`)
    const td2Text = document.createTextNode(`${course.courseName}`)
    const td3Text = document.createTextNode(`${course.semesterTaken}`)

    entryTD1.appendChild(td1Text)
    entryTD2.appendChild(td2Text)
    entryTD3.appendChild(td3Text)

    entryTR.appendChild(entryTD1)
    entryTR.appendChild(entryTD2)
    entryTR.appendChild(entryTD3)
    tableBody.appendChild(entryTR)
}
tArea4?.appendChild(myTable)
///////////////////////////////////////////////////////////////////////


//Area 6
type Company = {
    name: string,
    abbreviation: string,
    url: string
}

const myCompanies: Array<Company> = [
    {
        name: "Kentucky Fried Chicken",
        abbreviation: "KFC",
        url: "https://www.kfc.com/"
    },
    {
        name: "Home Box Office",
        abbreviation: "HBO",
        url: "https://www.hbo.com/"
    },
    {
        name: "British Broadcast Corporation",
        abbreviation: "BBC",
        url: "https://www.bbc.com/"
    }
]

const tArea6 = document.getElementById("area6-list")
const myList = document.createElement("ul")
for (let company of myCompanies) {
    const entry = document.createElement("li")
    const entryText = document.createElement("a")
    entryText.innerText = company.abbreviation
    entryText.setAttribute("href", `${company.url}`)
    entry.appendChild(entryText)
    myList.appendChild(entry)
}
tArea6?.appendChild(myList)
/////////////////////////////////////////////////////////////////


//Area 8
type SocialMedia = {
    icon: string,
    url: string
}

const mySocials: Array<SocialMedia> = [
    {
        icon: "facebookicon.png",
        url: "https://www.facebook.com/"
    },
    {
        icon: "twittericon.png",
        url: "https://twitter.com/?lang=en"
    },
    {
        icon: "instagramicon.png",
        url: "https://www.instagram.com/"
    },
    {
        icon: "githubicon.png",
        url: "https://github.com/"
    },
    {
        icon: "pintresticon.png",
        url: "https://www.pinterest.com/"
    },
]

const tArea8 = document.getElementById("area8-icons")
for (let social of mySocials) {
    const entry = document.createElement("a")
    entry.innerHTML = `<img src="${social.icon}" class="icon">`
    entry.setAttribute("href", `${social.url}`)
    tArea8?.appendChild(entry)
}