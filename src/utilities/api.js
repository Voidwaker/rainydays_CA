const url='https://api.noroff.dev/api/v1//rainy-days';

export async function makeApiCall() {
    const response = await fetch(url);

    const data = await response.json();

    const data = results;
    return data;
}