import Vue from 'vue';

const months = [
    "January",
    "Febryary",
    "March",
    "Apir",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const dateFilter = (value) => {
    return formatDate(value);
}

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const formattedDate = day + "." + months[month] + " " + year;
    return formattedDate;
}

Vue.filter('date', dateFilter);