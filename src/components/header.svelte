<script>
	// your script goes here
	import { ArrowDown, Search, Command } from 'lucide-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<header class="py-6 flex justify-between">
	<div class="flex gap-8 items-center">
		<span class="text-6xl">🦊</span>
		<h1 class="text-4xl">Header</h1>
		<ArrowDown size={20} />
	</div>
	<!-- Search -->
	<div class="flex items-center relative w-1/4">
		<Search size={16} class="absolute left-4" />
		<input
			type="text"
			placeholder="Search"
			class="bg-slate-100 rounded-full p-2  w-full enabled:pl-10"
		/>
		<div class="absolute right-4 flex gap-1 items-center">
			<Command size={16} />
			<span>K</span>
		</div>
	</div>
	<!-- Active users -->
	<div class="flex">
		<Avatar initials="JD" class=" bg-yellow-300" />
		<Avatar initials="JD" class=" bg-yellow-300" />
		<Avatar initials="JD" class=" bg-yellow-300" />
		<Avatar initials="JD" class=" bg-yellow-300" />
	</div>
</header>
