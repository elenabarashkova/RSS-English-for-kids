let currentPhoto: string;

export const handlePhotoInput = () => {
  const photoInput = document.getElementById('userPhoto');
  photoInput?.addEventListener('change', (event:Event) => {
    const target = event.currentTarget;
    const targetFiles = (target as HTMLInputElement)?.files || [];
    const file = targetFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      currentPhoto = (reader.result as string);
    };
  });
}

export const getCurrentPhoto = () => currentPhoto;