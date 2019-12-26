var isFnRev = true,
    isLnRev = false,
    isAgeRev = false,
    isSalaryRev = false;
class Users {
    constructor(firstName, lastName, DOB, salary, phoneNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.salary = salary;
        this.phoneNo = phoneNo;
    }
}
const users = [
    new Users('Charlotte', 'Farrell', new Date('9/15/1955'), 45567, 4713689369),
    new Users('Adison', 'Walker', new Date('5/31/1961'), 142624, 4712839103),
    new Users('Thomas', 'Tucker', new Date('1/11/1962'), 178410, 1799024034),
    new Users('Henry', 'Lloyd', new Date('3/3/1964'), 180130, 5536849969),
    new Users('April', 'Hall', new Date('5/21/1965'), 143776, 1796915988),
    new Users('Melanie', 'Warren', new Date('5/4/1966'), 174655, 2816902940),
    new Users('Arnold', 'Morris', new Date('7/19/1970'), 97322, 0076394720),
    new Users('Vivian', 'Miller', new Date('1/3/1971'), 73648, 5967684360),
    new Users('Jared', 'Allen', new Date('3/29/1975'), 72713, 8338542177),
    new Users('Melissa', 'Wilson', new Date('2/4/1977'), 43748, 3774139795),
    new Users('Edgar', 'Robinson', new Date('3/19/1977'), 124698, 9691209851),
    new Users('Abigail', 'Morgan', new Date('11/7/1987'), 122906, 3151915322),
    new Users('Myra', 'Rogers', new Date('1/7/1989'), 184584, 6635263321),
    new Users('Caroline', 'Edwards', new Date('8/30/1990'), 101854, 4876466729),
    new Users('Briony', 'Fowler', new Date('9/27/1990'), 66969, 0056298252),
    new Users('Cadie', 'Murray', new Date('12/7/1990'), 72351, 5092408920),
    new Users('James', 'Ryan', new Date('10/5/1993'), 52813, 0602047024),
    new Users('Alexander', 'Ryan', new Date('3/7/1997'), 151985, 9691753580),
    new Users('Jessica', 'Howard', new Date('11/17/1997'), 39768, 9917438723),
    new Users('Kelsey', 'Warren', new Date('4/19/1977'), 178544, 6914901969),
    new Users('Aidan', 'Perone', new Date('2/27/2005'), 433445, 2364892627),
    new Users('Hanson', 'Egerton', new Date('1/10/1986'), 8619612, 1025933368),
    new Users('Meyer', 'Carsey', new Date('5/4/1987'), 3478806, 8572482959),
    new Users('Kim', 'Rochell', new Date('7/14/1996'), 8215119, 6957491935),
    new Users('Christine', 'Traves', new Date('6/30/1991'), 5533951, 7965520066),
    new Users('Dougie', 'Rostern', new Date('6/22/1997'), 7859413, 1402421506),
    new Users('Leontyne', 'Goodanew', new Date('1/12/2005'), 8350597, 3372328690),
    new Users('Leigh', 'Pharrow', new Date('7/15/1982'), 9274541, 2179225790),
    new Users('Deloris', 'Clace', new Date('7/22/1992'), 1852003, 3115142636),
    new Users('Celka', 'Hegdonne', new Date('5/12/1994'), 2642267, 1214437585),
    new Users('Casar', 'Burvill', new Date('5/5/1986'), 4078381, 1229336370),
    new Users('Fidelio', 'Mazella', new Date('8/7/1991'), 3776876, 3565452039),
    new Users('Jordon', 'Geistmann', new Date('9/19/2002'), 5223302, 8499058877),
    new Users('Lou', 'Chance', new Date('6/3/1984'), 5904754, 7974181004),
    new Users('Lisle', 'Wybron', new Date('12/21/1997'), 7083880, 3145514448),
    new Users('Margareta', 'Swires', new Date('1/22/1980'), 8568651, 7259247078),
    new Users('Harrie', 'Insull', new Date('11/19/1991'), 6976141, 9757100491),
    new Users('Herman', 'Loddon', new Date('8/11/1997'), 8042656, 2844562901),
    new Users('Baxie', 'Stile', new Date('7/27/1985'), 9414047, 5229113534),
    new Users('Janeva', 'Kitchener', new Date('1/6/1984'), 4443079, 2299494865),
    new Users('Kayle', 'Courage', new Date('1/1/1995'), 2809993, 5096209453),
    new Users('Georgianna', 'Brane', new Date('10/26/1982'), 9920591, 3012780409),
    new Users('Hadleigh', 'Fort', new Date('4/4/2003'), 4688720, 5692911235),
    new Users('Dana', 'Moogan', new Date('2/27/2005'), 2311852, 5622586697),
    new Users('Becca', 'Mangon', new Date('1/19/1993'), 1888119, 6334478857),
    new Users('Gavan', 'Christene', new Date('2/6/1993'), 2994585, 7777834762),
    new Users('Ludovika', 'Halsted', new Date('1/1/1999'), 7098583, 4131281162),
    new Users('Leodora', 'Causey', new Date('1/17/1988'), 3560202, 7064753792),
    new Users('Elfrieda', 'Congreave', new Date('3/12/2001'), 8955837, 2339732859),
    new Users('Codie', 'Batalle', new Date('1/15/1989'), 4107815, 4911467108),
    new Users('Fabian', 'Eliet', new Date('7/29/1995'), 695304, 3871540764),
    new Users('Eveleen', 'Beggin', new Date('4/26/1988'), 8591886, 8477994075),
    new Users('Hugo', 'Wardingley', new Date('6/25/1982'), 6610044, 6088255169),
    new Users('Francesco', 'Waldie', new Date('3/7/1999'), 7263831, 1642996373),
    new Users('Isacco', 'Gilogly', new Date('10/8/1994'), 9462787, 8799054950),
    new Users('Winnie', 'Sidworth', new Date('9/2/1984'), 6440366, 8937907324),
    new Users('April', 'Durston', new Date('5/10/2005'), 1385211, 4903699603),
    new Users('Philis', 'Amburgy', new Date('6/16/2005'), 4391371, 5818894571),
    new Users('Briano', 'Grzegorecki', new Date('7/10/1996'), 8230689, 5508832756),
    new Users('Arabella', 'Dove', new Date('3/18/2001'), 7649451, 4152503377),
    new Users('Maria', 'Houtby', new Date('7/15/2002'), 7237420, 8042578688),
    new Users('Osbert', 'Goodings', new Date('8/19/1980'), 893267, 7977012936),
    new Users('Arleen', 'Greed', new Date('8/28/1994'), 3064379, 5319648364),
    new Users('Corey', 'Varian', new Date('3/28/1998'), 5912083, 4177025824),
    new Users('Jaquenetta', 'Lorriman', new Date('2/4/2002'), 3811405, 3996476151),
    new Users('Alida', 'Clissell', new Date('10/29/2003'), 8229358, 8745806454),
    new Users('Fancy', 'Alen', new Date('5/13/1983'), 8851172, 8848256066),
    new Users('Heindrick', 'Riseley', new Date('4/21/1990'), 2371721, 3088629337),
    new Users('Sam', 'McVane', new Date('10/14/1987'), 5607703, 9247106404),
    new Users('Jilli', 'Grierson', new Date('10/15/1989'), 8465142, 5743981558),
    new Users('Denys', 'Binstead', new Date('4/29/1997'), 3522384, 9076677276),
    new Users('Miran', 'Milmoe', new Date('2/24/1994'), 3548231, 736889180),
    new Users('Jacobo', 'Lethieulier', new Date('1/15/1992'), 6623899, 4756829466),
    new Users('Car', 'Band', new Date('5/20/1980'), 9101904, 9384837011),
    new Users('Justino', 'Extall', new Date('6/4/1994'), 8940297, 6205114144),
    new Users('Arabela', 'Twitty', new Date('1/1/1999'), 1602059, 6776830707),
    new Users('Genvieve', 'Goulter', new Date('5/22/1982'), 6706860, 3442240869),
    new Users('Dulcinea', 'McLorinan', new Date('6/26/2004'), 8323153, 5437215855),
    new Users('Arlen', 'Baert', new Date('11/13/1983'), 4123180, 6844683765),
    new Users('Elset', 'Nys', new Date('10/17/2002'), 8978933, 6975747343),
    new Users('Charis', 'Gettins', new Date('7/16/1988'), 5889452, 9091565089),
    new Users('Jordan', 'Fantham', new Date('10/27/2004'), 3859652, 2122443548),
    new Users('Fredericka', 'Antal', new Date('12/13/1988'), 2372014, 9461397008),
    new Users('Nickolas', 'Kassel', new Date('8/19/1983'), 9872611, 1942643403),
    new Users('Vinny', 'Perello', new Date('3/20/1992'), 7806074, 2575217909)
];

