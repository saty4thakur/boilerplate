var inquirer = require('inquirer');
const { ensureDirSync,copyFileSync} = require('fs-extra');

const cwd = process.cwd();
const dir_path = cwd+'/Configurations/RunConfigurations/';

inquirer
  .prompt([
    {type: 'list', message:'Pick the services you want to use', name:'services',
choices:[
    'native-apps-automation',
    'multipe-devices-automation',
    'api-automation',
    'visual-automation',
    'cross_platform',
]}

  ])
  .then((answers) => {
    let fileToWrite = '';
    switch(answers.services){
        case 'native-apps-automation':

            fileToWrite = './configuration/native/run.js';
            break;
        
        case'multipe-devices-automation':
          fileToWrite = './configuration/multipleDevices/run.js';
            break;

        case 'api-automation':
            fileToWrite = './configuration/api/run.js';
            break;
        
        case'visual-automation':
            fileToWrite = './configuration/visual/run.js';
            break;

        case'cross_platform':
            fileToWrite = './configuration/cross_platform/run.js';
            break;
    }
    

    ensureDirSync(dir_path);
    copyFileSync(fileToWrite,dir_path+"/run.js");


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });