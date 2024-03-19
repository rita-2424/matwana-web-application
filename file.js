const fs = require('fs');


//reading files
//fs.readFile('./docs/blog1.txt', (err, data) => {
  // if (err) {
   // console.log(err);
   //}
  //console.log(data.toString());
//});
//the fr.readFile is asynchronous
//console.log('last line');

//writing files fs.writeFile is asynchronous too
//below code changes file content in blog1 to hello world
//fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
   //console.log('file was written')
//});
//below code creates another file with the content hello ,again
//fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    //console.log('file was written')
 //});



//directories
//The code below is assynchronous the output folder created is printed after creating the directory
//only run the code if the file does not exist..if the file already exists it will print out an error
//introducing 'if (fs.existsSync('./assets'))' to check if assets folder exists if it doesn;t it creates if it does it prints out that folder already exists.We reverse it by adding a ! at the begining.
//it deletes the folder because the else part run.if you run it again it creates the folder because the if part run and the folder was deleted and the folder does not exist since it was deleted..
if (!fs.existsSync('./assests')) {
   fs.mkdir('./assests', (err) => {
     if (err) {
       console.log(err);
     }
     console.log('folder created');

    });
} else {
    fs.rmdir('./assests', (err) => {
      if (err) {
        console.log(err)
       }
       console.log('folder deleted');
    })
}
//deleting files
//The code below will delete the file if the file exists
if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted');
    })

}