export const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const dataSlice = data.slice(0, counter);
    setData(dataSlice);
}