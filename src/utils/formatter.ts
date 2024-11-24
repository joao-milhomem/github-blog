import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFormatter(date: string) {
	const dateInISO = new Date(date)

	return dateInISO.toLocaleString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
}

export function calcDateInterval(date: string) {
	return formatDistanceToNow(date, {
		addSuffix: true,
		locale: ptBR,
	})
}
