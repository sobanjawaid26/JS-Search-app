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

function sortGeneric(data, key) {
    console.log(typeof data[0][key]);
    if (typeof data[0][key] === 'string') {
        console.log(data[0][key]);
        return data.sort((a, b) => a[key].localeCompare(b[key]));
    } else if (typeof data[0][key] === 'number') {
        return data.sort((a, b) => a[key] - b[key]);
    }
}




// if (typeof data[0][key] === 'string') {
//     data.sort(
//         (item1, item2) => {
//             if (item1[key] < item2[key])
//                 return -1;
//             if (item1[key] > item2[key])
//                 return 1;
//             return 0;
//         })
// }
//         })    }
//      else if (typeof key === 'string') {
//     data.sort(
//         (item1, item2) => {
//             if (item1[key] < item2[key])
//                 return -1;
//             if (item1[key] > item2[key])
//                 return 1;
//             return 0;
//         })
// } else if (typeof key === 'object') {
//     (item1, item2) => {
//         if (new Date(item1.DOB).getTime() < new Date(item2.DOB).getTime())
//             return -1;
//         if (new Date(item1.DOB).getTime() > new Date(item2.DOB).getTime())
//             return 1;
//         return 0;
//     }
// }