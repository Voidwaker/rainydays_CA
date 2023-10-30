const url = "https://api.noroff.dev/api/v1//rainy-days";

export async function makeApiCall() {
    const response = await fetch(url);

    let data = await response.json();

    let data = results;

    return data;
}