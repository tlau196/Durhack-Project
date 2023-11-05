/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {
	if (request.url.startsWith('http://127.0.0.1:5000/')) {
        request = new Request(
            request.url.replace('http://127.0.0.1.5000/', 'http://localhost:5173/'),
            request
        );
	}


	return fetch(request);
}