function makeTable(arr) {
    var html = `<table><thead><tr><td><button id= "firstName" name = "firstName" onclick="genericSort(this.id)">First Name</button></td>` +
        `<td><button id = "lastName" name = "lastName" onclick="genericSort(this.id)">Last Name</button></td>` +
        `<td><button id = "DOB" name = "DOB" onclick="genericSort(this.id)">Age</button></td>` +
        `<td><button id = "DOB" name = "DOB" onclick="genericSort(this.id)">DOB</button></td>` +
        `<td><button id = "salary" name = "salary" onclick="genericSort(this.id)">Salary</button></td>` +
        `<td>Phone Number</td></tr></thead><tbody>`;
    arr.forEach(element => {
        html += "<tr><td>" + element.firstName + "</td><td>" + element.lastName + "</td><td>" + (new Date().getFullYear() - new Date(element.DOB).getFullYear()) +
            "</td><td>" + element.DOB.getDate() + ` ` + element.DOB.getMonth() + ` ` + element.DOB.getFullYear() +
            "</td><td>" + element.salary + "</td><td>" + element.phoneNo + "</td></tr>";
    });
    html += "</tbody></table>";
    document.getElementById('myTable').innerHTML = html;
}

makeTable(users);


function showDataByName() {
    // Search By Name
    var resultByName = queryFromUsersByName(users, document.getElementById('searchQuery').value);
    makeTable(resultByName);
}

function searchByAgeBetween() {
    // Search By Age Between
    var resultByAgeBetween = queryFromUserByAgeBetween(users, document.getElementById('startAge').value, document.getElementById('endAge').value);
    // console.log(resultByAgeBetween);
    makeTable(resultByAgeBetween);
};
console.log(users.sort(compareValues('lastName')));

function genericSort(id) {
    const key = document.getElementById(id).getAttribute('name');
    console.log(key);
    const sortedData = users.sort(compareValues(key));
    makeTable(sortedData);
}