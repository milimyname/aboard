<script>
	// your script goes here
	import { ChevronDown, Search, Command } from 'lucide-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- Project Dropdown -->
<div class="flex gap-8 items-center">
	<span class="text-6xl">🦊</span>
	<div class="flex items-center gap-4">
		<h1 class="text-4xl font-medium">Project Aboard</h1>
		<ChevronDown size={20} />
	</div>
</div>
<!-- Search -->
<div class="flex items-center relative w-1/4 ">
	<input
		type="text"
		placeholder="Search"
		class="bg-slate-200 rounded-full p-2  w-full enabled:pl-10 outline-none  placeholder:text-gray-500 hover:bg-current "
	/>
	<Search size={16} class="absolute left-4 " color="black" />
	<div class="absolute right-4 flex gap-1 items-center">
		<Command size={16} />
		<span>K</span>
	</div>
</div>
<!-- Active users -->
<div class="flex items-center select-none">
	<Avatar initials="JD" background=" bg-yellow-300" width="w-10" border="border-1 border-sky-700" />
	<Avatar initials="AK" background=" bg-green-600" width="w-10" />
	<Avatar initials="LL" background="  bg-cyan-600" width="w-10" />
</div>
