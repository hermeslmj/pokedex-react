export const getImageUrl = (id) => {
    return 'images/' + id.toString().padStart(3, '0') + '.png';
}
