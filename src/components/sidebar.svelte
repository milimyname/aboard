<script>
	// @ts-ignore
	import logo from '@assets/logo.png';
	import { Sun, Bell, Layers, CalendarDays, FileLineChart, Star, Moon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { sineIn, sineInOut } from 'svelte/easing';

	let disabled = false;

	// If config.disabled is true, the sidebar will be hidden

	// Toggle the sun icon to moon icon
	let isDarkMode = false;
	const toggleDarkMode = () => {
		isDarkMode = !isDarkMode;
	};
</script>

<nav class="p-8 h-full">
	<ul class="flex flex-col justify-between items-center h-full">
		<li class="flex-1 flex flex-col justify-center gap-10">
			<a href="/notification">
				<Bell color={`${disabled ? '#000' : '#999'}`} />
			</a>
			<a href="/">
				<Layers />
			</a>
			<a href="/views">
				<CalendarDays color={`${disabled ? '#000' : '#999'}`} />
			</a>
			<a href="/analytics">
				<FileLineChart color={`${disabled ? '#000' : '#999'}`} />
			</a>
			<a href="/saved">
				<Star color={`${disabled ? '#000' : '#999'}`} />
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
</nav>
