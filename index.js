window.onload = () => {
  const uploadButton = document.getElementById('upload-image');
  const canvas = document.getElementById('view');
  uploadButton.onchange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      const context = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
      }
      img.src = reader.result.toString();
    }
    reader.readAsDataURL(event.target.files[0]);
  };
};
