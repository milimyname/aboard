<script>
	// @ts-ignore
	import logo from '@assets/logo.png';
	import { Sun, Inbox, Layers, CalendarDays, FileLineChart, Star, Moon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { sineIn, sineInOut } from 'svelte/easing';
	import { Avatar } from '@skeletonlabs/skeleton';
	let disabled = false;

	// If config.disabled is true, the sidebar will be hidden

	// Toggle the sun icon to moon icon
	let isDarkMode = false;
	const toggleDarkMode = () => {
		isDarkMode = !isDarkMode;
	};
</script>

<ul class="flex flex-col justify-between items-center h-full">
	<li class="flex-1 flex flex-col justify-center items-center  gap-10">
		<!-- Disable link -->

		<a
			href="/notification"
			class={disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<Inbox color={disabled ? '#000' : '#999'} />
		</a>
		<a href="/">
			<Layers />
		</a>
		<a href="/views" class={disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}>
			<CalendarDays color={`${disabled ? '#000' : '#999'}`} />
		</a>
		<a
			href="/analytics"
			class={disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<FileLineChart color={`${disabled ? '#000' : '#999'}`} />
		</a>
		<a href="/saved" class={disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}>
			<Star color={`${disabled ? '#000' : '#999'}`} />
		</a>
		<a
			href="/profile"
			class={disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
		>
			<Avatar initials="KJ" width="w-8" background="bg-yellow-200" />
		</a>
	</li>

	<li class="flex flex-col items-center justify-between h-24 ">
		<button on:click={toggleDarkMode}>
			{#if isDarkMode}
				<div transition:slide={{ duration: 300, easing: sineIn }}>
					<Moon />
				</div>
			{:else}
				<div transition:slide={{ duration: 300, easing: sineInOut }}>
					<Sun />
				</div>
			{/if}
		</button>
		<a href="/">
			<img src={logo} alt="Aboard Logo" />
		</a>
	</li>
</ul>
