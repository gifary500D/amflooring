export function nextSlide(current: number, total: number): number {
	return (current + 1) % total;
}
