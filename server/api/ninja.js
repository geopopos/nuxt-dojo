export default defineEventHandler(async (event) => {
    // handle query params
    // const { name } = getQuery(event);

    // handle post data
    // Make sure to catch errors if the body isn't as expected
    // let age;
    // try {
    //     ({ age } = await readBody(event));
    // } catch (error) {
    //     // Handle the error appropriately
    //     console.error('Error parsing the body:', error);
    //     // Return a response or throw an error
    //     return { message: 'Invalid body data' };
    // }

    const {currencyKey} = useRuntimeConfig();

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=${currencyKey}')
    console.log(data)
    return data
});