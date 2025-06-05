const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const createDirectories = () => {
  const dirs = [
    'public/images',
    'public/images/products',
    'public/images/logos',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const downloadImages = async () => {
  createDirectories();

  const images = [
    {
      url: 'https://www.wfyoung.com/wp-content/uploads/2023/03/wf-young-logo.png',
      filepath: 'public/images/logos/wf-young-logo.png'
    },
    {
      url: 'https://missinglinkproducts.com/wp-content/uploads/2023/04/missing-link-logo.png',
      filepath: 'public/images/logos/missing-link-logo.png'
    },
    {
      url: 'https://www.wfyoung.com/wp-content/uploads/2023/03/hero-bg.jpg',
      filepath: 'public/images/hero-bg.jpg'
    },
    {
      url: 'https://www.wfyoung.com/wp-content/uploads/2023/03/equine-category.jpg',
      filepath: 'public/images/products/equine-category.jpg'
    },
    {
      url: 'https://www.wfyoung.com/wp-content/uploads/2023/03/pets-category.jpg',
      filepath: 'public/images/products/pets-category.jpg'
    }
  ];

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filepath);
      console.log(`Downloaded: ${image.filepath}`);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error.message);
    }
  }
};

downloadImages().catch(console.error); 