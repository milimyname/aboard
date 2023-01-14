<script lang="ts">
	// props
	export let text: string;

	// Color logic based on text
	let bgColor: string;

	switch (text) {
		case 'bug':
			bgColor = 'bg-red-500';
			break;
		case 'feature':
			bgColor = 'bg-p-cyan';
			break;
		case 'design':
			bgColor = 'border-2 border-black text-black';
			break;
		case 'draft':
			bgColor = 'bg-gray-200';
			break;
		default:
			bgColor = 'bg-black';
	}
</script>

<button class="btn {bgColor} text-white rounded-md font-semibold tracking-wider">{text}</button>
