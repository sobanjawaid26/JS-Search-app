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

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = a[key];
        const varB = b[key];
        if (typeof varA === 'object' && typeof varA === 'object') {
            return compareDates(varA, varB);
        } else if (typeof varA === 'string' && typeof varB === 'string') {
            return varA.localeCompare(varB);
        } else return varA - varB;


    };
}