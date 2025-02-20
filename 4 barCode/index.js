import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Escribe la URL de tu perfil de GitHub",
        name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const enlace = answers.URL;
    var qr_png = qr.image(enlace);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("enlace.txt", enlace, (err) => {
        if(err)throw err;
        console.log("El archiv con el enlace ha sido creado correctamente");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });