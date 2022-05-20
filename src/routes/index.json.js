export async function post({request}) {
	const body = await request.request.formData()

	return {
		status: 201,
		data: body
	}
}