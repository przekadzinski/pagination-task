const dataEntries = []
const numberOfItems = 600

for (let i = 1; i <= numberOfItems; i++) {
    const element = `Element numer: ${i}`
    dataEntries.push(element);
}

const settings = {
    actualPageIdx: 9,
    entriesOnPage: 50,
}


const paginationArray = (dataEntries, settings) => {
    const { actualPageIdx, entriesOnPage } = settings
    const indexOfFirstElement = actualPageIdx * entriesOnPage
    const indexOfLastElement = indexOfFirstElement + entriesOnPage
    if (indexOfFirstElement > numberOfItems) return alert('Nie mam tylu elementów')
    else {
        const entriesOnSelectedPage = dataEntries.slice(indexOfFirstElement, indexOfLastElement)
        console.log(entriesOnSelectedPage)
        return entriesOnSelectedPage

    }

}

paginationArray(dataEntries, settings);
