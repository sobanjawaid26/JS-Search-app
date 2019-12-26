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

        const varA = (typeof a[key] === 'string' && !isDate(a[key])) ?
            a[key].toUpperCase() : (typeof a[key] === 'string' && isDate(a[key]) ? new Date(a[key]).getTime() : parseInt(a[key]));
        const varB = (typeof b[key] === 'string' && !isDate(b[key])) ?
            b[key].toUpperCase() : (typeof b[key] === 'string' && !isDate(b[key]) ? new Date(b[key]).getTime() : parseInt(b[key]));

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}