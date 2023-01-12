<script>
	// your script goes here
	import { ChevronDown, Search, Command } from 'lucide-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- Project Dropdown -->
<div class="flex gap-8 items-center">
	<span class="text-6xl">🦊</span>
	<div class="flex items-center gap-4 dark:text-white">
		<h1 class="text-4xl font-medium">Project Aboard</h1>
		<ChevronDown size={20} />
	</div>
</div>
<!-- Search -->
<div class="flex items-center relative w-1/4 ">
	<input
		type="text"
		placeholder="Search"
		class="bg-slate-200 rounded-full p-2  w-full enabled:pl-10 outline-none text-black border-none placeholder:text-gray-500 hover:bg-slate-300 dark:bg-white dark:text-black "
	/>
	<Search size={16} class="absolute left-4 " color="black" />
	<div class="absolute right-4 flex gap-1 items-center">
		<Command size={16} />
		<span>K</span>
	</div>
</div>
<!-- Active users -->
<div class="basis-32 flex items-center select-none relative left-4">
	<Avatar
		initials="JD"
		background=" bg-yellow-300"
		width="w-11"
		class="border-2 border-white bg-clip-border	absolute -left-20"
	/>
	<Avatar
		initials="AK"
		background=" bg-green-600"
		width="w-11"
		class="border-2 border-white  bg-blend-difference absolute -left-14"
	/>
	<Avatar
		initials="LL"
		background="bg-cyan-600"
		width="w-11"
		class="border-2 border-white absolute -left-8"
	/>
	<div
		class="w-16 h-11 rounded-full bg-black border-2 border-white flex items-center justify-center absolute -left-2 z-10"
	>
		<span class="text-white font-bold">+15</span>
	</div>
</div>
