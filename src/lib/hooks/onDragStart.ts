export function onDragStart(
	event: DragEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	},
	oldColumnIndex: number,
	issueIndex: number
) {
	// Add blurred class to current target
	event.currentTarget.classList.add('blur-sm');
	event.dataTransfer?.setData('text', JSON.stringify({ oldColumnIndex, issueIndex }));
}
