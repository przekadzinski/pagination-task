const dataEntries = []
const numberOfItems = 700

for (let i = 1; i <= numberOfItems; i++) {
    const element = `Element numer: ${i}`
    dataEntries.push(element);
}

const settings = {
    actualPageIdx: 9,
    entriesOnPage: 50,
}


const paginationArray = (dataEntries, settings) => {

    const { actualPageIdx, entriesOnPage } = settings;
    const isArray = Array.isArray(dataEntries);
    const dataLength = dataEntries.length

    const dataEntriesRequrement = dataLength >= entriesOnPage ? (dataLength / entriesOnPage) : 1;
    const actualPageIdxCorrect = actualPageIdx > 0 && actualPageIdx <= dataEntriesRequrement
    const dataEntriesCorrect = dataLength > 0 && isArray
    const isEntriesOnPagePositiveInteger = Number.isInteger(entriesOnPage) && entriesOnPage > 0

    if (dataEntriesCorrect && isEntriesOnPagePositiveInteger) {

        if (actualPageIdxCorrect) {

            const indexOfFirstElement = (actualPageIdx === 1) ? 0 : ((actualPageIdx - 1) * entriesOnPage)

            const indexOfLastElement = indexOfFirstElement + entriesOnPage

            const entriesOnSelectedPage = dataEntries.slice(indexOfFirstElement, indexOfLastElement)
            console.log(entriesOnSelectedPage)

            return entriesOnSelectedPage

        } else return alert('Nie mam takiej strony')

    } else return alert('Długość tablicy lub ilość wyświetlanych elementów na stronie nieprawidłowa')

}



paginationArray(dataEntries, settings);
