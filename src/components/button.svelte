<script lang="ts">
	// props
	export let text: string;
	export let color: string;
</script>

<button class="btn bg-{color} text-white rounded-md font-semibold tracking-wider">{text}</button>
