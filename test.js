const dl = require('image-downloader')
const fs = require('fs');
const url = 'https://www.google.com/logos/doodles/2018/teresa-tengs-65th-birthday-4912312048680960-2x.jpg'

options = {
    url: url,
    dest: './file.jpg'        // Save to /path/to/dest/photo.jpg
  }
   fs.unlink(options.dest, (err) => {
     if(err) throw err
     console.log('File unlinked')
   })
  dl.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })


    


