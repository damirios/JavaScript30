const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick',
'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent,\
 Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);

const ordered = inventors.sort((a, b) => a.year - b.year);

const totalYears = inventors.reduce((total, inventor) => total + inventor.passed - inventor.year, 0)

const oldestToYoungest = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));

console.table(oldestToYoungest);

// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');

// const de = links.map(link => link.textContent);

const sortedPeople = people.sort((a, b) => {
    const lastNameA = a.split(', ')[0];
    const lastNameB = b.split(', ')[0];
    return lastNameA > lastNameB ? 1: -1;
});

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transport);