// compare by first name
function compareFirstName(item1, item2) {
    if (item1.firstName < item2.firstName)
        return -1;
    if (item1.firstName > item2.firstName)
        return 1;
    return 0;
}
// compare by last name
function compareLastName(item1, item2) {
    if (item1.lastName < item2.lastName)
        return -1;
    if (item1.lastName > item2.lastName)
        return 1;
    return 0;
}

// compare to Dates
function compareDates(item1, item2) {
    if (new Date(item1).getTime() < new Date(item2).getTime())
        return -1;
    if (new Date(item1).getTime() > new Date(item2).getTime())
        return 1;
    return 0;
}

function isDate(s) {
    if (isNaN(s) && !isNaN(Date.parse(s))) return true;
    else return false;
}