// Search By Name
function queryFromUsersByName(arr, query) {
    return arr.filter(function (ele) {
        return ele.firstName.toLowerCase().indexOf(query) == 0 || ele.lastName.toLowerCase().indexOf(query) == 0;
    });
}

// Search By Age
function queryFromUserByAge(arr, age) {
    return arr.filter(function (ele) {
        return ((new Date().getFullYear() - new Date(ele.DOB).getFullYear()) > age);
    })
}

// Search By Age Between
function queryFromUserByAgeBetween(arr, start, end) {
    return arr.filter(function (ele) {
        return ((new Date().getFullYear() - new Date(ele.DOB).getFullYear()) > start && (new Date().getFullYear() - new Date(ele.DOB).getFullYear()) < end);
    })
}

// Sort By FirstName
function sortByFirstNameService(arr) {
    return arr.sort(compareFirstName);
}

// Sort By Last Name
function sortByLastNameService(arr) {
    return arr.sort(compareLastName);
}

// Sort By Salary
function sortBySalaryService(arr) {
    return arr.sort((a, b) => a.salary - b.salary);
}

// Sort By Age
function sortByAgeService(arr) {
    return arr.sort(compareDates);
}
// function sortByAgeService(arr) {
//     return arr.sort((a, b) => {
//         new Date(a.DOB).getTime() - new Date(b.DOB).getTime();
//     });
// }