let currentPhoto = '';

export const handlePhotoInput = ():void => {
  const photoInput = document.getElementById('userPhoto');

  photoInput?.addEventListener('change', (event:Event) => {
    const target = event.currentTarget;
    const targetFiles = (target as HTMLInputElement)?.files || [];
    const file = targetFiles[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    const image = document.getElementById('userPhotoImg');
    
    reader.onload = () => {
      currentPhoto = (reader.result as string);
      (image as HTMLImageElement).src = currentPhoto;
    };
  });
}

export const getCurrentPhoto = ():string => currentPhoto;