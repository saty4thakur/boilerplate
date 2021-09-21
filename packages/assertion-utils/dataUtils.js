// JS file
const readTestData = async () => {

}

const writeData = async () => {

}

// JSON file
const readDataFromJson = async () => {

}

const writeInsideJson = async () => {

}

// Excel file
const readDataFromExcel = async () => {

}

const writeDataInExcel = async () => {

}

// CSV File

const readDataFromCsv = async () => {

}

const writeDataInCsv = async () => {

}

//

const fetchTestData = async (valueKey) => {
  let testData;

  switch (fileType) {
    case 'js':
      testData = readTestData();
      break;
    case 'json':
      testData = readDataFromJson();
      break;
    case 'excel':
      testData = readDataFromExcel();
      break;
    case 'csv':
      testData = readDataFromCsv();
      break;
    default:
      testData = readTestData();
      break;
  }

  return testData;
}

module.exports = {
  fetchTestData,
}
