export default function createAvatarUrl(name: string, imgSize:number = 50): string {
    const size = imgSize; // Set the size of the avatar image
    const rounded = true; // Round the corners of the avatar image
    const background = 'random'; // Set the background color of the avatar image to a random color
    const color = 'fff'; // Set the color of the text on the avatar image to white
    const format = 'png'; // Set the format of the avatar image to PNG
  
    const url = `https://ui-avatars.com/api/?name=${name}&size=${size}&rounded=${rounded}&background=${background}&color=${color}&format=${format}`;
  
    return url;
  }