export const getClassess = (classes) =>
    classes
        .filter((item) => item !=='')
        .join(' ')
        .trim(); 
