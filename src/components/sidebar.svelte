<script>
	// @ts-ignore
	import logo from '@assets/logo.png';
	import { Inbox, Layers, CalendarDays, FileLineChart, Star } from 'lucide-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { disabled } from '@stores/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { storePrefersDarkScheme, storeLightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	onMount(() => {
		if (storePrefersDarkScheme)
			document.querySelector('.fill-current')?.classList.add('fix-fill-color');
	});

	const onClick = () => {
		if (storeLightSwitch || storePrefersDarkScheme)
			document.querySelector('.fill-current')?.classList.toggle('fix-fill-color');
	};
</script>

<ul class="flex flex-col justify-between items-center h-full ">
	<li class="flex-1 flex flex-col justify-center items-center  gap-10">
		<!-- Disable link -->

		<a
			href="/notification"
			class={$disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<Inbox color={$disabled ? '#000' : '#999'} />
		</a>
		<a href="/">
			<Layers color={$storeLightSwitch ? '#fff' : '#000'} />
		</a>
		<a
			href="/views"
			class={$disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<CalendarDays color={`${$disabled ? '#000' : '#999'}`} />
		</a>
		<a
			href="/analytics"
			class={$disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<FileLineChart color={`${$disabled ? '#000' : '#999'}`} />
		</a>
		<a
			href="/saved"
			class={$disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<Star color={`${$disabled ? '#000' : '#999'}`} />
		</a>
		<a
			href="/profile"
			class={$disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<Avatar initials="KJ" width="w-8" background="bg-yellow-200" />
		</a>
	</li>

	<li class="flex flex-col items-center justify-between h-24 ">
		<a href="/">
			<img src={logo} alt="Aboard Logo" />
		</a>
		<div class=" border border-1 border-p-blue rounded-full">
			<LightSwitch on:click={onClick} />
		</div>
	</li>
</ul>
