export function dateFormatter(date: string) {
	const dateInISO = new Date(date)

	return dateInISO.toLocaleString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
}
